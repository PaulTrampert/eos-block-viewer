import React from 'react';
import PropTypes from 'prop-types'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import RawBlockView from './RawBlockView';
import RicardianBlockView from './RicardianBlockView';

class FullBlockRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabKey: 'raw'
    };
  }

  setTabKey = (tabKey, event) => {
    event.stopPropagation();
    this.setState({tabKey});
  }

  render = () => {
    let {block, onClick} = this.props;
    let {tabKey} = this.state;
    return (
      <tr onClick={onClick}>
        <td colSpan={3}>
          <Tabs activeKey={tabKey} onSelect={this.setTabKey}>
            <Tab eventKey="raw" title="Raw View">
              {tabKey === "raw" && <RawBlockView block={block} />}
            </Tab>
            <Tab eventKey="ricardian" title="Ricardian Contracts">
              {tabKey === "ricardian" && <RicardianBlockView block={block} />}
            </Tab>
          </Tabs>
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