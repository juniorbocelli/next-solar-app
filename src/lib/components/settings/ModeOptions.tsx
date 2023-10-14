'use client';
import * as React from 'react';
// @mui
import ToggleButton from '@mui/material/ToggleButton';
import { useSettingsContext } from './SettingsContext';
// @mui icons
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function StandaloneToggleButton() {
  const { themeMode, onChangeMode } = useSettingsContext();
  const [selected, setSelected] = React.useState(themeMode === 'light');

  return (
    <ToggleButton
      value="check"
      selected={selected}
      onChange={() => {
        setSelected(!selected);
        onChangeMode(!selected ? 'light' : 'dark');
      }}

      sx={{
        width: 30,
        height: 30,
        color: 'white',
        border: '1px solid #fff'
      }}
    >
      {
        selected ?
          <DarkModeIcon sx={{
            color: 'white',
          }} />
          :
          <LightModeIcon />
      }
    </ToggleButton>
  );
}