document.addEventListener("DOMContentLoaded", () => {
  const quoteText = document.getElementById("quote");
  const quoteAuthor = document.getElementById("author");
  const newQuoteBtn = document.getElementById("newQuoteBtn");

  const quotes = [
    { content: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { content: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
    { content: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
    { content: "People who are crazy enough to think they can change the world, are the ones who do.", author: "Rob Siltanen" },
    { content: "Failure will never overtake me if my determination to succeed is strong enough.", author: "Og Mandino" }
  ];

  newQuoteBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    quoteText.textContent = `"${quote.content}"`;
    quoteAuthor.textContent = `- ${quote.author}`;
  });
});
