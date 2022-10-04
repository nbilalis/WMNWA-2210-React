import { NavLink } from 'react-router-dom';

import './Menu.scoped.scss';

const items = [
  { route: '/', title: 'Home' },
  { route: '/about', title: 'About' },
  { route: '/pokemon', title: 'Pokémon' },
];

function Menu() {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.route}>
          {/* Use either className or style w/ isActive */}
          <NavLink
            to={item.route}
            className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
