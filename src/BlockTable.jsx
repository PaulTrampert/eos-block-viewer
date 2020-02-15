import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import BlockRow from './BlockRow';
import EmptyTableView from './EmptyTableView';

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
            !!blocks.length && blocks.map(block => (
              <BlockRow key={block.id} block={block} />
            ))
          }
          {
            !blocks.length && <EmptyTableView />
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