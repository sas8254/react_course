import { Create } from "@mui/icons-material";
import { IconButton, InputAdornment, ListItem, TextField } from "@mui/material";
import { useState } from "react";

export default function TodoForm({ addTask }) {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  function handleSubmit(e) {
    e.preventDefault();
    addTask(text);
    setText("");
  }
  return (
    <ListItem>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="New Todo"
          variant="outlined"
          value={text}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="create todo"
                  edge="end"
                  onClick={handleSubmit}
                >
                  <Create></Create>
                </IconButton>
              </InputAdornment>
            ),
          }}
        ></TextField>
      </form>
    </ListItem>
  );
}
