// React
import React, { useState, useEffect } from 'react';

// External
import { Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Components
import LoadingWheel from './LoadingWheel';

// CSS
import './CountryLineChart.scss';

// Api
import { getCovid19StatisticsByCountryAndStatus } from '../api/Covid19Api';

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
  // TODO: This cluster**** needs to be rewritten obviously.
  useEffect(() => {
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    };

    /**
     * Gets the Statistics for a specific Country.
     */
    async function getCovid19CountryStatistics() {
      const covid19StatisticsByCountry = await getCovid19StatisticsByCountryAndStatus(country, 'confirmed');
      const covid19StatisticsByCountryDeaths = await getCovid19StatisticsByCountryAndStatus(country, 'deaths');
      const covid19StatisticsByCountryRecovered = await getCovid19StatisticsByCountryAndStatus(country, 'recovered');

      console.log(covid19StatisticsByCountry);
      // TODO: Error handling for SearchControl.
      if (covid19StatisticsByCountry && Object.keys(covid19StatisticsByCountry).length > 0) {
        await covid19StatisticsByCountry.forEach((country: { Date: string; Confirmed: any; Cases: any }) => {
          // Parsing incoming DateString
          const date = new Date(Date.parse(country.Date));
          const dateToString = date.toLocaleDateString('nl-NL', options);
          // We change our DataSet here as we know we will only use it on this page.
          country.Date = dateToString;
          country.Confirmed = country.Cases;
        });
      }

      if (covid19StatisticsByCountryDeaths && Object.keys(covid19StatisticsByCountryDeaths).length > 0) {
        await covid19StatisticsByCountryDeaths.forEach((country: { Date: string; Cases: any }) => {
          // Parsing incoming DateString
          const date = new Date(Date.parse(country.Date));
          const dateToString = date.toLocaleDateString('nl-NL', options);

          covid19StatisticsByCountry.forEach((country2: { Date: string; Deaths: any }) => {
            if (country2.Date === dateToString) {
              country2.Deaths = country.Cases;
            }
          });
        });
      }

      if (covid19StatisticsByCountryRecovered && Object.keys(covid19StatisticsByCountryRecovered).length > 0) {
        await covid19StatisticsByCountryRecovered.forEach((country: { Date: string; Cases: any }) => {
          // Parsing incoming DateString
          const date = new Date(Date.parse(country.Date));
          const dateToString = date.toLocaleDateString('nl-NL', options);

          covid19StatisticsByCountry.forEach((country2: { Date: string; Recovered: any }) => {
            if (country2.Date === dateToString) {
              country2.Recovered = country.Cases;
            }
          });
        });
      }
      setCovid19CountryStatistics(covid19StatisticsByCountry);
    }

    getCovid19CountryStatistics();
    setLoading(false);
  }, [country]);

  return (
    <>
      {loading && <LoadingWheel />}
      {covid19CountryStatistics && (
        <div style={{ width: '50%', height: 300 }} className="CountryLineChart">
          <ResponsiveContainer>
            <AreaChart width={600} height={400} data={covid19CountryStatistics}>
              <CartesianGrid strokeDasharray="1 1" />
              <XAxis dataKey="Date" />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="top" height={36} />
              <Area type="monotone" dataKey="Confirmed" fillOpacity={0.4} stroke="#027be3" fill="#027be3" />
              <Area type="monotone" dataKey="Deaths" fillOpacity={0.4} stroke="#f44336" fill="#f44336" />
              <Area type="monotone" dataKey="Recovered" fillOpacity={0.5} stroke="#009688" fill="#009688" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
};

export default CountryLineChart;
