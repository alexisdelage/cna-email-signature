import type { ReactNode } from 'react';

import {
  Close as CloseIcon,
  HelpOutline as HelpOutlineIcon,
} from '@mui/icons-material';
import { DialogTitle, IconButton, Tooltip } from '@mui/material';

import { FlexRow } from './FlexBox';

interface ResponsiveDialogHeaderProps {
  onClose: () => void;
  children?: ReactNode | string;
  leftIcon?: ReactNode;
  helpUrl?: string;
}

export function ResponsiveDialogHeader({
  onClose,
  leftIcon,
  children,
  helpUrl,
}: ResponsiveDialogHeaderProps) {
  return (
    <DialogTitle
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <FlexRow alignItems="center" gap={1} flex={1} pr={1}>
        {leftIcon}
        {children}
      </FlexRow>
      {!!helpUrl && (
        <Tooltip title={'Aide'}>
          <IconButton href={helpUrl} target="_blank" rel="noopener">
            <HelpOutlineIcon />
          </IconButton>
        </Tooltip>
      )}
      <Tooltip title={'Fermer'}>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Tooltip>
    </DialogTitle>
  );
}
