import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import BlockRow from './BlockRow';
import EmptyTableView from './EmptyTableView';
import TableLoadingView from './TableLoadingView';

class BlockTable extends React.Component {
  render = () => {
    let {
      blocks,
      loadingBlocks
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
            loadingBlocks && <TableLoadingView />
          }
          {
            !loadingBlocks && !!blocks.length && blocks.map(block => (
              <BlockRow key={block.id} block={block} />
            ))
          }
          {
            !loadingBlocks && !blocks.length && <EmptyTableView />
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