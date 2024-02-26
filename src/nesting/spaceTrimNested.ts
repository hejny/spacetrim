import { protectBlockContent } from './protectBlockContent';
import { restoreBlockContent } from './restoreBlockContent';

/**
 * Trims whitespace from all 4 sides with nested substrings
 *
 * @private withing the repository
 */
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
    } else if (content instanceof Promise) {
        return content
            .then((value) => {
                if (typeof value === 'string') {
                    return value;
                }
                throw new TypeError(
                    `spaceTrim expected string or Promise<string>, but got ${typeof value}`,
                );
            })
            .then(restoreBlockContent);
    } else {
        throw new TypeError(
            `spaceTrim expected string or Promise<string>, but got ${typeof content}`,
        );
    }
}
