import Input from '../Input';
import Todos from '../Todos';
import Panel from '../Panel';

import './styles.scss';

const Board = () => {
  return (
    <div className="board">
      <Input />

      <Todos />

      <Panel />
    </div>
  );
};

export default Board;
