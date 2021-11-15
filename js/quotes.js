const quotes = [
{quote: "왜 굳이 의미를 찾으려 하는가? 인생은 욕망이지 의미가 아니다.",
author: "찰리채플린",},
{quote: "To know is nothing at all; to imagine is everything.",
author: "누군가 이렇게 말했음",},
{quote: "The computer is only a fast idiot; it has no imagination; it cannot originate action. It is, and will remain, only a tool of man.",
author: "someone",},
{quote: "The secret of business is to know something that nobody else knows.",
author: "someone else",},
{quote: "One man with courage makes a majority.",
author: "김아무개",},
{quote: "Man is born to live, not to prepare for life. Life itself, the phenomenon of life, the gift of life,is so breathtakingly serious!",
author: "박아무개",},
{quote: "Anything you're good at contributes to happiness.",
author: "최아무개",},
{quote: "Freedom is a system based on courage.",
author: "이아무개",},
{quote: "If a man takes no thought about what is distant, he will find sorrow near at hand.",
author: "아무개의아무개",},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author ;