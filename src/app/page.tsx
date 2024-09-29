"use client";
import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import { fetchMockCrUXData } from "./lib/fetchData";
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
    <Container maxWidth="xl">
      <Box
        sx={{
          padding: 5,
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Typography variant="h4" style={{ marginBottom: "20px" }}>
          CrUX Report
        </Typography>
        <UrlInput onSubmit={handleFetchData} loading={loading} />
        {cruxData ? (
          cruxData.map((data) => (
            <DataTable key={data.record.key.origin} data={data} />
          ))
        ) : (
          <Box
            flexGrow={1}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography variant="body1" color={error ? "error" : "textPrimary"}>
              {loading
                ? "Fetching..."
                : error
                  ? error
                  : "Enter URL and click Fetch"}
            </Typography>
          </Box>
        )}

        <Box
          component={"footer"}
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#eee",
            padding: 1,
          }}
        >
          Developed by Rahul
        </Box>
      </Box>
    </Container>
  );
}
