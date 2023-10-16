'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
// components
import { AlertDialog } from '.';

interface PageErrorDialogProps {
  title: string;
  content: string;
  redirectTo: string;
};

export default function PageErrorDialog(props: PageErrorDialogProps) {
  const { title, content, redirectTo } = props;
  const router = useRouter();
  const [open, setOpen] = React.useState<boolean>(true);

  const handleClose = () => {
    setOpen(false);
    router.replace(redirectTo);
  };

  return (
    <AlertDialog
      title={title}
      content={content}
      open={open}
      onClose={handleClose}
    />
  );
};