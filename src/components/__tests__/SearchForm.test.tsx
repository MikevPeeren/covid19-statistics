// React
import React from 'react';
import ReactDOM from 'react-dom';

// Component
import SearchForm from '../SearchForm';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchForm setCountryState={() => {}} />, div);
});
