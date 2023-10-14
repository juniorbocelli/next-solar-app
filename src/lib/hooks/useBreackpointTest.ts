'use client'
// hook
import useResponsive from '@/lib/hooks/useResponsive';

export function useBreackpointTest() {
  const smUp = useResponsive('up', 'sm');
  const mdUp = useResponsive('up', 'md');

  return {
    smUp,
    mdUp,
  };
};
