import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Switch, FormControlLabel} from '@material-ui/core';

// Selectors
import {isDarkModeSelector} from '../../modules/common/store/selectors';

// Actions
import {toggleDarkMode} from '../../modules/common/store/actions';

const ThemeSwitch: React.FC = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(isDarkModeSelector);

  return (
    <FormControlLabel
      control={
        <Switch
          checked={isDarkMode}
          onChange={() => dispatch(toggleDarkMode())}
          color="primary"
          size="small"
        />
      }
      label="Dark mode"
    />
  );
};

export default ThemeSwitch;
