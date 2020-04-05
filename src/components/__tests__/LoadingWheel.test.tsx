// React
import React from 'react';
import ReactDOM from 'react-dom';

// Component
import LoadingWheel from '../LoadingWheel';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoadingWheel />, div);
});
