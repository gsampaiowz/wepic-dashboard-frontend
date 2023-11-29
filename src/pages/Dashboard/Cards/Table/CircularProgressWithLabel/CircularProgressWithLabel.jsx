import React from "react";
import { Box, CircularProgress } from "@mui/material";

const CircularProgressWithLabel = (props) => {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 10,
        }}
      >
        {`${Math.round(props.value)}%`}
      </Box>
    </Box>
  );
};

export default CircularProgressWithLabel;
