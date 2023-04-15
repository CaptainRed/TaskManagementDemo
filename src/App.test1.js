import React from 'react';
import ReactDOM from 'react-dom';
import MonthApp from './MonthApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MonthApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
