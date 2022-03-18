import './App.css';
import { useState } from 'react';
 
const App = () => {
  const [todos, setTodos] = useState(["item1", "item2", "item3"])

  return (
    <div className="main">
      <Count todos={todos} />
      <List todos={todos} />
      <NewTodos setTodos={setTodos} />
    </div>
  );
}

const Count = ({ todos }) => {
  return <div className="count">Total Todos: {todos.length}</div>
}

const List = ({ todos }) => {

  return(
      <ul className="list">
        {
          todos.map(todo => (
            <li key={todo}>{todo} <button className="delete">Delete</button></li>
          ))
        }
      </ul>
  )
}

const NewTodos = ({ setTodos }) => {
  
  const handleSubmit = event => {
    event.preventDefault()
    const todo = event.target.elements.todo.value;
    setTodos(prevTodos => [...prevTodos, todo])
  }
  
  return(
    <form onSubmit={handleSubmit}>
      <input type="text" id="todo"/>
      <button type="submit" id="btn" >Add Todo</button>
    </form>
  )
}

export default App;




// const NewTodos = () => {

//   const [input, setInput] = useState('');

//   const setInputHandler = event => {
//     setInput(event.target.value);
//   };

//   return(
//     <div>
//       <input type="text" id="todo" onChange={setInputHandler}/>
//       <button type="submit" id="btn" onClick={()=>{ console.log(input) }}>Add Todo</button>
//     </div>
//   )
// }