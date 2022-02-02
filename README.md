# ✂️ Space trim

<!--Badges-->

 [![License of ✂️ Space trim](https://img.shields.io/github/license/hejny/spacetrim.svg?style=flat)](https://raw.githubusercontent.com/hejny/spacetrim/master/LICENSE)
 [![NPM Version of ✂️ Space trim](https://badge.fury.io/js/spacetrim.svg)](https://www.npmjs.com/package/spacetrim)
 [![Quality of package ✂️ Space trim](https://packagequality.com/shield/spacetrim.svg)](https://packagequality.com/#?package=spacetrim)
 [![lint](https://github.com/hejny/spacetrim/actions/workflows/lint.yml/badge.svg)](https://github.com/hejny/spacetrim/actions/workflows/lint.yml)
 [![test](https://github.com/hejny/spacetrim/actions/workflows/test.yml/badge.svg)](https://github.com/hejny/spacetrim/actions/workflows/test.yml)
 [![Known Vulnerabilities](https://snyk.io/test/github/hejny/spacetrim/badge.svg)](https://snyk.io/test/github/hejny/spacetrim)
 [![Issues](https://img.shields.io/github/issues/hejny/spacetrim.svg?style=flat)](httzps://github.com/hejny/spacetrim/issues)

<!--/Badges-->

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


## 🖋️ Contributing

I am opened to pull requests, feedback and suggestions. Or if you like this utility, you can [☕ buy me a coffee](https://www.buymeacoffee.com/hejny) or [donate via cryptocurrencies](https://github.com/hejny/hejny/blob/main/documents/crypto.md)


## ✨ Partners


<a href="https://Collboard.com/">
    <img src="https://collboard.fra1.cdn.digitaloceanspaces.com/assets/18.12.1/logo-small.png" alt="Collboard logo" width="50"  />
</a>
&nbsp;&nbsp;&nbsp;
<a href="https://czech.events/">
    <img src="https://czech.events/design/logos/czech.events.transparent-logo.png" alt="Czech.events logo" width="50" />
</a>
&nbsp;&nbsp;&nbsp;
<a href="https://sigmastamp.ml/">
    <img src="https://www.sigmastamp.ml/sigmastamp-logo.white.svg" alt="SigmaStamp logo" width="50"/>
</a>


[Become a partner](https://www.pavolhejny.com/contact/)
