// React
import React, { useState, useEffect } from 'react';

// External
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Components
import LoadingWheel from './LoadingWheel';

// Api
import { getCovid19StatisticsByCountry } from '../api/Covid19Api';

// Interface
interface ICovid19CountryStatistics {
  Country: string;
  Province: string;
  Lat: number;
  Lon: number;
  Date: string;
  Cases: number;
  Status: string;
}

const CountryLineChart: React.FC = () => {
  const [covid19CountryStatistics, setCovid19CountryStatistics] = useState<
    [ICovid19CountryStatistics] | null
  >(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /**
     * Gets the Statistics for a specific Country.
     */
    async function getCovid19CountryStatistics() {
      setCovid19CountryStatistics(
        // TODO: Make an input field for country.
        await getCovid19StatisticsByCountry('netherlands'),
      );
    }

    if (loading && !covid19CountryStatistics) {
      getCovid19CountryStatistics();
    }
  });

  useEffect(() => {
    /**
     * Formatting the Date so that our Charts can handle it correctly.
     */
    function formatCovid19CountryStatistics() {
      if (covid19CountryStatistics) {
        covid19CountryStatistics.forEach((country) => {
          // Parsing incoming DateString
          const options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
          };
          const date = new Date(Date.parse(country.Date));
          const dateToString = date.toLocaleDateString('nl-NL', options);
          // We change our DataSet here as we know we will only use it on this page.
          country.Date = dateToString;
        });
        setLoading(false);
      }
    }

    if (covid19CountryStatistics) {
      formatCovid19CountryStatistics();
    }
  }, [covid19CountryStatistics, loading]);

  // TODO: Add Responsive Layout
  return (
    <>
      {loading && <LoadingWheel />}
      {covid19CountryStatistics && (
        <LineChart width={600} height={300} data={covid19CountryStatistics}>
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="Date" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Line
            type="monotone"
            dataKey="Cases"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      )}
    </>
  );
};

export default CountryLineChart;
