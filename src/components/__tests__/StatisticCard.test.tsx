// React
import React from 'react';
import ReactDOM from 'react-dom';

// Component
import StatisticCard from '../StatisticCard';

// Constants
import { TOTAL_CONFIRMED } from '../../constants/general';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StatisticCard title={TOTAL_CONFIRMED} dateString={'2020-04-05T10:58:04Z'} statistic={1337} />, div);
});
