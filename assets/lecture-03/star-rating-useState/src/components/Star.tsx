// import PropTypes from 'prop-types';

import { FaStar } from 'react-icons/fa';

interface StarProps {
  on: boolean;
  onSelect: () => void;
}

function Star({ on = false, onSelect }: StarProps) {
  return <FaStar color={on ? 'yellow' : 'grey'} onClick={onSelect} fontSize="36" />;
}

/* Star.propTypes = {
  on: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
};

Star.defaultProps = {
  on: false,
}; */

export default Star;
