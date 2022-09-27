import { spaceTrimSimple } from './spaceTrimSimple';

// !!! Describe + how to anote overloads typescript jsdoc
export function spaceTrimNested(
    createContent: (block: (blockContent: string) => string) => string,
): string;

export async function spaceTrimNested(
    createContent: (block: (blockContent: string) => string) => Promise<string>,
): Promise<string>;

export function spaceTrimNested(
    createContent: (
        block: (blockContent: string) => string,
    ) => string | Promise<string>,
): string | Promise<string> {
    const content = createContent(protectBlockContent);

    if (typeof content === 'string') {
        return restoreBlockContent(content);
    } else {
        return content.then(restoreBlockContent);
    }
}

// !!! Describe+ other file
function protectBlockContent(blockContent: string): string {
    return blockContent
        .split('\n')
        .join('__NEWLINE__')
        .split(' ')
        .join('__SPACE__');
}

// !!! Describe + other file
function restoreBlockContent(content: string) {
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
