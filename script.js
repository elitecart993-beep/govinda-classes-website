const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const open = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    menuToggle.textContent = open ? "✕" : "☰";
  });
  mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.textContent = "☰";
  }));
}

document.getElementById("year").textContent = new Date().getFullYear();

// Prefill the admission class when a course card enquiry is clicked.
document.querySelectorAll("[data-course]").forEach(link => {
  link.addEventListener("click", () => {
    const value = link.dataset.course;
    const select = document.getElementById("classSelect");
    if (!select) return;
    const mapping = {
      "Classes 3–5": "Class 3",
      "Classes 6–8": "Class 6",
      "Classes 9–10": "Class 9",
      "Classes 11–12": "Class 11"
    };
    select.value = mapping[value] || "";
  });
});

// Demo form: prepares a message, but intentionally does not store or transmit personal data.
const admissionForm = document.getElementById("admissionForm");
if (admissionForm) {
  admissionForm.addEventListener("submit", event => {
    event.preventDefault();
    if (!admissionForm.reportValidity()) return;
    const data = new FormData(admissionForm);
    const lines = [
      "GOVINDA CLASSES — Admission Enquiry",
      `Student: ${data.get("studentName")}`,
      `Parent/Guardian: ${data.get("parentName")}`,
      `Class: ${data.get("classLevel")}`,
      `Phone: ${data.get("phone")}`,
      `Message: ${data.get("message") || "Not provided"}`
    ];
    const message = lines.join("\\n");
    const status = document.getElementById("formStatus");
    status.textContent = "Enquiry prepared. Copy the message below and send it to the institute once its contact number/email is added.";
    let preview = document.getElementById("enquiryPreview");
    if (!preview) {
      preview = document.createElement("textarea");
      preview.id = "enquiryPreview";
      preview.readOnly = true;
      preview.rows = 7;
      preview.style.cssText = "width:100%;margin-top:10px;padding:12px;border:1px solid #dce5f2;border-radius:9px;background:#f7f9ff;font:11px monospace;";
      status.insertAdjacentElement("afterend", preview);
    }
    preview.value = message;
    preview.focus();
    preview.select();
  });
}

// Login form is deliberately a visual demo; no credentials are sent or checked.
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", event => {
    event.preventDefault();
    const status = document.getElementById("loginStatus");
    status.textContent = "Demo only: login is not connected. Please do not enter real passwords on this preview.";
    loginForm.reset();
  });
}
