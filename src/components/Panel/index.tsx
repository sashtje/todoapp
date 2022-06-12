import FilterButton from '../FilterButton';

import { useAppSelector } from '../../hooks/redux';
import { useAppDispatch } from './../../hooks/redux';
import { setTodos } from '../../store/reducers/todoSlice';

import { Filter, Todo } from '../../types';

import './styles.scss';

const Panel = () => {
  const { todos } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const getNumberActive = (todos: Todo[]) => {
    return todos.filter((item) => item.isActive === true).length;
  };

  const handleClearCompleted = () => {
    const newTodos = todos.filter((item) => item.isActive === true);

    dispatch(setTodos(newTodos));
  };

  return (
    <div className="panel">
      <div>{`${getNumberActive(todos)} items left`}</div>

      <div className="panel__filter">
        <FilterButton value={Filter.All}>All</FilterButton>

        <FilterButton value={Filter.Active}>Active</FilterButton>

        <FilterButton value={Filter.Completed}>Completed</FilterButton>
      </div>

      <button className="panel__btn" onClick={handleClearCompleted}>
        Clear completed
      </button>
    </div>
  );
};

export default Panel;
