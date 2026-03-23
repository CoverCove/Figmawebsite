const newsletterForm = document.getElementById("newsletter-form");
const formNote = document.getElementById("form-note");

if (newsletterForm && formNote) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(newsletterForm);
    const email = String(formData.get("email") || "").trim();

    if (!email) {
      formNote.textContent = "Please enter your email.";
      return;
    }

    // Frontend-only demo: no backend integration.
    formNote.textContent = `Thanks! We'll send occasional updates to ${email}.`;
    newsletterForm.reset();
  });
}
