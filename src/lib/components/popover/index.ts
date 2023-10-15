import React from 'react';

export * from './types';

const MenuPopover = React.memo(React.lazy(() => import('./MenuPopover')));
export { MenuPopover };