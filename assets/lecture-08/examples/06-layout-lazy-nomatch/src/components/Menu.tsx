import { NavLink } from 'react-router-dom';

import './Menu.scoped.scss';

function Menu() {
  const routes = { '/': 'Home', '/about': 'About', '/products': 'Products' };

  return (
    <nav>
      <ul>
        {Object.entries(routes).map(([key, value]) => (
          <li key={key}>
            <NavLink
              to={key}
              style={({ isActive }) => {
                return {
                  color: isActive ? 'white' : '',
                };
              }}
            >
              {value}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
