// React
import React from 'react';
import ReactDOM from 'react-dom';

// Component
import GlobalStatistics from '../GlobalStatistics';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GlobalStatistics />, div);
});
