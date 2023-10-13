'use client'
import React from 'react';
// components
import { AlertDialog } from '.';

interface SolarInfoDialogProps {
  text: string;
  isOpen: boolean
};

export default function SolarInfoDialog(props: SolarInfoDialogProps) {
  const { text, isOpen } = props;
  const [open, setOpen] = React.useState<boolean>(isOpen);

  return (
    <AlertDialog
      content={text}
      open={open}
      onClose={() => setOpen(false)}
    />
  );
}
