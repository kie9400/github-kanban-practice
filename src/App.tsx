import TodoForm from './component/TodoForm';
import Todo from './component/Todo';
import React from 'react';
import { useState } from 'react';
import './todos.css';

export interface TodoProps {
  text: string;
  id: number;
  isComplete: boolean;
}

function Todos() {  
  //todos 배열은 TodoProps[] 타입의 프로퍼티들만 포함한다. 
  //useState가 todos의 타입을 결정하기 때문에 useState에 타입을 지정해주어야 한다.
  //첫번째 요소는 변수, 두번째 요소는 상태변경 함수
  const [todos, setTodos] = useState<TodoProps[]>([]);

  const addTodo = (todo : TodoProps): void => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos: TodoProps[] = [todo, ...todos];

    setTodos(newTodos);
  };


  const removeTodo = (id : number) : void => {
    const removeArr: TodoProps[] = [...todos].filter(todo => todo.id !== id);

    setTodos(removeArr);
  };

  const completeTodo = (id : number) : void => {
    const completedTodo: TodoProps[] = todos.map(todo => {
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
