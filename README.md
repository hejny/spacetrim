# ✂️ Space trim

[![Package Quality](https://packagequality.com/badge/spacetrim.png)](https://packagequality.com/#?package=spacetrim)
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
