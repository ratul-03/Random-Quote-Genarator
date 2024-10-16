// Data from Object
// Array with quotes
const randomQuotes = [
    {
        quote: 'Quality is not an act, it is a habit',
        author: 'Aristotle',
    },
    {
        quote:
        'Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.',
        author: 'Norman Vincent Peale',
    },
    {
        quote: 'Life is 10% what happens to you and 90% how you react to it.',
        author: 'Charles R. Swindoll',
    },
    {
        quote: 'If you are going through hell, keep going.',
        author: 'Winston Churchill',
    },
    {
        quote: 'Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.',
        author: 'Samuel Beckett',
    },
    {
        quote: 'With the new day comes new strength and new thought',
        author: 'Eleanor Roosevelt',
    },
];

const author = document.getElementById("author");
const quotes = document.getElementById("quote");
const button = document.getElementById("button");

function autoQuote() {
    const quoteIndex = Math.floor(Math.random() * 6);
    quotes.textContent = randomQuote[quoteIndex];
}

autoQuote();

button.addEventListener("click", autoQuote);