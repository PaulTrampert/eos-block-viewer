import React from 'react';
import PropTypes from 'prop-types';
import {
  Navbar,
  Button
} from 'react-bootstrap';

function MainNav({onRequestBlocks}) {
  return (
    <Navbar bg="dark" variant="dark" className="justify-content-between">
      <Navbar.Brand>EOS Block Viewer</Navbar.Brand>
      <Button onClick={onRequestBlocks}>Load</Button>
    </Navbar>
  );
}

MainNav.propTypes = {
  onRequestBlocks: PropTypes.func.isRequired
}

export default MainNav;