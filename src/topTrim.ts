
export function topTrim(str: string): string {
  const linesWithContent: string[] = [];
  let contentStarted = false;

  const lines = str.split('\n');
  for (const line of lines) {
    if (line.trim() !== '') {
      contentStarted = true;
    }

    if (contentStarted) {
      linesWithContent.push(line);
    }
  }

  return linesWithContent.join('\n');
}
