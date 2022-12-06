import { NavLink } from 'react-router-dom';

import './Menu.scoped.scss';

const items = [
  { route: '/', title: 'Home' },
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
              style={({ isActive }) => ({
                backgroundColor: isActive ? '#343a46' : '#23272f',
              })}
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
