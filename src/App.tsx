import "./App.css";
import Todos from "./components/Todos";
import Todo from "./models/Todo";
function App() {
  const todos = [new Todo("learn react"), new Todo("learn typescript")];

  return <Todos items={todos} />;
}

export default App;
