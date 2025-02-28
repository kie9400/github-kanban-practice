import { useState, useEffect, useRef } from 'react';
import React from 'react';

interface TodoProps {
  onSubmit : (todo : {id:number, text:string}) => void;
}

function TodoForm(props : TodoProps) {
  const [input, setInput] = useState<string>('');
  const [number, setNumber] = useState<number>(1);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  })

  const handleChange = (e) : void => {
    setInput(e.target.value);
  }

  const handleSubmit = (e) : void=> {
    e.preventDefault();

    setNumber(number + 1);

    props.onSubmit({
      id: number,
      text: input
    });

    setInput('');
  }

  return (
    <form id="todoForm" className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="todo-button">Add todo</button>
    </form>
  )
}

export default TodoForm
