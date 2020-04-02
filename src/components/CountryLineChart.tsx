// React
import React, { useState, useEffect } from 'react';

// External
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Components
import LoadingWheel from './LoadingWheel';

// CSS
import './CountryLineChart.scss';

// Api
import { getCovid19StatisticsByCountry } from '../api/Covid19Api';

// Interface
interface iCountryLineChartProps {
  country: string;
}
interface ICovid19CountryStatistics {
  Country: string;
  Province: string;
  Lat: number;
  Lon: number;
  Date: string;
  Cases: number;
  Status: string;
}

const CountryLineChart: React.FC<iCountryLineChartProps> = (props) => {
  const { country } = props;

  const [loading, setLoading] = useState(true);
  const [covid19CountryStatistics, setCovid19CountryStatistics] = useState<[ICovid19CountryStatistics] | null>(null);

  // TODO: Move this perhaps to a top level component that handles the Data?
  useEffect(() => {
    /**
     * Gets the Statistics for a specific Country.
     */
    async function getCovid19CountryStatistics() {
      const covid19StatisticsByCountry = await getCovid19StatisticsByCountry(country);

      // TODO: Error handling for SearchControl.
      if (covid19StatisticsByCountry && Object.keys(covid19StatisticsByCountry).length > 0) {
        //@ts-ignore
        await covid19StatisticsByCountry.forEach((country) => {
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

        setCovid19CountryStatistics(covid19StatisticsByCountry);
      }
    }

    getCovid19CountryStatistics();
    setLoading(false);
  }, [country]);

  // TODO: Add Responsive Layout
  return (
    <>
      {loading && <LoadingWheel />}
      {covid19CountryStatistics && (
        <div className="CountryLineChart">
          <LineChart width={600} height={300} data={covid19CountryStatistics}>
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis dataKey="Date" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Line type="monotone" dataKey="Cases" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </div>
      )}
    </>
  );
};

export default CountryLineChart;
