// React
import React, { useState, useEffect } from 'react';

// CSS
import './App.scss';

// Components
import StatisticCard from './components/StatisticCard';

// Api
import { getCovid19Statistics } from './api/Covid19Api';

const App = () => {
  const [covid19Statistics, setCovid19Statistics] = useState({
    Countries: [],
    Date: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCovid19Statisticss() {
      setCovid19Statistics(await getCovid19Statistics());
      setLoading(false);
    }

    if (
      loading &&
      covid19Statistics.Countries &&
      covid19Statistics.Countries.length === 0
    ) {
      getCovid19Statisticss();
    }
  }, [covid19Statistics, loading]);

  let total = 0;
  covid19Statistics.Countries.forEach((a) => {
    //@ts-ignore
    total = total + a.TotalConfirmed;
  });

  console.log(total);

  return (
    <div className="Covid19">
      <header className="Covid19__header">
        A website to display up to date COVID-19 statistics.
      </header>
      {covid19Statistics && (
        <div className="Covid19__globalStatistics">
          <StatisticCard dateString={covid19Statistics.Date}></StatisticCard>
          <StatisticCard dateString={covid19Statistics.Date}></StatisticCard>
          <StatisticCard dateString={covid19Statistics.Date}></StatisticCard>
        </div>
      )}
    </div>
  );
};

export default App;
