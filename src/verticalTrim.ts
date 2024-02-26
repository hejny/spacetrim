import { topTrim } from './topTrim';

/**
 * Trims string from top and bottom new lines
 *
 * @private withing the repository
 */
export function verticalTrim(content: string): string {
    content = topTrim(content);
    content = topTrim(content.split('\n').reverse().join('\n'))
        .split('\n')
        .reverse()
        .join('\n');
    return content;
}
