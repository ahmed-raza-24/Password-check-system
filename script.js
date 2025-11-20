document.getElementById("startBtn").addEventListener("click", () => {
  const correctPassword = "masterjs";
  let attempts = 0;

  while (attempts < 3) {
    let userInput = prompt("Please enter password");

    console.log("User entered:", userInput); // Debugging

    // Cancelled
    if (userInput === null) {
      console.error("You canceled the prompt.");
      document.getElementById("message").innerHTML =
        `<p class="error">You canceled the prompt.</p>`;
      return;
    }

    // Empty / spaces only
    if (userInput.trim() === "") {
      console.error("Empty input! Please enter something.");
      attempts++;
      continue;
    }

    // Correct password
    if (userInput === correctPassword) {
      console.log("Account opened");
      document.getElementById("message").innerHTML =
        `<p class="success">Account opened successfully ✔️</p>`;
      return;
    }

    // Wrong password
    console.error("Incorrect password");
    attempts++;
  }

  // Locked (3 failed attempts)
  if (attempts === 3) {
    console.error("Account locked after 3 failed attempts.");
    document.getElementById("message").innerHTML =
      `<p class="error">Account locked after 3 failed attempts ❌</p>`;
  }
});
