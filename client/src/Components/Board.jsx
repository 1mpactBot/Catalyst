import React from "react";
import Box from "@mui/material/Box";
import TaskCard from "./TaskCard";

function Board() {
  return (
    <Box
      component="div"
      sx={{
        p: 2,
        border: "1px solid #d6dee5",
        borderRadius: 1.4,
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <TaskCard />
    </Box>
  );
}

export default Board;
