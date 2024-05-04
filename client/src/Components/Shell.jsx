import React from "react";
import { Routes, Route } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Menu from "./Menu";
import Board from "./Board";

export default function Shell() {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        flexDirection: "row",
        flexGrow: 1,
        mt: "2px",
        ml: "-8px",
        pb: "16px",
        height: "100%",
        width: "100%",
        justifyContent: "space-around",
      }}
    >
      <Grid item xs={2.5} md={2.5}>
        <Menu />
      </Grid>
      <Grid item xs={9.5} md={9.5}>
        <Routes>
          <Route path="/" element={<Board />} />
          <Route path="/admin" element={<div>Admin Panel</div>} />
          <Route path="/user" element={<div>User Profile</div>} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Grid>
    </Grid>
  );
}
