import { verticalTrim } from './verticalTrim';

export default spaceTrim;

export function spaceTrim(
    str: string /* TODO: , char: RegExp = /\s/*/,
): string {
    // ✂️ Trimming from top and bottom
    str = verticalTrim(str);

    // ✂️ Trimming from left and right

    const lines = str.split('\n');

    const lineStats = lines
        .filter((line) => line.trim() !== '')
        .map((line) => {
            const contentStart = line.length - line.trimLeft().length;
            const contentEnd = contentStart + line.trim().length;

            return { contentStart, contentEnd };
        });

    if (lineStats.length === 0) {
        return '';
    }

    const { minContentStart, maxContentEnd } = lineStats.reduce(
        ({ minContentStart, maxContentEnd }, { contentStart, contentEnd }) => ({
            minContentStart: Math.min(minContentStart, contentStart),
            maxContentEnd: Math.max(maxContentEnd, contentEnd),
        }),
        {
            minContentStart: lineStats[0].contentStart,
            maxContentEnd: lineStats[0].contentEnd,
        },
    );

    str = lines
        .map((line) => line.substring(minContentStart, maxContentEnd))
        .join('\n');

    return str;
}
