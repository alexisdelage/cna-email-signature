import { render } from '@react-email/render';

import { SignatureTemplate } from '../../emailSignatureTemplate/SignatureTemplate';

export async function copyHtmlSourceCode(markdownContent: string) {
  const htmlCode = await render(
    <SignatureTemplate markdownContent={markdownContent} />,
  );
  try {
    await navigator.clipboard.writeText(htmlCode);
  } catch {
    // continue regardless of error
  }
  return htmlCode;
}
