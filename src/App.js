import { useState } from "react";
import ReactDOM from "react-dom/client";
import './styles.scss';
import Todos from './todos';

function App() {
  const [count, setCount] = useState(0);
  const [isFormShown, setFowmShow] = useState(false);
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState("");

  // Add task Form show and hide bollean
  const showDiv = () => {
    setFowmShow((f) => f = !f);
  };

  // Add task Form submit function
  const handleSubmit = (event) => {
    event.preventDefault();
    if(name?.length > 1){
      setTodos(t => [...t, {'task':name, 'id':('taskid_'+t.length)}]);
      setFowmShow((f) => f = !f);
      setName((n) => n = '');
    }
  }

  // remove task function
  const addTodo = (id) => {
    setTodos(todos.filter((item) => item?.id !== id));
  };
  return (
    <>
      <div className="todoWrapper">
        <div className={"todoInnerWrapper "+ (!isFormShown ? '' : 'showForm')}>
          <div className="todoheader">
            My Todos
          </div>
          <div className="todoScrollWrapper">
            <div className="todoScrollInnerWrapper">
              <div className={"noDataFound "+(todos.length > 0 ? 'hidden hiddentop': '')}>
                <div>No task found</div>
              </div>
              <div className={(todos.length > 0 ? '': 'hidden hiddentop')}>
                <Todos todos={todos} addTodo={addTodo}/>
              </div>
            </div>
          </div>
          <div className="addTaskWrapper">
            <div className={"addTaskButtonWrapper "+(!isFormShown ? '' : 'hidden hiddenbottom')}>
              <div className="addTaskButton">
                <button className="button btn-primary w-100" onClick={showDiv}>Add Task</button>
              </div>
            </div>
            <form onSubmit={handleSubmit} className={"addTaskForm "+(!isFormShown ? 'hidden hiddenbottom' : '')}>
              <label>
                <input
                  placeholder="Enter Your Task" 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                /> 
              </label>
              <div className="formButton">
                <input className="button btn-primary-outlined" type="button" value="Cancel" onClick={showDiv}/>
                <input className="button btn-primary" type="submit" value="Add"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;




