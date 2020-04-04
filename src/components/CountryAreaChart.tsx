// React
import React, { useState, useEffect } from 'react';

// CSS
import './CountryAreaChart.scss';

// External
import { Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Components
import LoadingWheel from './LoadingWheel';

// Api
import { getCovid19StatisticsByCountryAndStatus } from '../api/Covid19Api';

// Constants
import { DATE_PARSING_OPTIONS } from '../constants/general';

// Interface
interface iCountryAreaChartProps {
  country: string;
}
interface ICovid19CountryStatistics {
  Country: string;
  Province: string;
  Lat: number;
  Lon: number;
  Date: string;
  Cases: number;
  Confirmed: number;
  Deaths: number;
  Recovered: number;
  Status: string;
}

const CountryAreaChart: React.FC<iCountryAreaChartProps> = (props) => {
  const { country } = props;

  const [loading, setLoading] = useState(true);
  const [covid19CountryStatistics, setCovid19CountryStatistics] = useState<ICovid19CountryStatistics[] | undefined>(
    undefined,
  );

  useEffect(() => {
    /**
     * Gets the Statistics for a specific Country.
     */
    async function getCovid19CountryStatistics() {
      const covid19StatisticsByCountry: ICovid19CountryStatistics[] = await getCovid19StatisticsByCountryAndStatus(
        country,
        'confirmed',
      );
      const covid19StatisticsByCountryDeaths: ICovid19CountryStatistics[] = await getCovid19StatisticsByCountryAndStatus(
        country,
        'deaths',
      );
      const covid19StatisticsByCountryRecovered: ICovid19CountryStatistics[] = await getCovid19StatisticsByCountryAndStatus(
        country,
        'recovered',
      );

      const covid19ResultWithConfirmed:
        | ICovid19CountryStatistics[]
        | undefined = await handleCovid19StatisticsByCountry(covid19StatisticsByCountry);

      const covid19ResultWithDeaths:
        | ICovid19CountryStatistics[]
        | undefined = await handleCovid19StatisticsByCountryDeaths(
        covid19StatisticsByCountryDeaths,
        covid19ResultWithConfirmed,
      );

      const covid19ResultWithRecovered:
        | ICovid19CountryStatistics[]
        | undefined = await handleCovid19StatisticsByCountryRecovered(
        covid19StatisticsByCountryRecovered,
        covid19ResultWithDeaths,
      );

      setCovid19CountryStatistics(covid19ResultWithRecovered);
    }

    getCovid19CountryStatistics();
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country]);

  const handleCovid19StatisticsByCountry = async (covid19StatisticsByCountry: ICovid19CountryStatistics[]) => {
    if (covid19StatisticsByCountry && Object.keys(covid19StatisticsByCountry).length > 0) {
      return covid19StatisticsByCountry.map((country) => {
        const dateToString = parseDate(country.Date);
        // We change our DataSet here as we know we will only use it on this page.
        country.Date = dateToString;
        country.Confirmed = country.Cases;
        return country;
      });
    }
  };

  const handleCovid19StatisticsByCountryDeaths = async (
    covid19StatisticsByCountryDeaths: ICovid19CountryStatistics[],
    covid19ResultWithConfirmed: ICovid19CountryStatistics[] | undefined,
  ) => {
    if (
      covid19StatisticsByCountryDeaths &&
      covid19ResultWithConfirmed &&
      Object.keys(covid19StatisticsByCountryDeaths).length > 0
    ) {
      return covid19ResultWithConfirmed.map((country) => {
        const countryFound = covid19StatisticsByCountryDeaths.find(
          (countryWithConfirmed) => parseDate(countryWithConfirmed.Date) === country.Date,
        );

        if (countryFound) country.Deaths = countryFound.Cases;
        return country;
      });
    }
  };

  const handleCovid19StatisticsByCountryRecovered = async (
    covid19StatisticsByCountryRecovered: ICovid19CountryStatistics[],
    covid19ResultWithDeaths: ICovid19CountryStatistics[] | undefined,
  ) => {
    if (
      covid19StatisticsByCountryRecovered &&
      covid19ResultWithDeaths &&
      Object.keys(covid19StatisticsByCountryRecovered).length > 0
    ) {
      return covid19ResultWithDeaths.map((country) => {
        const countryFound = covid19StatisticsByCountryRecovered.find(
          (countryWithDeaths) => parseDate(countryWithDeaths.Date) === country.Date,
        );

        if (countryFound) country.Recovered = countryFound.Cases;
        return country;
      });
    }
  };

  const parseDate = (countryDate: string) => {
    // Parsing incoming DateString
    const date = new Date(Date.parse(countryDate));
    return date.toLocaleDateString('nl-NL', DATE_PARSING_OPTIONS);
  };

  return (
    <>
      {loading && <LoadingWheel />}
      {covid19CountryStatistics && (
        <div style={{ width: '50%', height: 300 }} className="CountryAreaChart">
          <ResponsiveContainer>
            <AreaChart width={600} height={400} data={covid19CountryStatistics}>
              <CartesianGrid strokeDasharray="1 1" />
              <XAxis dataKey="Date" />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="top" height={36} />
              <Area type="monotone" dataKey="Confirmed" fillOpacity={0.5} stroke="#027be3" fill="#027be3" />
              <Area type="monotone" dataKey="Deaths" fillOpacity={0.5} stroke="#f44336" fill="#f44336" />
              <Area type="monotone" dataKey="Recovered" fillOpacity={0.5} stroke="#009688" fill="#009688" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
};

export default CountryAreaChart;
