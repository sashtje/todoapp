import { useState } from 'react';
import { Reorder } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

import TodoItem from '../TodoItem';

import { Todo } from '../../types';

import './styles.scss';

const defaultTodos: Todo[] = [
  { id: uuidv4(), title: 'Тестовое задание', isActive: true },
  { id: uuidv4(), title: 'Прекрасный код', isActive: false },
  { id: uuidv4(), title: 'Покрытие тестами', isActive: true },
];

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>(defaultTodos);

  return (
    <Reorder.Group axis="y" values={todos} onReorder={setTodos} className="todos">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Reorder.Group>
  );
};

export default Todos;
