'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function spaceTrim(str /* TODO: , char: RegExp = /\s/*/) {
    // ✂️ Trimming from top and bottom
    str = spaceTrimFromTop(str);
    str = spaceTrimFromTop(str.split('\n').reverse().join('\n'))
        .split('\n')
        .reverse()
        .join('\n');
    // ✂️ Trimming from left and right
    var minStartWhitespaceLength = null;
    var maxContentLength = 0;
    var lines = str.split('\n');
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        var _a = line.match(/^(?<startWhitespace>\s*)(?<content>.*?)(\s*)$/).groups, startWhitespace = _a.startWhitespace, content = _a.content;
        minStartWhitespaceLength = Math.min(minStartWhitespaceLength || 99999999999999, startWhitespace.length);
        maxContentLength = Math.max(maxContentLength, content.length);
    }
    str = lines
        .map(function (line) {
        return line.substring(minStartWhitespaceLength, minStartWhitespaceLength + maxContentLength);
    })
        .join('\n');
    return str;
}
function spaceTrimFromTop(str) {
    var linesWithContent = [];
    var contentStarted = false;
    var lines = str.split('\n');
    for (var _i = 0, lines_2 = lines; _i < lines_2.length; _i++) {
        var line = lines_2[_i];
        if (line.trim() !== '') {
            contentStarted = true;
        }
        if (contentStarted) {
            linesWithContent.push(line);
        }
    }
    return linesWithContent.join('\n');
}

exports.spaceTrim = spaceTrim;
