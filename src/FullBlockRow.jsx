import React from 'react';
import PropTypes from 'prop-types'
import RawBlockView from './RawBlockView';
import RicardianBlockView from './RicardianBlockView';

class FullBlockRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showRicardian: false
    };
  }

  render = () => {
    let {block, onClick} = this.props;
    let {showRicardian} = this.state;
    return (
      <tr onClick={onClick}>
        <td colSpan={3}>
          {!showRicardian && <RawBlockView block={block} />}
          {showRicardian && <RicardianBlockView block={block} />}
        </td>
      </tr>
    )
  }
}

FullBlockRow.propTypes = {
  block: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default FullBlockRow;