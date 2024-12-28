// Greeting Button
document.getElementById('greetBtn').addEventListener('click', () => {
    const greetings = [
      "Wishing you a joyful Christmas!",
      "May your holidays be merry and bright!",
      "Have a magical Christmas!",
      "Season's Greetings and Best Wishes!"
    ];
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    document.getElementById('greetMessage').textContent = randomGreeting;
  });
  