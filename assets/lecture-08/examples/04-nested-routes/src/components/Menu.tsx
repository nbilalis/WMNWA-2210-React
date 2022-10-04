import { NavLink } from 'react-router-dom';

import './Menu.scoped.scss';

const items = [
  { route: '/', title: 'Home' },
  { route: '/about', title: 'About' },
  { route: '/products', title: 'Products' },
];

function Menu() {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.route}>
          <NavLink
            className={({ isActive }) =>
              `menu-item ${isActive ? 'active' : ''}`
            }
            style={({ isActive }) => ({
              backgroundColor: isActive ? 'blue' : 'darkblue',
              textDecoration: isActive ? 'underline' : 'none',
            })}
            to={item.route}
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
