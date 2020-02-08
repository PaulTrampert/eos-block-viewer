import React from 'react';
import PropTypes from 'prop-types';
import {
  Table
} from 'react-bootstrap';
import BlockRow from './BlockRow';

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
              <BlockRow key={block.id} block={block} />
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