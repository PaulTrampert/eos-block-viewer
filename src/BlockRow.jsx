import React from 'react';
import PropTypes from 'prop-types';
import FullBlockRow from './FullBlockRow';
import SummaryBlockRow from './SummaryBlockRow';

class BlockRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {showDetails: false};
  }

  showDetails = () => {
    this.setState({showDetails: true});
  }

  hideDetails = () => {
    this.setState({showDetails: false});
  }

  render = () => {
    let {block} = this.props;
    let {showDetails} = this.state;

    return (
      <>
        {
          !showDetails &&
          <SummaryBlockRow block={block} onClick={this.showDetails} />
        }
        {
          showDetails &&
          <FullBlockRow block={block} onClick={this.hideDetails} />
        }
      </>
    );
  }
}

BlockRow.propTypes = {
  block: PropTypes.object
};

export default BlockRow;