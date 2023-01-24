import { useTranslation } from 'react-i18next';

import './Home.scoped.scss';

function Hello() {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('titles.home')}</h1>
      <p>{t('welcome')}</p>
      <p>{t('price', { val: 123456.789 })}</p>
      <p>{t('date', { val: new Date() })}</p>
    </>
  );
}

export default Hello;
