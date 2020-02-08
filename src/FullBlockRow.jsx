import React from 'react';
import PropTypes from 'prop-types'

const FullBlockRow = ({block, onClick}) => (
  <tr onClick={onClick}>
    <td colSpan={3}>
      <pre>
        {JSON.stringify(block, null, 2)}
      </pre>
    </td>
  </tr>
)

FullBlockRow.propTypes = {
  block: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default FullBlockRow;