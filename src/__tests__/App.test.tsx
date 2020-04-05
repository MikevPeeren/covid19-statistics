// React
import React from 'react';
import { render } from '@testing-library/react';

// Components
import App from '../App';

// Constants
import { COVID_19_HEADER, FOOTER_GENERAL_HEADER, FOOTER_RAPID_HEADER, FOOTER_CASES_HEADER } from '../constants/general';

test('Renders Homepage', () => {
  const { getByText } = render(<App />);

  const linkElementHeader = getByText(COVID_19_HEADER);
  const linkElementGeneralHeader = getByText(FOOTER_GENERAL_HEADER);
  const linkElementRapidHeader = getByText(FOOTER_RAPID_HEADER);
  const linkElementFooterHeader = getByText(FOOTER_CASES_HEADER);

  expect(linkElementHeader).toBeInTheDocument();
  expect(linkElementGeneralHeader).toBeInTheDocument();
  expect(linkElementRapidHeader).toBeInTheDocument();
  expect(linkElementFooterHeader).toBeInTheDocument();
});
