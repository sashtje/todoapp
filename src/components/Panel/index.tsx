import FilterButton from '../FilterButton';

import './styles.scss';

const Panel = () => {
  return (
    <div className="panel">
      <div>{10002} items left</div>

      <div className="panel__filter">
        <FilterButton>All</FilterButton>
        <FilterButton>Active</FilterButton>
        <FilterButton>Completed</FilterButton>
      </div>

      <button className="panel__btn">Clear completed</button>
    </div>
  );
};

export default Panel;
