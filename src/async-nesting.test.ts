import { spaceTrim } from './spaceTrim';

// tslint:disable:no-trailing-whitespace
describe('how nesting works', () => {
    it('will asynchronously nest simple values ', () => {
        expect(
            spaceTrim(
                async (block) => `

                  ${block('Hello asynchronous')}

                `,
            ),
        ).toBe('Hello asynchronous');
    });
});
