import React from 'react';
import PropTypes from 'prop-types';
import countActions from './countActions';

class BlockRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {showDetails: false};
  }

  toggleShowDetails = () => {
    this.setState({showDetails: !this.state.showDetails});
  }

  render = () => {
    let {block} = this.props;
    let {showDetails} = this.state;

    return (
      <>
        {
          !showDetails &&
          <tr onClick={this.toggleShowDetails}>
            <td>{block.id}</td>
            <td>{new Date(block.timestamp).toLocaleString()}</td>
            <td>{countActions(block)}</td>
          </tr>
        }
        {
          showDetails &&
          <tr onClick={this.toggleShowDetails}>
            <td colSpan={3}>
              <pre>
                {JSON.stringify(block, undefined, 2)}
              </pre>
            </td>
          </tr>
        }
      </>
    );
  }
}

BlockRow.propTypes = {
  block: PropTypes.object
};

export default BlockRow;