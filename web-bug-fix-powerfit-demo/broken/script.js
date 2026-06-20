const menuToggle = document.querySelector("#mobileMenu");
const nav = document.querySelector("#siteNavigation");
const contactForm = document.querySelector("#contactForm");
const formNote = document.querySelector("#formNote");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("opened");
  });
}

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formNote.textContent = "Thanks! Your message has been sent.";
  contactForm.reset();
});
