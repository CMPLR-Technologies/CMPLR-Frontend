import { TextField, Paper, Grid } from "@mui/material";
import React from "react";
import "../../../styles/styles.css";

export default function TextInput(props) {
  const { handleFunc, title, val } = props;

  return (
    <div className="registerTextInputDiv">
      <TextField
        style={{ backgroundColor: "white" }}
        fullWidth
        value={val}
        onChange={handleFunc}
        id="emailreg"
        placeholder={title}
        variant="outlined"
      />
    </div>
  );
}
