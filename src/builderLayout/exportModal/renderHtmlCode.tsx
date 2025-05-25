import { render } from '@react-email/render';

import { SignatureTemplate } from '../../emailSignatureTemplate/SignatureTemplate';

export async function renderHtmlCode(markdownContent: string) {
  const htmlCode = await render(
    <SignatureTemplate markdownContent={markdownContent} />,
  );

  const cleanedHtmlCode = htmlCode
    .replace(/<!DOCTYPE[^>]*>/i, '') // remove top <!DOCTYPE> tag using regex
    .replace('<h1', '<p') // replace <h1> with <p> to avoid breaking semantics
    .replace('</h1>', '</p>')
    .trim();

  return cleanedHtmlCode;
}
