import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setFilter } from '../../store/reducers/todoSlice';

import { Filter } from '../../types';

import './styles.scss';

const FilterButton = ({ value, children }: { value: Filter; children: string }) => {
  const { filter } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const handleChangeFilter = () => {
    dispatch(setFilter(value));
  };

  return (
    <button
      className={filter === value ? 'filter-btn filter-btn_is_active' : 'filter-btn'}
      onClick={handleChangeFilter}
    >
      {children}
    </button>
  );
};

export default FilterButton;
