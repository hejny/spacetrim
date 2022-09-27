import { spaceTrimNested } from './spaceTrimNested';
import { spaceTrimSimple } from './spaceTrimSimple';

// !!! Describe

export function spaceTrim(content: string): string;
export function spaceTrim(
    createContent: (block: (blockContent: string) => string) => string,
): string;
export async function spaceTrim(
    createContent: (block: (blockContent: string) => string) => Promise<string>,
): Promise<string>;

export function spaceTrim(
    content:
        | string
        | ((
              block: (blockContent: string) => string,
          ) => string | Promise<string>),
): string | Promise<string> {
    if (typeof content === 'string') {
        return spaceTrimSimple(content);
    } else {
        return spaceTrimNested(content as any /* !!! */);
    }
}

/**
 *  TODO: Allow to change split char , char: RegExp = /\s/
 */
