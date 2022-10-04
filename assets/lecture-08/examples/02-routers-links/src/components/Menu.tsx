import { Link } from 'react-router-dom';

import './Menu.scoped.scss';

function Menu() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  );
}

export default Menu;
