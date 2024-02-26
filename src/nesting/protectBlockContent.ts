import { NEWLINE, SPACE } from './block-constants';

/**
 * Escapes block content to protect newline and space characters
 */
export function protectBlockContent(blockContent: string): string {
    if (typeof blockContent !== 'string') {
        // Note: This can happen when using in javascript and not in typescript

        throw new TypeError(
            `spaceTrim nested block expected string, but got ${typeof blockContent}`,
        );
    }

    return blockContent.split('\n').join(NEWLINE).split(' ').join(SPACE);
}
