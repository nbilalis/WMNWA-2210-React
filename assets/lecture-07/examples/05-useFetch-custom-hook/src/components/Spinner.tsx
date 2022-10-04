import Loader from 'react-loader-spinner';

import './Spinner.scoped.scss';

interface SpinnerProps {
  active?: boolean;
}

function Spinner({ active = false }: SpinnerProps) {
  return (
    <div className={`overlay ${active ? 'active' : ''}`}>
      <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
    </div>
  );
}

Spinner.defaultProps = {
  active: false,
};

export default Spinner;
