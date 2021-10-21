import { spaceTrim } from './spaceTrim';

// tslint:disable:no-trailing-whitespace
describe('how space trim works', () => {
    it('can trim from begining and end', () => {
        expect(spaceTrim(`  foo      `)).toBe('foo');
        expect(spaceTrim(`  foo bar     `)).toBe('foo bar');
        expect(spaceTrim(`  foo  bar      `)).toBe('foo  bar');
        expect(spaceTrim(`\n\n\n  foo      `)).toBe('foo');
        expect(
            spaceTrim(`\n\n\r  foo      
        
        
        `),
        ).toBe('foo');
        expect(
            spaceTrim(`\t  foo      
        
        
        `),
        ).toBe('foo');
    });

    it('can space trim', () => {
        expect(
            spaceTrim(`
        
                Hello
                Space
                Trim
        
        
        `),
        ).toBe(['Hello', 'Space', 'Trim'].join('\n'));
    });

    it('can space trim with white lines inside', () => {
        expect(
            spaceTrim(`
        
                Hello  
                Space  

                                
                  
                Trim   
        
        
        `),
        ).toBe(['Hello', 'Space', '', '     ', '  ', 'Trim '].join('\n'));
    });

    // TODO it('can space trim with tabs', () => {
    // TODO it('can space trim with \n and \r and both ', () => {
});
