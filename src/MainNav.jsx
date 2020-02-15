import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {ReactComponent as EosIcon} from './EOS-icon.svg';

function MainNav({onRequestBlocks, loadingBlocks}) {
  return (
    <Navbar bg="dark" variant="dark" className="justify-content-between">
      <Navbar.Brand>
        <EosIcon style={{marginRight: '0.5em'}} />
        EOS Block Viewer
      </Navbar.Brand>
      <Button onClick={onRequestBlocks} disabled={loadingBlocks}>Load</Button>
    </Navbar>
  );
}

MainNav.propTypes = {
  onRequestBlocks: PropTypes.func.isRequired
}

export default MainNav;