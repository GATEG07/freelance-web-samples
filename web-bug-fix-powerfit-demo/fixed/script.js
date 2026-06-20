const menuButton = document.querySelector("#menuButton");
const nav = document.querySelector("#siteNavigation");
const contactForm = document.querySelector("#contactForm");
const formNote = document.querySelector("#formNote");

const fields = {
  name: {
    input: document.querySelector("#name"),
    error: document.querySelector("#nameError"),
    validate(value) {
      return value.trim().length > 0 ? "" : "Please enter your name.";
    },
  },
  email: {
    input: document.querySelector("#email"),
    error: document.querySelector("#emailError"),
    validate(value) {
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
      return isValid ? "" : "Please enter a valid email address.";
    },
  },
  message: {
    input: document.querySelector("#message"),
    error: document.querySelector("#messageError"),
    validate(value) {
      return value.trim().length > 0 ? "" : "Please enter a message.";
    },
  },
};

function setMenuOpen(isOpen) {
  nav.classList.toggle("is-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
}

menuButton.addEventListener("click", () => {
  setMenuOpen(!nav.classList.contains("is-open"));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    setMenuOpen(false);
  }
});

function validateField(field) {
  const message = field.validate(field.input.value);
  field.error.textContent = message;
  field.input.classList.toggle("invalid", Boolean(message));
  return !message;
}

Object.values(fields).forEach((field) => {
  field.input.addEventListener("input", () => {
    validateField(field);
    formNote.textContent = "";
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Validate all fields before showing a success message.
  const validationResults = Object.values(fields).map(validateField);
  const isValid = validationResults.every(Boolean);

  if (!isValid) {
    formNote.textContent = "";
    return;
  }

  formNote.textContent = "Thanks! Your message is ready to send.";
  contactForm.reset();
});
