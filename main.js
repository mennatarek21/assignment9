const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
    "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
  ];
  
  const quoteText = document.getElementById("quote-text");
  const quoteButton = document.getElementById("quote-button");
  
  quoteButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
  });
  
  