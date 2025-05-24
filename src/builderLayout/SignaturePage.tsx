import { useState } from 'react';

import { Replay as ReplayIcon, Send as SendIcon } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  Container,
  TextField,
  Typography,
} from '@mui/material';

import { SignatureTemplate } from '../emailSignatureTemplate/SignatureTemplate';
import { defaultContent } from '../emailSignatureTemplate/defaultContent';
import { ExportMethodModal } from './exportModal/ExportModal';
import { FlexAuto, FlexCol, FlexRow } from './shared/components/FlexBox';

export default function SignaturePage() {
  const [markdownContent, setMarkdownCode] = useState(defaultContent);
  const [isExportModalOpen, setExportModalOpen] = useState(false);

  return (
    <Container sx={{ my: 4 }}>
      <Typography variant="h1" mb={1}>
        {'Générateur de signature'}
      </Typography>
      <Typography variant="body1" mb={2}>
        {'Générez votre signature mail Centrale Nantes !'}
      </Typography>
      <FlexAuto gap={6} mt={4}>
        <FlexCol width="100%" gap={2}>
          <TextField
            multiline
            value={markdownContent}
            onChange={(e) => setMarkdownCode(e.target.value)}
            label={'Modèle à compléter'}
            fullWidth
            inputProps={{ sx: { fontFamily: 'monospace' } }}
          />
          <FlexRow gap={1} justifyContent="end">
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => setMarkdownCode(defaultContent)}
              endIcon={<ReplayIcon />}
            >
              {'Réinitialiser'}
            </Button>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={() => setExportModalOpen(true)}
            >
              {'Exporter'}
            </Button>
          </FlexRow>
        </FlexCol>
        <Box width="100%" overflow="auto">
          <Card
            sx={{
              p: 3,
              width: 'max-content',
              bgcolor: '#FCFCFC',
              borderRadius: 1,
            }}
          >
            <SignatureTemplate markdownContent={markdownContent} />
          </Card>
        </Box>
      </FlexAuto>
      <ExportMethodModal
        isOpen={isExportModalOpen}
        onClose={() => setExportModalOpen(false)}
        markdownContent={markdownContent}
      />
    </Container>
  );
}
