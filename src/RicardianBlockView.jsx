import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';
import api from './apiWrapper';
import getActionsFromBlock from './getActionsFromBlock';
import RicardianTransaction from './RicardianTransaction';
import styles from './RicardianBlockView.module.css';


class RicardianBlockView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      abis: null
    }
  }

  componentDidMount = async () => {
    const {block} = this.props;
    const actions = getActionsFromBlock(block);
    const abis = {};
    for(let action of actions) {
      if (!abis[action.account]) {
        abis[action.account] = await api.getAbi(action.account);
      }
    }
    this.setState({abis});
  }

  render = () => {
    const {block} = this.props;
    const {abis} = this.state;
    const transactions = block.transactions
      .filter(t => t.trx.id)
      .map(t => t.trx.transaction)
    if (abis) {
      return (
        <>
          {
            abis &&
            transactions.map((t, idx) => <RicardianTransaction key={idx} transaction={t} abis={abis} />)
          }
        </>
      );
    }
    return (
      <div className={styles.loading}>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }
}

RicardianBlockView.propTypes = {
  block: PropTypes.object
};

export default RicardianBlockView;