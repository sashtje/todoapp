import { FormEvent, useRef } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { v4 as uuidv4 } from 'uuid';

import { useAppDispatch } from './../../hooks/redux';
import { addTodo } from '../../store/reducers/todoSlice';

import { Todo } from '../../types';

import './styles.scss';

const Input = () => {
  const dispatch = useAppDispatch();

  const inputRef = useRef() as React.RefObject<HTMLInputElement>;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const todoText = (inputRef.current as HTMLInputElement).value.trim();

    if (todoText === '') {
      (inputRef.current as HTMLInputElement).value = '';
      return;
    }

    const newTodo: Todo = {
      id: uuidv4(),
      title: todoText,
      isActive: true,
    };

    dispatch(addTodo(newTodo));
    (inputRef.current as HTMLInputElement).value = '';
  };

  return (
    <form className="input" onSubmit={handleSubmit}>
      <span className="input__icon">
        <RiArrowDownSLine />
      </span>

      <input
        className="input__input"
        type="text"
        placeholder="What needs to be done?"
        ref={inputRef}
      />
    </form>
  );
};

export default Input;
