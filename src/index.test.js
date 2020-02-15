import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

jest.mock('react-dom');

test('it renders App', () => {
  document.body.innerHTML = "<div id='root'></div>";

  require('./index');

  expect(ReactDOM.render).toHaveBeenCalledWith(<App />, expect.anything());
});