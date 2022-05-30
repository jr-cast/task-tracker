import React from 'react';
import PropTypes from 'prop-types';

function Button({ text, onClick }) {
  return (
    <button onClick={onClick} type="submit" className="btn">
      {text}
    </button>
  );
}

Button.defaultProps = {
  text: 'Add',
  onClick: 'onClick',
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
