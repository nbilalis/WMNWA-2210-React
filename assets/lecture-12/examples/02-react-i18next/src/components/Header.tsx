import { useTranslation } from 'react-i18next';

import Menu from '@/components/Menu';

import logo from '@/assets/logo.svg';

import { langs } from '@/i18n';

import './Header.scoped.scss';

function Header() {
  const { i18n } = useTranslation();

  return (
    <header>
      <div id="wrapper">
        <svg id="logo" data-src={logo} />
        <span id="title">React - Vite - TypeScript template</span>
      </div>
      <div id="toolbar">
        <Menu />
        <div id="langs">
          {Object.entries(langs).map(([k, v]) => (
            <button
              key={k}
              type="button"
              title={v.nativeName}
              onClick={() => i18n.changeLanguage(k)}
              style={{ fontWeight: i18n.resolvedLanguage === k ? 'bold' : 'normal' }}
            >
              {k}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
