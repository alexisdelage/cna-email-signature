/**
 * Simple flexbox components for site layout.
 *
 * DO NOT USE for template email signatures!
 * Flexbox is not supported in email clients.
 */
import type { ComponentProps } from 'react';

import { Box } from '@mui/material';
import type { Breakpoint, Theme } from '@mui/material';
import type { OverridableComponent } from '@mui/material/OverridableComponent';
import type { BoxTypeMap } from '@mui/system';

import { useBreakpoint } from './useBreakpoints';

type FlexBoxComponent<Extra = object> = OverridableComponent<
  BoxTypeMap<Extra, 'div', Theme>
>;

export const FlexRow: FlexBoxComponent = (
  props: ComponentProps<FlexBoxComponent>,
) => {
  return <Box display="flex" flexDirection="row" {...props} />;
};

export const FlexCol: FlexBoxComponent = (
  props: ComponentProps<FlexBoxComponent>,
) => {
  return <Box display="flex" flexDirection="column" {...props} />;
};

export const FlexAuto: FlexBoxComponent<{ breakPoint?: Breakpoint }> = ({
  breakPoint = 'md',
  alignItems,
  justifyContent,
  ...props
}: ComponentProps<FlexBoxComponent<{ breakPoint?: Breakpoint }>>) => {
  const bk = useBreakpoint(breakPoint);

  return (
    <Box
      display="flex"
      flexDirection={bk.isLarger ? 'row' : 'column'}
      alignItems={bk.isLarger ? alignItems : justifyContent}
      justifyContent={bk.isLarger ? justifyContent : alignItems}
      {...props}
    />
  );
};
