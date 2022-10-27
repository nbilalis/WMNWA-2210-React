// import PropTypes from 'prop-types';

import { FaStar } from 'react-icons/fa';

interface StarProps {
  on: boolean;
  clickHandler: () => void;
}

function Star({ on = false, clickHandler }: StarProps) {
  return <FaStar color={on ? 'orange' : 'gray'} onClick={clickHandler} />;
}

/* Star.propTypes = {
  on: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
};

Star.defaultProps = {
  on: false,
}; */

export default Star;
