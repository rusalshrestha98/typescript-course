import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

const App: React.FC = () => {
  const [todos] = useState([]);

  const todoAddHandler = (text: string) => {
    console.log(text);
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos}/>
    </div>
  );
}

export default App;
