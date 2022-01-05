# ✂️ Space trim

[![Package Quality](https://packagequality.com/shield/spacetrim.svg)](https://packagequality.com/#?package=spacetrim)
[![NPM Version](https://badge.fury.io/js/spacetrim.svg)](https://www.npmjs.com/package/spacetrim)
[![Test](https://github.com/hejny/spacetrim/actions/workflows/test.yml/badge.svg)](https://github.com/hejny/spacetrim/actions/workflows/test.yml)
[![Lint](https://github.com/hejny/spacetrim/actions/workflows/lint.yml/badge.svg)](https://github.com/hejny/spacetrim/actions/workflows/lint.yml)
[![Known Vulnerabilities](https://snyk.io/test/github/hejny/spacetrim/badge.svg)](https://snyk.io/test/github/hejny/spacetrim)

Spacetrim is trimming string from all 4 sides.<br/>
It is very helpfull to keep pretty code indentation without keeping strange spaces inside strings.

```
░░░░░░░░░░░░░
░░░░░░░░░░░░░░
░░░░░░░╔═════╗░
░░░░░░░║Hello║░░
░░░░░░░║Space║░░░
░░░░░░░║Trim ║░░░░
░░░░░░░╚═════╝░░░░░
░░░░░░░░░░░░░░░░░░░░
```

## Usage

```bash
npm i spacetrim
```

```typescript
import { spaceTrim } from 'spacetrim';

const trimmed = spaceTrim(`

                Hello
                Space
                Trim


        `);

console.log(trimmed);

/*Hello
Space
Trim*/
```

_See more examples in [simple spaceTrim tests](./src/spaceTrim.test.ts)._

## Nesting

This is very usefull when you want to trim multiline strings inside multiline strings.

```typescript
import { spaceTrim } from 'spacetrim';

const trimmed = spaceTrim(
    (block) => `

                  Numbers
                    ${block(['1', '2', '3'].join('\n'))}
                  Chars
                       ${block(['A', 'B', 'C'].join('\n'))}

`,
);

console.log(trimmed);

/*Numbers
  1
  2
  3
Chars
     A
     B
     C*/
```

_See more examples in [nesting tests](./src/nesting.test.ts)._
