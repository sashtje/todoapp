import './styles.scss';

const FilterButton = ({ children }: { children: string }) => {
  return <button className="filter-btn filter-btn_is_active">{children}</button>;
};

export default FilterButton;
