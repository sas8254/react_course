import { Box, List } from "@mui/material";
import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

function getInitialData() {
  const data = JSON.parse(localStorage.getItem("todos"));
  if (!data) return [];
  return data;
}

export default function TodoList() {
  const [todos, setTodos] = useState(getInitialData);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function removeTodo(id) {
    setTodos((oldTodos) => {
      return oldTodos.filter((t) => t.id !== id);
    });
  }

  function toggleTodo(id) {
    setTodos((oldTodos) => {
      return oldTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  }

  function addTodo(text) {
    return setTodos((oldTodos) => {
      return [...oldTodos, { id: crypto.randomUUID(), text, completed: false }];
    });
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        m: 3,
      }}
    >
      <h1>Todos</h1>
      <div>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {todos.map((todo) => {
            return (
              <TodoItem
                todo={todo}
                key={todo.id}
                rmfunc={removeTodo}
                toggle={() => toggleTodo(todo.id)}
              ></TodoItem>
            );
          })}
          <TodoForm addTask={addTodo}></TodoForm>
        </List>
      </div>
    </Box>
  );
}
