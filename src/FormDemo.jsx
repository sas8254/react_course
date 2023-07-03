import { VolumeDown, VolumeUp } from "@mui/icons-material";
import { Slider, Stack, TextField } from "@mui/material";
import { useState } from "react";

export default function FormDemo() {
  const [text, setText] = useState("");
  const [value, setValue] = useState("50");

  function handleChange(e) {
    setText(e.target.value);
  }
  function handleVol(e) {
    setValue(e.target.value);
  }
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Input"
        variant="outlined"
        placeholder="nothing"
        onChange={handleChange}
        value={text}
      ></TextField>
      <h3>Volume: {value}</h3>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown></VolumeDown>
        <Slider aria-label="Volume" value={value} onChange={handleVol}></Slider>
        <VolumeUp></VolumeUp>
      </Stack>
    </div>
  );
}
