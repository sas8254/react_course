import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
} from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import { useState } from "react";

const initialTodos = [
  { id: 1, text: "study", completed: false },
  { id: 2, text: "make a video", completed: true },
  { id: 3, text: "copy game", completed: false },
  { id: 4, text: "exercise", completed: true },
];

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  return (
    <div>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {todos.map((todo) => {
          const labelId = `checkbox-list-label-${todo.id}`;

          return (
            <ListItem
              key={todo.id}
              secondaryAction={
                <IconButton edge="end" aria-label="comments">
                  <DeleteOutline />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton role={undefined} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={todo.completed}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={todo.text} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
