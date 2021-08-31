import React, { FC} from "react";
import "./App.css";
import "./App.css"


const App: FC = () => {
  return (
    <div className="App">
      <h1>React typescript todo</h1>
      <div className="header">
    
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task..."
            name="task"
          
          
          />
          <input
            type="number"
            placeholder="Deadline (in Days)..."
            name="deadline"
         
           
          />
        </div>
        <button>Add Task</button>
      </div>
     
    </div>
      );
}
export default App;
