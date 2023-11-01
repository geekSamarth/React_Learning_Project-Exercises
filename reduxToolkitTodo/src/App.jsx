import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import "./App.css"
function App() {
  return (
    <>
      <h1 className="text-4xl font-extrabold tracking-wider">Redux Toolkit Todo</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
