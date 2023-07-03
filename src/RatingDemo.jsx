import { Rating } from "@mui/material";
import { useState } from "react";

export default function RatingDemo() {
  const [value, setValue] = useState(1);
  return (
    <div>
      <h1>{value}</h1>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      ></Rating>
    </div>
  );
}
