import React from 'react';
import PropTypes from 'prop-types';

const RawBlockView = ({block}) => (
  <pre>
    {JSON.stringify(block, null, 2)}
  </pre>
);

RawBlockView.propTypes = {
  block: PropTypes.object
};

export default RawBlockView;
