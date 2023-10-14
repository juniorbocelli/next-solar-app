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
  const [mode, setMode] = React.useState<'light' | 'dark'>(themeMode);

  return (
    <ToggleButton
      value="check"
      selected={mode === 'light'}
      onChange={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
        onChangeMode(mode === 'light' ? 'dark' : 'light');
      }}

      sx={{
        width: 30,
        height: 30,
        color: 'white',
        border: '1px solid #fff'
      }}
    >
      {
        mode === 'light' ?
          <DarkModeIcon sx={{
            color: 'white',
          }} />
          :
          <LightModeIcon />
      }
    </ToggleButton>
  );
}