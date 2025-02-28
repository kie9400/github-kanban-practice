import TodoForm from './component/TodoForm';
import Todo from './component/Todo';
import React from 'react';
import { useState } from 'react';
import './todos.css';

function Todos() {
  //todos 배열은 Todo[] 타입의 프로퍼티들만 포함한다.
  const [todos, setTodos] = useState<Todo[]>([]);
  
  interface Todo {
    text: string;
    id: number;
    isComplete: boolean;
  }
  const addTodo = (todo : Todo): void => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos: Todo[] = [todo, ...todos];

    setTodos(newTodos);
  };


  const removeTodo = (id : number) : void => {
    const removeArr: Todo[] = [...todos].filter(todo => todo.id !== id);

    setTodos(removeArr);
  };

  const completeTodo = (id : number) : void => {
    const completedTodo = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }

      return todo;
    })

    setTodos(completedTodo);
  }

  return (
    <div>
      <div className="todo-app">
        <h1>To Do List</h1>
        <h2>오늘은 무슨 일을 계획하나요?</h2>
        <TodoForm onSubmit={addTodo} />
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      </div>
    </div>
  );
}

export default Todos;
