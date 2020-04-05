// Api Related
// Pre-release API should be moved to https://api.covid19api.com in the future.
export const COVID_19_BASE_API_URL = 'https://production.covid19api.com';

// General
export const COVID_19_HEADER = 'COVID-19 Statistics';
export const TOTAL_CONFIRMED = 'Total Confirmed';
export const TOTAL_DEATHS = 'Total Deaths';
export const TOTAL_RECOVERED = 'Total Recovered';

export const FOOTER_GENERAL_HEADER = 'About this data';
export const FOOTER_RAPID_HEADER = 'It changes rapidly';
export const FOOTER_RAPID_PARAGRAPH = `
This data changes rapidly, so what’s shown may be out of date.
Information about reported cases is also available on the World Health
Organization site.`;
export const FOOTER_CASES_HEADER = 'It doesn’t include all cases';
export const FOOTER_CASES_PARAGRAPH = `
Confirmed cases aren’t all cases. They only include people who tested
positive. Testing rules and availability vary by country.
`;

// SearchForm
export const SEARCH_FORM_INPUT_TEXT = 'Country';
export const SEARCH_FORM_HELPER_TEXT = 'Select the Country for which you require Statistics.';

// CountryAreaChart
export const NO_DATA_FOUND = 'No Data could be found for this Country.';

export const DATE_PARSING_OPTIONS_CHARTS = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
};

export const DATE_PARSING_OPTIONS_GLOBAL = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
};
