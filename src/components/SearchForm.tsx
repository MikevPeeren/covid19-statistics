// React
import React, { useState } from 'react';

// Material UI
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';

// Constants
import { SEARCH_FORM_INPUT_TEXT, SEARCH_FORM_HELPER_TEXT } from '../constants/general';

interface ISearchFormProps {
  setCountryState: Function;
}

const SearchForm: React.FC<ISearchFormProps> = (props) => {
  const [input, setInput] = useState('');

  const handleCountrySearch = () => {
    props.setCountryState(input);
  };

  const handleCountryChange = (event: any) => {
    setInput(event.target.value);
  };

  return (
    <FormControl
      onKeyPress={(event: any) => {
        if (event.key === 'Enter') {
          handleCountrySearch();
        }
      }}
    >
      <InputLabel htmlFor="country-input">{SEARCH_FORM_INPUT_TEXT}</InputLabel>
      <Input value={input} onChange={handleCountryChange} id="country-input" aria-describedby="country-helper" />
      <FormHelperText id="country-helper">{SEARCH_FORM_HELPER_TEXT}</FormHelperText>
    </FormControl>
  );
};

export default SearchForm;
