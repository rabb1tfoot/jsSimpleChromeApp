const quotes = [
    {
        quote: "Don't dwell on the past.",
        author: "Nam",
    },
    {
        quote: "Believe in yourself.",
        author: "Beck",
    },
    {
        quote: "Follow your heart.",
        author: "Seo",
    },
    {
        quote: "Seize the day.",
        author: "Park",
    },
    {
        quote: "You only live once.",
        author: "Lee",
    },
    {
        quote: "Past is just past.",
        author: "Jang",
    },
    {
        quote: "Love yourself.",
        author: "Jyung",
    },
    {
        quote: "Where there is a will there is a way.",
        author: "Angela Merkel",
    },
    {
        quote: "Don't beat yourself up.",
        author: "Kim",
    },
    {
        quote: "Life is a journey.",
        author: "Ralph Waldo Emerson",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const quotesText = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = quotesText.quote;
author.innerText = quotesText.author;
