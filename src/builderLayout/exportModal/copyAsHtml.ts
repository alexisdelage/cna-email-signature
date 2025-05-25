import { renderHtmlCode } from './renderHtmlCode';

export async function copyAsHtml(markdownContent: string) {
  const htmlCode = await renderHtmlCode(markdownContent);

  const element = document.createElement('div');
  element.innerHTML = htmlCode.trim();

  try {
    const type = 'text/html';
    const blob = new Blob([element.innerHTML], { type });
    const data = [new ClipboardItem({ [type]: blob })];
    await navigator.clipboard.write(data);
  } catch {
    // continue regardless of error
  }

  return element.firstChild;
}
