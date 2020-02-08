import React from 'react';
import PropTypes from 'prop-types';
import countActions from './countActions';

const SummaryBlockRow = ({block, onClick}) => (
  <tr onClick={onClick}>
    <td>{block.id}</td>
    <td>{new Date(block.timestamp).toLocaleString()}</td>
    <td>{countActions(block)}</td>
  </tr>
);

SummaryBlockRow.propTypes = {
  block: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default SummaryBlockRow;