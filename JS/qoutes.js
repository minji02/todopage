const quotes = [
    {
        quote : "The past can hurt. But from the way I see it, you can either run from it, or learn from it.",
        author: "Lion King"
    },
    {
        quote : "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
        author : "Thomjas A. Edison"
    },
    {
        quote : "You will face many defeats in life, but never let yourself be defeated.",
        author : "Maya Angelou"
    },
    {
        quote : "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author : "Nelson Mandela"
    },
    {
        quote : "Try not to become a man of success but rather try to become a man of value.",
        author : "Albert Einstein"
    },
    {
        quote : "Don’t close your eyes. Look! The reality of fear can be different than you think.",
        author : "Finding Nemo"
    },
    {
        quote : "Anyone can be anything.",
        author : "Zootopia"
    },
    {
        quote : "When in doubt, choose change.",
        author: "Lily leung"
    },
    {
        quote : "Great minds have purposes, others have wishes.",
        author : "Washington Irving"
    },
    {
        quote : "Success usually comes to those who are too busy to be looking for it.",
        author : "Henry"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQoute = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQoute.quote;
author.innerText = `-${todaysQoute.author}-`;