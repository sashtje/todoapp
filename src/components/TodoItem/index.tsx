import { useMotionValue, Reorder } from 'framer-motion';
import { RiCheckLine } from 'react-icons/ri';
import { useRaisedShadow } from '../../hooks/used-raised-shadow';

import { Todo } from '../../types';

import './styles.scss';

const TodoItem = ({ todo }: { todo: Todo }) => {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);

  return (
    <Reorder.Item value={todo} className="todo" style={{ boxShadow, y }}>
      <span className="todo__radio">
        {!todo.isActive && (
          <span className="todo__check-mark">
            <RiCheckLine />
          </span>
        )}
      </span>

      <span className="todo__title">{todo.title}</span>
    </Reorder.Item>
  );
};

export default TodoItem;
