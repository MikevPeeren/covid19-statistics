// React
import React, { useState, useEffect } from 'react';

// CSS
import './SearchForm.scss';

// Material UI
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

// Constants
import { SEARCH_FORM_INPUT_TEXT, SEARCH_FORM_HELPER_TEXT } from '../constants/general';

// Apis
import { getCovid19Countries } from '../api/Covid19Api';

// Interface
interface ISearchFormProps {
  setCountryState: Function;
}
interface iCovid19Country {
  Country: string;
  Slug: string;
}

const SearchForm: React.FC<ISearchFormProps> = (props) => {
  const [input, setInput] = useState('');
  const [countries, setCountries] = useState<iCovid19Country[] | undefined>(undefined);

  const handleCountryChange = (event: any) => {
    setInput(event.target.value);
    props.setCountryState(event.target.value);
  };

  useEffect(() => {
    /**
     * Get the Countries affected by Covid 19.
     */
    async function getCovid19CountriesByApi() {
      setCountries(await getCovid19Countries());
    }

    getCovid19CountriesByApi();
  }, []);

  countries &&
    countries.sort(function (countryA, countryB) {
      if (countryA.Country.toLowerCase() < countryB.Country.toLowerCase()) return -1;
      if (countryA.Country.toLowerCase() > countryB.Country.toLowerCase()) return 1;
      return 0;
    });

  return (
    <FormControl>
      <InputLabel id="country__input--label">{SEARCH_FORM_INPUT_TEXT}</InputLabel>
      <Select value={input} onChange={handleCountryChange} id="country__input" labelId="country__input--label">
        {countries &&
          countries.map((country) => {
            return (
              <MenuItem key={country.Country} value={country.Slug}>
                {country.Country}
              </MenuItem>
            );
          })}
      </Select>
      <FormHelperText>{SEARCH_FORM_HELPER_TEXT}</FormHelperText>
    </FormControl>
  );
};

export default SearchForm;
