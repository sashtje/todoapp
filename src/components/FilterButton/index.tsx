import './styles.scss';

const FilterButton = ({ isActive = false, children }: { isActive?: boolean; children: string }) => {
  return (
    <button className={isActive ? 'filter-btn filter-btn_is_active' : 'filter-btn'}>
      {children}
    </button>
  );
};

export default FilterButton;
