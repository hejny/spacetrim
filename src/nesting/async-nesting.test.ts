import { describe, expect } from '@jest/globals';
import { spaceTrim } from '../spaceTrim';

// tslint:disable:no-trailing-whitespace
describe('how nesting works', () => {
    it('will asynchronously nest simple values ', () => {
        return expect(
            spaceTrim(
                async (block) => `

                    ${block('Hello asynchronous')}

                `,
            ),
        ).resolves.toBe('Hello asynchronous');
    });

    it('will asynchronously nest simple values ', () => {
        const nested = new Promise<string>((resolve) => {
            setTimeout(() => {
                resolve('100ms timeout');
            }, 100);
        });

        return expect(
            spaceTrim(
                async (block) => `

                    Hello ${block(await nested)}

              `,
            ),
        ).resolves.toBe('Hello 100ms timeout');
    });
});
