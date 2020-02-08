import React from 'react';
import PropTypes from 'prop-types';
import countActions from './countActions';

class BlockRow extends React.Component {
  render = () => {
    let {block} = this.props;

    return (
      <tr>
        <td>{block.id}</td>
        <td>{new Date(block.timestamp).toLocaleString()}</td>
        <td>{countActions(block)}</td>
      </tr>
    );
  }
}

BlockRow.propTypes = {
  block: PropTypes.object
};

export default BlockRow;