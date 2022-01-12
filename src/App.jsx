import './App.css';
import Header from './Header';
import ToDoList from './ToDoList';

import todos from './todos';

const App = () => {
  return (
    <div className="App">
      <Header text="TODO LIST" />
      <ToDoList todos={todos} />
    </div>
  );
};

export default App;
