import './Header.scoped.scss';
import Menu from './Menu';

function Header() {
  return (
    <header>
      <div id="wrapper">
        <span id="title">🍺 Beer Selection</span>
      </div>
      <Menu />
    </header>
  );
}

export default Header;
