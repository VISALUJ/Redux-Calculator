import React, { useState } from 'react';
import './Todolist.css'
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className='container'>
      <h1>To-Do List</h1>
      
      <input type="text" value={newTodo} onChange={handleInputChange} placeholder='Enter Todo' className='input'/>
      <button onClick={addTodo} className='bt1'>Add</button>
      
      <ul className='list'>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)} className='bt2'>Delete</button>
          </li>
          
        ))}
      </ul>
      
    </div>
  );
}

export default TodoList;