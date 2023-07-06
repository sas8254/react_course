import { CssBaseline } from "@mui/material";
import "./App.css";
import TodoList from "./TodoList";
import NavBar from "./AppBar";

function App() {
  return (
    <div>
      <CssBaseline></CssBaseline>
      <NavBar></NavBar>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
