import React from 'react';
import PropTypes from 'prop-types';
import {
  Table
} from 'react-bootstrap';

class BlockTable extends React.Component {
  render = () => {
    let {
      blocks
    } = this.props;

    return (
      <Table striped hover>
        <thead>
          <tr>
            <th>Block Hash</th>
            <th>Timestamp</th>
            <th># Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            blocks.map(block => (
              <tr key={block.id}>
                <td>{block.id}</td>
                <td>{new Date(block.timestamp).toLocaleString()}</td>
                <td>{block.transactions.length}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    );
  }
}

BlockTable.propTypes = {
  blocks: PropTypes.array
};

export default BlockTable;