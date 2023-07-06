import {
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
} from "@mui/material";
import { Delete } from "@mui/icons-material";

export default function TodoItem({ todo, rmfunc, toggle }) {
  const labelId = `checkbox-list-label-${todo.id}`;
  function remove() {
    rmfunc(todo.id);
  }
  return (
    <div>
      <ListItem
        key={todo.id}
        secondaryAction={
          <IconButton onClick={remove} edge="end" aria-label="comments">
            <Delete />
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
              onChange={toggle}
            />
          </ListItemIcon>
          <ListItemText id={labelId} primary={todo.text} />
        </ListItemButton>
      </ListItem>
    </div>
  );
}
