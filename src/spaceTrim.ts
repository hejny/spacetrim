export default spaceTrim;

export function spaceTrim(
    str: string /* TODO: , char: RegExp = /\s/*/,
): string {
    // ✂️ Trimming from top and bottom
    str = spaceTrimFromTop(str);
    str = spaceTrimFromTop(str.split('\n').reverse().join('\n'))
        .split('\n')
        .reverse()
        .join('\n');

    // ✂️ Trimming from left and right
    let minStartWhitespaceLength: null | number = null;
    let maxContentLength: number = 0;
    const lines = str.split('\n');

    for (const line of lines) {
        const { startWhitespace, content } = line.match(
            /^(?<startWhitespace>\s*)(?<content>.*?)(\s*)$/,
        )!.groups as any;

        minStartWhitespaceLength = Math.min(
            minStartWhitespaceLength || 99999999999999,
            startWhitespace.length,
        );
        maxContentLength = Math.max(maxContentLength, content.length);
    }
    str = lines
        .map((line) =>
            line.substring(
                minStartWhitespaceLength!,
                minStartWhitespaceLength! + maxContentLength,
            ),
        )
        .join('\n');

    return str;
}

export function spaceTrimFromTop(str: string): string {
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
