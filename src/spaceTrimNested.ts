import { spaceTrimSimple } from './spaceTrimSimple';

// !!! Describe
export function spaceTrimNested(
    createContent: (block: (blockContent: string) => string) => string,
): string {
    const content = createContent((blockContent: string) =>
        blockContent
            .split('\n')
            .join('__NEWLINE__')
            .split(' ')
            .join('__SPACE__'),
    );

    let linesHorizontalyTrimmed = spaceTrimSimple(content).split('\n');

    linesHorizontalyTrimmed = linesHorizontalyTrimmed.map((line) => {
        const sublines = line.split('__NEWLINE__');
        const firstSubine = sublines[0];
        const contentStart =
            firstSubine.length - firstSubine.trimStart().length;
        const indentation = ' '.repeat(contentStart);
        return sublines
            .map(
                (subline) =>
                    `${indentation}${subline
                        .trimStart()
                        .split('__SPACE__')
                        .join(' ')}`,
            )
            .join('\n');
    });

    return linesHorizontalyTrimmed.join('\n');
}
