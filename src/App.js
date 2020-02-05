import React from 'react';
import MainNav from './MainNav';
import api from './apiWrapper';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      blocks: []
    };
  }

  loadBlocks = async () => {
    const blocks = api.getLastBlocks();
    this.setState({blocks});
  }

  render = () => {
    return (
      <>
        <MainNav onRequestBlocks={this.loadBlocks} />
      </>
    );
  }
}

export default App;
