import { isValidHttpUrl } from "@/app/lib/validators";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

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
    <Box
      component={"form"}
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      marginBottom={2}
    >
      {urls.map((url, index) => (
        <Box key={url.key} display={"flex"} alignItems={"flex-start"} gap={2}>
          <Box flexGrow={1}>
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
          </Box>
          {index !== 0 ? (
            <Button
              variant="text"
              onClick={() => {
                setUrls((prev) =>
                  prev.filter((prevUrl) => prevUrl.key !== url.key),
                );
              }}
            >
              remove
            </Button>
          ) : (
            <Box flexBasis={79}></Box>
          )}
        </Box>
      ))}

      <Box display={"flex"} gap={2} justifyContent={"flex-end"}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() =>
            setUrls((prev) => [
              ...prev,
              { key: crypto.randomUUID(), value: "" },
            ])
          }
          disabled={loading}
        >
          add
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onSubmit(urls.map((url) => url.value))}
          disabled={loading || Boolean(error)}
        >
          {loading ? "Loading..." : "Fetch"}
        </Button>
        <Box flexBasis={79}></Box>
      </Box>
    </Box>
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
      size="small"
      label="Enter URL"
      variant="outlined"
      fullWidth
      value={value}
      onChange={(e) => onChange(e.target.value)}
      error={Boolean(error)}
      helperText={error || " "}
      onBlur={onBlur}
    />
  );
};
