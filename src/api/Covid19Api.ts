// Axios/Api
import axios from 'axios';

// Constants
import { COVID_19_BASE_API_URL } from '../constants/general';

/**
 * Returns Global Statistics about Covid-19
 */
export const getCovid19Statistics = async () => {
  return await axios.get(`${COVID_19_BASE_API_URL}/summary`).then((result) => result.data);
};

/**
 * Returns all the Countries that are affected by Covid-19
 */
export const getCovid19Countries = async () => {
  return await axios.get(`${COVID_19_BASE_API_URL}/countries`).then((result) => result.data);
};

/**
 * Returns the detailed information about a Country based on Status given. (confirmed, deaths, recovered)
 *
 * @param {string} country
 * @param {string} status
 */
export const getCovid19StatisticsByCountryAndStatus = async (country: string, status: string) => {
  return await axios
    .get(`${COVID_19_BASE_API_URL}/total/country/${country}/status/${status}`)
    .then((result) => result.data);
};
