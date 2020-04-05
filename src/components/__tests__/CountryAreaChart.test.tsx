// React
import React from 'react';
import ReactDOM from 'react-dom';

// Component
import CountryAreaChart from '../CountryAreaChart';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CountryAreaChart country={'netherlands'} />, div);
});
