
import React from "react";
import Todos from "./components/Todos";
const App: React.FunctionComponent = () => {
  const todos = [{ id: "t1", text: "Finish the course" }];

  return (
    <div>
      <Todos items={todos} />
    </div>
  );
};




export default App;
