import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ character, className, fn }) {
  return (
    <div>
      <button
        type="button"
        className={className}
        onClick={() => { fn(character); }}
      >
        {character}
      </button>
    </div>
  );
}

Button.propTypes = {
  character: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  fn: PropTypes.func.isRequired,
};
