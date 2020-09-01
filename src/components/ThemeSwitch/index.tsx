import React from 'react';
import {Switch, FormControlLabel} from '@material-ui/core';

// HOCs
import withDarkMode, {
  WithThemeTypeProps,
} from '../../modules/common/hoc/withDarkMode';

const ThemeSwitch: React.FC<WithThemeTypeProps> = ({
  toggleDarkMode,
  isDarkMode,
}) => (
  <FormControlLabel
    control={
      <Switch
        checked={isDarkMode}
        onChange={toggleDarkMode}
        color="primary"
        size="small"
      />
    }
    label="Dark mode"
  />
);

export default withDarkMode(ThemeSwitch);
