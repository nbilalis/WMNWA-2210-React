import Menu from '@/components/Menu';

import logo from '@/assets/pokeball.png';

import './Header.scoped.scss';

function Header() {
  return (
    <header>
      <div id="wrapper">
        <img id="logo" src={logo} alt="Pokémon" />
        <span id="title">Pokémon</span>
      </div>
      <Menu />
    </header>
  );
}

export default Header;
