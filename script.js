// PART 1: Event Handling
const msgBtn = document.getElementById("msgBtn");
const msgOutput = document.getElementById("msgOutput");

msgBtn.addEventListener("click", () => {
  msgOutput.textContent = "You clicked the button! ";
});

// PART 2: Interactive Elements

// Dark/Light Mode Toggle
const toggleTheme = document.getElementById("toggleTheme");
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});



document.getElementById("decrease").addEventListener("click", () => {
  count--;
  countDisplay.textContent = count;
});

// FAQ Collapse
const faqQuestion = document.querySelector(".faq-question");
const faqAnswer = document.querySelector(".faq-answer");

faqQuestion.addEventListener("click", () => {
  faqAnswer.style.display =
    faqAnswer.style.display === "block" ? "none" : "block";
});

// PART 3: Form Validation
const form = document.getElementById("signupForm");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop form from refreshing page

  // Clear previous errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("formSuccess").textContent = "";

  let valid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("nameError").textContent =
      "Name must be at least 3 characters.";
    valid = false;
  }

  // Email validation (regex)
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    valid = false;
  }

  // Password validation
  const password = document.getElementById("password").value;
  if (password.length < 9) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 9 characters.";
    valid = false;
  }

  // If all fields valid
  if (valid) {
    document.getElementById("formSuccess").textContent =
      "Form submitted successfully! ";
    form.reset();
  }
});
