// React
import React, { useState } from 'react';

// CSS
import './App.scss';

// Components
import GlobalStatistics from './components/GlobalStatistics';
import CountryLineChart from './components/CountryLineChart';
import SearchForm from './components/SearchForm';

// Constants
import {
  COVID_19_HEADER,
  FOOTER_GENERAL_HEADER,
  FOOTER_RAPID_HEADER,
  FOOTER_RAPID_PARAGRAPH,
  FOOTER_CASES_HEADER,
  FOOTER_CASES_PARAGRAPH,
} from './constants/general';

const App = () => {
  const [country, setCountry] = useState('');

  const setCountryState = async (country: string) => {
    setCountry(country);
  };

  return (
    <div className="Covid19">
      <header className="Covid19__Header">{COVID_19_HEADER}</header>
      <div className="Covid19__GlobalStatistics">
        <GlobalStatistics />
      </div>
      <div className="Covid19__SearchForm">
        <SearchForm setCountryState={setCountryState} />
      </div>
      <div className="Covid19__CountryLineChart">{country && <CountryLineChart country={country} />}</div>
      <footer className="Covid19__Footer">
        <h3 className="Covid19__Footer--h3">{FOOTER_GENERAL_HEADER}</h3>
        <h4 className="Covid19__Footer--h4">{FOOTER_RAPID_HEADER}</h4>
        <p className="Covid19__Footer--p">{FOOTER_RAPID_PARAGRAPH}</p>
        <h4 className="Covid19__Footer--h4">{FOOTER_CASES_HEADER}</h4>
        <p className="Covid19__Footer--p">{FOOTER_CASES_PARAGRAPH}</p>
      </footer>
    </div>
  );
};

export default App;
