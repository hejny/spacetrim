# ✂️ Space trim

Spacetrim is trimming string from all 4 sides

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
