import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { Alert, IconButton, Link, TextField, Typography } from '@mui/material';

import { ResponsiveDialogContent } from '../shared/components/ResponsiveDialogContent';
import { ResponsiveDialogHeader } from '../shared/components/ResponsiveDialogHeader';

interface IncludeSignatureModalContentProps {
  onClose: () => void;
  onBack: () => void;
  codeToCopy?: string;
  image?: string;
}

export function IncludeSignatureModalContent({
  onClose,
  onBack,
  codeToCopy,
  image,
}: IncludeSignatureModalContentProps) {
  return (
    <>
      <ResponsiveDialogHeader
        onClose={onClose}
        leftIcon={
          <IconButton onClick={onBack}>
            <ArrowBackIcon />
          </IconButton>
        }
      >
        {'Intégrer la signature'}
      </ResponsiveDialogHeader>
      <ResponsiveDialogContent sx={{ gap: 2, pb: 3 }}>
        <Alert severity="success">
          <Typography variant="body1">
            {'La signature a bien été copiée !'}
          </Typography>
        </Alert>
        <Typography variant="body1">
          Vous pouvez maintenant coller la signature dans votre client mail
          préféré, ou directement sur la{' '}
          <Link href="https://webmail.ec-nantes.fr" target="_blank">
            webmail ECN
          </Link>
          .
        </Typography>
        {!!image && (
          <img
            src={image}
            alt={
              'Aller dans "Paramètres", puis "Signature". Sélectionnez "Format HTML" puis cliquez sur le bouton "Code source" dans la barre d\'outils. Collez ensuite le code HTML !'
            }
          />
        )}
        {!!codeToCopy && (
          <>
            <Typography variant="body1">
              {
                "Si la copie n'a pas fonctionné, vous pouvez aussi copier manuellement le code ci-dessous :"
              }
            </Typography>
            <TextField multiline value={codeToCopy} maxRows={3} />
          </>
        )}
      </ResponsiveDialogContent>
    </>
  );
}
