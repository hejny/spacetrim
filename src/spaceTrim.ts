import { spaceTrimNested } from './spaceTrimNested';
import { spaceTrimSimple } from './spaceTrimSimple';

// !!! Describe
export function spaceTrim(
    content: string | ((block: (blockContent: string) => string) => string),
): string {
    if (typeof content === 'function') {
        return spaceTrimNested(content);
    } else {
        return spaceTrimSimple(content);
    }
}

/**
 *  TODO: Allow to change split char , char: RegExp = /\s/
 */
