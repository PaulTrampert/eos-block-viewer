import React from 'react';
import MainNav from './MainNav';
import api from './apiWrapper';
import BlockTable from './BlockTable';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loadingBlocks: false,
      blocks: []
    };
  }

  loadBlocks = async () => {
    this.setState({
      loadingBlocks: true
    });

    const blocks = await api.getLastBlocks();

    this.setState({
      loadingBlocks: false,
      blocks
    });
  }

  render = () => {
    let {
      blocks,
      loadingBlocks
    } = this.state;

    return (
      <>
        <MainNav onRequestBlocks={this.loadBlocks} loadingBlocks={loadingBlocks} />
        <BlockTable blocks={blocks} />
      </>
    );
  }
}

export default App;
