import { RiCheckLine } from 'react-icons/ri';

import { useAppDispatch } from '../../../hooks/redux';
import { changeActive } from '../../../store/reducers/todoSlice';

import { Todo } from '../../../types';

const TodoContent = ({ todo }: { todo: Todo }) => {
  const dispatch = useAppDispatch();

  const handleChangeActive = () => {
    dispatch(changeActive(todo.id));
  };

  return (
    <>
      <span className="todo__radio" onClick={handleChangeActive}>
        {!todo.isActive && (
          <span className="todo__check-mark">
            <RiCheckLine />
          </span>
        )}
      </span>

      <span className={todo.isActive ? 'todo__title' : 'todo__title todo__title_is_not-active'}>
        {todo.title}
      </span>
    </>
  );
};

export default TodoContent;
