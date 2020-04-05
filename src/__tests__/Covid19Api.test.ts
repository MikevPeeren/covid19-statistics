// Axios/Api
import axios from 'axios';
import { getCovid19Statistics, getCovid19Countries, getCovid19StatisticsByCountryAndStatus } from '../api/Covid19Api';

// Constants
import { COVID_19_BASE_API_URL } from '../constants/general';

// Mocks
import {
  Covid19SummaryData,
  Covid19CountriesData,
  Covid19StatisticsByCountryAndStatusData,
} from '../__mocks__/Covid19Data.mock';

// Setup Mock of Axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getCovid19Statistics', () => {
  it('Fetches the summary data successfully from the Covid-19 API', async () => {
    mockedAxios.get.mockResolvedValue({ data: Covid19SummaryData });
    const result = await getCovid19Statistics();

    expect(mockedAxios.get).toHaveBeenCalledWith(`${COVID_19_BASE_API_URL}/summary`);
    expect(result).toBe(Covid19SummaryData);
  });
});

describe('getCovid19Countries', () => {
  it('Fetches the countries data successfully from the Covid-19 API', async () => {
    mockedAxios.get.mockResolvedValue({ data: Covid19CountriesData });
    const result = await getCovid19Countries();

    expect(mockedAxios.get).toHaveBeenCalledWith(`${COVID_19_BASE_API_URL}/countries`);
    expect(result).toBe(Covid19CountriesData);
  });
});

describe('getCovid19StatisticsByCountryAndStatus', () => {
  const country = 'netherlands';
  const status = 'confirmed';

  it('Fetches the statistics data successfully from the Covid-19 API based on Country and Status', async () => {
    mockedAxios.get.mockResolvedValue({ data: Covid19StatisticsByCountryAndStatusData });
    const result = await getCovid19StatisticsByCountryAndStatus(country, status);

    expect(mockedAxios.get).toHaveBeenCalledWith(`${COVID_19_BASE_API_URL}/total/country/${country}/status/${status}`);
    expect(result).toBe(Covid19StatisticsByCountryAndStatusData);
  });
});
