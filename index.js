let quote = "...ask not what your country can do for you — ask what you can do for your country.";

let quoteLength = quote.Length;
let twentysecondLetter = quote[21];
let output = quoteLength;
output = '${quoteLength} [${twentySecondLetter}]';

document.getElementById('result').innerHTML = output;
