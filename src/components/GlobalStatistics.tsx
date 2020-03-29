// React
import React, { useState, useEffect } from 'react';

// Externals
import CircularProgress from '@material-ui/core/CircularProgress';

// Components
import StatisticCard from './StatisticCard';

// Api
import { getCovid19Statistics } from '../api/Covid19Api';

// Constants
import {
  TOTAL_CONFIRMED,
  TOTAL_DEATHS,
  TOTAL_RECOVERED,
} from '../constants/general';

interface ICovid19Statistics {
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
  const [
    covid19Statistics,
    setCovid19Statistics,
  ] = useState<ICovid19Statistics | null>(null);
  const [loading, setLoading] = useState(true);

  let totalConfirmed = 0;
  let totalDeaths = 0;
  let totalRecovered = 0;

  useEffect(() => {
    async function getCovid19Statisticss() {
      setCovid19Statistics(await getCovid19Statistics());
      setLoading(false);
    }

    if (loading && !covid19Statistics) {
      getCovid19Statisticss();
    }
  }, [covid19Statistics, loading]);

  if (covid19Statistics) {
    covid19Statistics.Countries.forEach((country) => {
      totalConfirmed = totalConfirmed + country.TotalConfirmed;
      totalDeaths = totalDeaths + country.TotalDeaths;
      totalRecovered = totalRecovered + country.TotalRecovered;
    });
  }

  return (
    <>
      {loading && (
        <div>
          <CircularProgress
            size={100}
            color={'secondary'}
            thickness={3.5}
            variant={'indeterminate'}
          />
        </div>
      )}
      {!loading && covid19Statistics && (
        <div className="Covid19__GlobalStatistics">
          <StatisticCard
            title={TOTAL_CONFIRMED}
            dateString={covid19Statistics.Date}
            statistic={totalConfirmed}
          ></StatisticCard>
          <StatisticCard
            title={TOTAL_DEATHS}
            dateString={covid19Statistics.Date}
            statistic={totalDeaths}
          ></StatisticCard>
          <StatisticCard
            title={TOTAL_RECOVERED}
            dateString={covid19Statistics.Date}
            statistic={totalRecovered}
          ></StatisticCard>
        </div>
      )}
    </>
  );
};

export default GlobalStatistics;
