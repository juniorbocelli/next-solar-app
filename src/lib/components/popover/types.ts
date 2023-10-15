// @mui
import { PopoverProps } from '@mui/material';

// ----------------------------------------------------------------------

export type MenuPopoverArrowValue =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'left-top'
  | 'left-center'
  | 'left-bottom'
  | 'right-top'
  | 'right-center'
  | 'right-bottom';

export interface MenuPopoverProps extends Omit<PopoverProps, 'open'> {
  anchor: HTMLElement | null;
  open: boolean;
  arrow?: MenuPopoverArrowValue;
  disabledArrow?: boolean;
}
