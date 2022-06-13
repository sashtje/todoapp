import { Reorder } from 'framer-motion';

import TodoItem from '../TodoItem';
import TodoContent from '../TodoItem/TodoContent';

import { useAppSelector } from '../../hooks/redux';
import { useAppDispatch } from './../../hooks/redux';
import { setTodos } from '../../store/reducers/todoSlice';

import { Filter, Todo } from '../../types';

import './styles.scss';

const Todos = () => {
  const { todos, filter } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const handleReorder = (todos: Todo[]) => {
    dispatch(setTodos(todos));
  };

  return (
    <>
      {filter === Filter.All ? (
        <Reorder.Group axis="y" values={todos} onReorder={handleReorder} className="todos">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </Reorder.Group>
      ) : (
        <div className="todos">
          {todos
            .filter((item) =>
              filter === Filter.Active ? item.isActive === true : item.isActive === false
            )
            .map((todo) => (
              <div key={todo.id} className="todo">
                <TodoContent todo={todo} />
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Todos;
