import { NavLink } from 'react-router-dom';

import './Menu.scoped.scss';

const items = [
  { route: '/', title: 'Home' },
  { route: '/pokemon', title: 'Pokemon' },
  { route: '/about', title: 'About' },
];

function Menu() {
  return (
    <nav>
      <ul>
        {items.map((item) => (
          <li>
            <NavLink
              className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}
              to={item.route}
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
