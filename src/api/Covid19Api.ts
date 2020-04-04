// Axios/Api
import axios from 'axios';

// Constants
import { COVID_19_BASE_API_URL } from '../constants/general';

export const getCovid19Statistics = async () => {
  return await axios.get(`${COVID_19_BASE_API_URL}/summary`).then((result) => result.data);
};

export const getCovid19Countries = async () => {
  return await axios.get(`${COVID_19_BASE_API_URL}/countries`).then((result) => result.data);
};

export const getCovid19StatisticsByCountryAndStatus = async (country: string, status: string) => {
  return await axios
    .get(`${COVID_19_BASE_API_URL}/total/country/${country}/status/${status}`)
    .then((result) => result.data);
};
