import React from 'react';
import MainNav from './MainNav';
import api from './apiWrapper';
import BlockTable from './BlockTable';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      blocks: []
    };
  }

  loadBlocks = async () => {
    const blocks = await api.getLastBlocks();
    this.setState({blocks});
  }

  render = () => {
    let {blocks} = this.state;

    return (
      <>
        <MainNav onRequestBlocks={this.loadBlocks} />
        <BlockTable blocks={blocks} />
      </>
    );
  }
}

export default App;
