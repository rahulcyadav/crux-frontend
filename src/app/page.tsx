"use client";
import { Container, Typography } from "@mui/material";
import { useState } from "react";
import { fetchMockCrUXData } from "./lib/fetchData";
import styles from "./page.module.css";
import { DataTable } from "./ui/DataTable/DataTable";
import { UrlInput } from "./ui/URLInput/UrlInput";
import { CrUXData } from "./lib/definitions";

export default function Home() {
  const [cruxData, setCruxData] = useState<CrUXData[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFetchData = async (urls: string[]) => {
    setError("");
    setLoading(true);

    try {
      // const data = await fetchCrUXData(url);
      const data = await fetchMockCrUXData(urls);
      setCruxData(data as unknown as CrUXData[]);
    } catch (error) {
      console.error("Error fetching CrUX data:", error);
      setError(String(error));
    }
    setLoading(false);
  };

  return (
    <div className={styles.page}>
      <main>
        <Container maxWidth="xl">
          <Typography variant="h4" style={{ marginBottom: "20px" }}>
            CrUX Report
          </Typography>
          <UrlInput onSubmit={handleFetchData} loading={loading} />
          {cruxData ? (
            cruxData.map((data) => (
              <DataTable key={data.record.key.origin} data={data} />
            ))
          ) : loading ? (
            <Typography variant="body1">Fetching...</Typography>
          ) : error ? (
            <Typography variant="body1" color="error">
              {error}
            </Typography>
          ) : (
            <Typography variant="body1">Enter URL and click Fetch</Typography>
          )}
        </Container>
      </main>
      <footer className={styles.footer}>Developed by Rahul</footer>
    </div>
  );
}
