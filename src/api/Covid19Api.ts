// Axios/Api
import axios from 'axios';

// Constants
import { COVID_19_BASE_API_URL } from '../constants/general';

export const getCovid19Statistics = async () => {
  return await axios
    .get(`${COVID_19_BASE_API_URL}/summary`)
    .then((result) => result.data);
};

export const getCovid19StatisticsByCountry = async (country: string) => {
  return await axios
    .get(`${COVID_19_BASE_API_URL}/total/country/${country}/status/confirmed`)
    .then((result) => result.data);
};
