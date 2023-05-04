import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ value }) {
  return (
    <div>
      <button type="button">
        {value}
        hello
      </button>
    </div>
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
};
