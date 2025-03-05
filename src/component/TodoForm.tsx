import { useState, useEffect, useRef, ChangeEvent, FormEvent } from 'react';
import React from 'react';
import { TodoProps } from '../App';

interface TodoFormProps {
  onSubmit : (todo : TodoProps) => void;
}

function TodoForm({onSubmit} : TodoFormProps) {
  const [input, setInput] = useState<string>('');
  const [number, setNumber] = useState<number>(1);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) : void => {
    setInput(e.target.value);
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) : void=> {
    e.preventDefault();

    setNumber(number + 1);

    onSubmit({
      id: number,
      text: input,
      isComplete: false,
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
