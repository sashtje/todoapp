import { RiArrowDownSLine } from 'react-icons/ri';

import './styles.scss';

const Input = () => {
  return (
    <form className="input">
      <span className="input__icon">
        <RiArrowDownSLine />
      </span>

      <input className="input__input" type="text" placeholder="What needs to be done?" />
    </form>
  );
};

export default Input;
