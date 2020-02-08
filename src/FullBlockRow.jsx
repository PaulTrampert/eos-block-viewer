import React from 'react';
import PropTypes from 'prop-types'
import RawBlockView from './RawBlockView';

const FullBlockRow = ({block, onClick}) => (
  <tr onClick={onClick}>
    <td colSpan={3}>
      <RawBlockView block={block} />
    </td>
  </tr>
)

FullBlockRow.propTypes = {
  block: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default FullBlockRow;