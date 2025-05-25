import { renderHtmlCode } from './renderHtmlCode';

export async function copyHtmlSourceCode(markdownContent: string) {
  const htmlCode = await renderHtmlCode(markdownContent);

  try {
    await navigator.clipboard.writeText(htmlCode);
  } catch {
    // continue regardless of error
  }
  return htmlCode;
}
