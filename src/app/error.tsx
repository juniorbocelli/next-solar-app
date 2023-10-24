'use client'
// components
import { PageErrorDialog } from '@/lib/components/feedback';

// ----------------------------------------------------------------------

export default function Error() {
  return (
    <PageErrorDialog
      title="Erro"
      content="Ocorreram erros durante o carregamento do mapa"
    />
  );
}