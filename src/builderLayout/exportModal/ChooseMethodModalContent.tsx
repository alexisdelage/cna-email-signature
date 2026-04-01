import { Typography } from '@mui/material';

import { LargeBigButton } from '../shared/components/LargeBigButton';
import { ResponsiveDialogContent } from '../shared/components/ResponsiveDialogContent';
import { ResponsiveDialogHeader } from '../shared/components/ResponsiveDialogHeader';
import { copyAsHtml } from './copyAsHtml';
import { copyAsPlainText } from './copyAsPlainText';
import { copyHtmlSourceCode } from './copyHtmlSourceCode';
import imageTutorial from '/signature-tutorial.gif';

interface ChooseMethodModalContentProps {
  onClose: () => void;
  onNextStep: (image?: string, codeToCopy?: string) => void;
  markdownContent: string;
}

export function ChooseMethodModalContent({
  onClose,
  onNextStep,
  markdownContent,
}: ChooseMethodModalContentProps) {
  return (
    <>
      <ResponsiveDialogHeader onClose={onClose}>
        {"Choisissez une méthode d'export"}
      </ResponsiveDialogHeader>
      <ResponsiveDialogContent sx={{ gap: 2, pb: 3 }}>
        <Typography>Méthode recommandée&nbsp;:</Typography>
        <LargeBigButton
          onClick={() => {
            copyAsHtml(markdownContent).then(() => {
              onNextStep();
            });
          }}
          color="primary"
          sx={{ px: 1, py: 2 }}
        >
          <Typography>Copier au format HTML</Typography>
          <Typography variant="caption">Adapté à Gmail</Typography>
        </LargeBigButton>
        <Typography>Autres méthodes&nbsp;:</Typography>
        <LargeBigButton
          onClick={() => {
            copyHtmlSourceCode(markdownContent).then((code) => {
              onNextStep(imageTutorial, code);
            });
          }}
          color="secondary"
          sx={{ px: 1, py: 2 }}
        >
          <Typography>Copier le code source HTML</Typography>
          <Typography variant="caption">Adapté à la webmail ECN</Typography>
        </LargeBigButton>
        <LargeBigButton
          onClick={() => {
            copyAsPlainText(markdownContent).then((code) => {
              onNextStep(undefined, code);
            });
          }}
          color="secondary"
          sx={{ px: 1, py: 2 }}
        >
          <Typography>Copier au format texte simple</Typography>
          <Typography variant="caption">
            Cette méthode ne conserve pas les images et la mise en forme
          </Typography>
        </LargeBigButton>
      </ResponsiveDialogContent>
    </>
  );
}
