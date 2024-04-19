# ✂️ Space trim

<!--Badges-->
<!--⚠️WARNING: This section was generated by https://github.com/hejny/batch-project-editor/blob/main/src/workflows/800-badges/badges.ts so every manual change will be overwritten.-->


[![License of ✂️ Space trim](https://img.shields.io/github/license/hejny/spacetrim.svg?style=flat)](https://github.com/hejny/spacetrim/blob/main/LICENSE)
[![NPM Version of ✂️ Space trim](https://badge.fury.io/js/spacetrim.svg)](https://www.npmjs.com/package/spacetrim)
[![Quality of package ✂️ Space trim](https://packagequality.com/shield/spacetrim.svg)](https://packagequality.com/#?package=spacetrim)
[![lint](https://github.com/hejny/spacetrim/actions/workflows/lint.yml/badge.svg)](https://github.com/hejny/spacetrim/actions/workflows/lint.yml)
[![test](https://github.com/hejny/spacetrim/actions/workflows/test.yml/badge.svg)](https://github.com/hejny/spacetrim/actions/workflows/test.yml)
[![Known Vulnerabilities](https://snyk.io/test/github/hejny/spacetrim/badge.svg)](https://snyk.io/test/github/hejny/spacetrim)
[![Issues](https://img.shields.io/github/issues/hejny/spacetrim.svg?style=flat)](https://github.com/hejny/spacetrim/issues)

<!--/Badges-->

Spacetrim is trimming string from all 4 sides.

It is very helpful to keep pretty code indentation without keeping strange spaces inside a string.

<!--Wallpaper-->
<!--⚠️WARNING: This section was generated by https://github.com/hejny/batch-project-editor/blob/main/src//workflows/315-ai-generated-wallpaper/4-aiGeneratedWallpaperUseInReadme.ts so every manual change will be overwritten.-->

<!--
[![Wallpaper of ✂️ Space trim](assets/ai/wallpaper/gallery/425d6259-2bb1-4173-99f8-a19c6b8254a5-0_0.png)](https://www.midjourney.com/app/jobs/425d6259-2bb1-4173-99f8-a19c6b8254a5)
-->

<!--/Wallpaper-->

> ░ is whitespace and `spaceTrim` will trim the string at the boundaries ╔═╗

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
import spaceTrim from 'spacetrim';

const trimmed = spaceTrim(`

    Hello
    Space
    Trim


`);

console.log(trimmed);

/*
Hello
Space
Trim
*/
```

_See more examples in [simple tests](./src/spaceTrim.test.ts)._

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

/*
Numbers
    1
    2
    3
Chars
    A
    B
    C
*/
```

_See more examples in [nesting tests](./src/nesting/nesting.test.ts)._

## Asynchronous nesting

You can also trim multiline strings which are fetched asynchronously inside multiline strings.

```typescript
import { spaceTrim } from 'spacetrim';

const trimmed = await spaceTrim(
    async (block) => `

        TypeScript:
            ${await fetch('https://en.wikipedia.org/wiki/TypeScript').then(
                (result) => result.text(),
            )}


`,
);

console.log(trimmed);

/*
TypeScript:
    TypeScript is a free and open source programming language...
*/
```

_See more examples in [asynchronous nesting tests](./src/nesting/async-nesting.test.ts)._

<!--Contributing-->
<!--⚠️WARNING: This section was generated by https://github.com/hejny/batch-project-editor/blob/main/src/workflows/810-contributing/contributing.ts so every manual change will be overwritten.-->

## 🖋️ Contributing

I am open to pull requests, feedback, and suggestions. Or if you like this utility, you can [☕ buy me a coffee](https://www.buymeacoffee.com/hejny) or [donate via cryptocurrencies](https://github.com/hejny/hejny/blob/main/documents/crypto.md).

You can also ⭐ star the spacetrim package, [follow me on GitHub](https://github.com/hejny) or [various other social networks](https://www.pavolhejny.com/contact/).

<!--/Contributing-->

<!--Partners-->
<!--⚠️WARNING: This section was generated by https://github.com/hejny/batch-project-editor/blob/main/src/workflows/820-partners/partners.ts so every manual change will be overwritten.-->

## ✨ Partners


<a href="https://collboard.com/">
  <img src="https://collboard.fra1.cdn.digitaloceanspaces.com/assets/18.12.1/logo-small.png" alt="Collboard logo" width="50"  />
</a>
&nbsp;&nbsp;&nbsp;
<a href="https://webgpt.cz/?partner=ph&utm_medium=referral&utm_source=github-readme&utm_campaign=partner-ph">
  <img src="https://webgpt.cz/_next/static/media/webgpt-blue.e2bf1fff.png" alt="WebGPT logo" width="70"  />
</a>


[Become a partner](https://www.pavolhejny.com/contact/)

<!--/Partners-->
