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


const trimmed = spaceTrim(`
        
                Hello
                Space
                Trim
        
        
        `);

/*Hello
Space
Trim*/
console.log(trimmed);

```