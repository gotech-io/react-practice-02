import './App.css';
import { useState, useEffect } from 'react';
import Header from './Header';
import ToDoList from './ToDoList';
import Toggle from './Toggle';

const App = () => {
  const [todos, setTodos] = useState();
  const [filteredTodos, setFilteredTodos] = useState();
  const [showCompleted, setShowCompleted] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch('./todos.json');
      const remoteTodos = await response.json();
      setTodos(remoteTodos);
    };
    fetchTodos();
  }, []);

  useEffect(() => {
    if (showCompleted) {
      setFilteredTodos(todos);
    } else {
      setFilteredTodos(todos.filter((todo) => !todo.isCompleted));
    }
  }, [todos, showCompleted]);

  const handleChange = (id, newState) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: newState };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <Header text="TODO LIST" />
      <Toggle
        text="Show Completed"
        initialState={showCompleted}
        onChange={setShowCompleted}
      />
      <ToDoList todos={filteredTodos} onChange={handleChange} />
    </div>
  );
};

export default App;
