import { topTrim } from "./topTrim";

export function verticalTrim(str: string): string {
    str = topTrim(str);
    str = topTrim(str.split('\n').reverse().join('\n'))
        .split('\n')
        .reverse()
        .join('\n');
    return str;
}


