import { Button, TextField } from "@mui/material";
import { useState } from "react";
import styles from "./UrlInput.module.css";
import { isValidHttpUrl } from "@/app/lib/validators";

export const UrlInput = ({
  onSubmit,
  loading,
}: {
  onSubmit: (urls: string[]) => void;
  loading: boolean;
}) => {
  const [urls, setUrls] = useState(() => [
    { key: "initial", value: "https://developer.intuit.com/" },
  ]);

  const error = !urls.every((url) => isValidHttpUrl(url.value));
  return (
    <form className={styles.form}>
      {urls.map((url, index) => (
        <div key={url.key} className={styles.row}>
          <UrlField
            index={index}
            value={url.value}
            onChange={(value) => {
              setUrls((prev) => {
                const temp = [...prev];
                temp[index].value = value;
                return temp;
              });
            }}
          />
          {index !== 0 && (
            <Button
              onClick={() => {
                setUrls((prev) =>
                  prev.filter((prevUrl) => prevUrl.key !== url.key),
                );
              }}
            >
              remove
            </Button>
          )}
        </div>
      ))}

      <Button
        className={styles.submitButton}
        size="large"
        variant="contained"
        color="primary"
        onClick={() =>
          setUrls((prev) => [...prev, { key: crypto.randomUUID(), value: "" }])
        }
        disabled={loading}
      >
        add
      </Button>
      <Button
        className={styles.submitButton}
        size="large"
        variant="contained"
        color="primary"
        onClick={() => onSubmit(urls.map((url) => url.value))}
        disabled={loading || Boolean(error)}
      >
        {loading ? "Loading..." : "Fetch"}
      </Button>
    </form>
  );
};

const UrlField = ({
  index,
  value,
  onChange,
}: {
  index: number;
  value: string;
  onChange: (value: string) => void;
}) => {
  const [error, setError] = useState("");

  const onBlur = () => {
    if (!value.length) {
      setError("URL is blank");
    } else if (!isValidHttpUrl(value)) {
      setError("invalid URL");
    } else {
      setError("");
    }
  };
  return (
    <TextField
      name={`url[${index}]`}
      size="medium"
      label="Enter URL"
      variant="outlined"
      fullWidth
      value={value}
      onChange={(e) => onChange(e.target.value)}
      error={Boolean(error)}
      helperText={error}
      onBlur={onBlur}
    />
  );
};
