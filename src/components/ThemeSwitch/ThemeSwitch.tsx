import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Switch, FormControlLabel} from '@material-ui/core';

// Selectors
import {isDarkModeSelector} from '../../modules/common/store/selectors';

// Actions
import {setIsDarkMode} from '../../modules/common/store/actions';

const ThemeSwitch: React.FC = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(isDarkModeSelector);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => dispatch(setIsDarkMode.request(checked));

  return (
    <FormControlLabel
      control={
        <Switch
          checked={isDarkMode}
          onChange={handleChange}
          color="primary"
          size="small"
        />
      }
      label="Dark mode"
    />
  );
};

export default ThemeSwitch;
