// React
import React, { useState, useEffect } from 'react';

// Components
import StatisticCard from './StatisticCard';
import LoadingWheel from './LoadingWheel';

// Api
import { getCovid19Statistics } from '../api/Covid19Api';

// Constants
import { TOTAL_CONFIRMED, TOTAL_DEATHS, TOTAL_RECOVERED } from '../constants/general';

// Interface
interface ICovid19Statistics {
  Global: {
    NewConfirmed: number;
    TotalConfirmed: number;
    NewDeaths: number;
    TotalDeaths: number;
    NewRecovered: number;
    TotalRecovered: number;
  };
  Countries: [
    {
      TotalConfirmed: number;
      NewConfirmed: number;
      TotalDeaths: number;
      NewDeaths: number;
      TotalRecovered: number;
    },
  ];
  Date: string;
}

const GlobalStatistics = () => {
  const [covid19Statistics, setCovid19Statistics] = useState<ICovid19Statistics | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    /**
     * Get the Global Covid 19 Statistics
     */
    async function getCovid19Stats() {
      setCovid19Statistics(await getCovid19Statistics());
      setLoading(false);
    }

    if (loading && !covid19Statistics) {
      getCovid19Stats();
    }
  });

  return (
    <>
      {loading && <LoadingWheel />}
      {!loading && covid19Statistics && (
        <div className="Covid19__GlobalStatistics">
          <StatisticCard
            title={TOTAL_CONFIRMED}
            dateString={covid19Statistics.Date}
            statistic={covid19Statistics.Global.TotalConfirmed}
          ></StatisticCard>
          <StatisticCard
            title={TOTAL_DEATHS}
            dateString={covid19Statistics.Date}
            statistic={covid19Statistics.Global.TotalDeaths}
          ></StatisticCard>
          <StatisticCard
            title={TOTAL_RECOVERED}
            dateString={covid19Statistics.Date}
            statistic={covid19Statistics.Global.TotalRecovered}
          ></StatisticCard>
        </div>
      )}
    </>
  );
};

export default GlobalStatistics;
