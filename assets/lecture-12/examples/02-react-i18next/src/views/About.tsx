import { useTranslation } from 'react-i18next';

import './About.scoped.scss';

function About() {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('titles.about')}</h1>
      <p>{t('starting-point')}</p>
    </>
  );
}

export default About;
