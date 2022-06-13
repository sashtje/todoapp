import { useMotionValue, Reorder } from 'framer-motion';

import TodoContent from './TodoContent';

import { useRaisedShadow } from '../../hooks/used-raised-shadow';

import { Todo } from '../../types';

import './styles.scss';

const TodoItem = ({ todo }: { todo: Todo }) => {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);

  return (
    <Reorder.Item value={todo} className="todo" style={{ boxShadow, y }}>
      <TodoContent todo={todo} />
    </Reorder.Item>
  );
};

export default TodoItem;
