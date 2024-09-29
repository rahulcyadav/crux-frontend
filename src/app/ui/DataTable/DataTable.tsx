import { CrUXData } from "@/app/lib/definitions";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Filter } from "./Filter";

export const DataTable = ({ data }: { data: CrUXData }) => {
  const [selectedMetric, setSelectedMetric] = useState("all");
  const entries = Object.entries(data.record.metrics);
  const filteredData =
    selectedMetric !== "all"
      ? entries.filter(([key]) => key === selectedMetric)
      : entries;

  return (
    <>
      <Typography variant="h4" gutterBottom>
        {data.record.key.origin}
      </Typography>
      <Filter
        value={selectedMetric}
        onChange={(value) => {
          setSelectedMetric(value);
        }}
        options={Object.entries(data.record.metrics)
          .filter(([key, value]) => Boolean(value.percentiles))
          .map(([key]) => ({
            value: key,
            label: key.replace(/_/g, " "),
          }))}
      />
      <TableContainer
        component={Paper}
        style={{ marginBottom: 32 }}
        variant="outlined"
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Metric</TableCell>
              <TableCell>Histogram (Start-End)</TableCell>
              <TableCell>Density</TableCell>
              <TableCell>Percentile (p75)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map(
              ([key, value]) =>
                value.percentiles && (
                  <React.Fragment key={key}>
                    <TableRow>
                      <TableCell rowSpan={value.histogram?.length}>
                        <strong>{key.replace(/_/g, " ")}</strong>
                      </TableCell>

                      <TableCell>
                        {value.histogram?.[0].end
                          ? `${value.histogram?.[0].start} - ${value.histogram?.[0].end}`
                          : `>=${value.histogram?.[0].start}`}
                      </TableCell>
                      <TableCell>{value.histogram?.[0].density}</TableCell>
                      <TableCell rowSpan={value.histogram?.length}>
                        {value.percentiles?.p75 || "N/A"}
                      </TableCell>
                    </TableRow>
                    {value.histogram &&
                      value.histogram.map(
                        (hist, index) =>
                          index !== 0 && (
                            <TableRow key={index}>
                              <TableCell>
                                {hist.end
                                  ? `${hist.start} - ${hist.end}`
                                  : `>=${hist.start}`}
                              </TableCell>
                              <TableCell>{hist.density}</TableCell>
                            </TableRow>
                          ),
                      )}
                  </React.Fragment>
                ),
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
