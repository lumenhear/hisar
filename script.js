// Dynamic year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Simple form animation
document.querySelectorAll('.form-control, .form-select').forEach(input => {
  input.addEventListener('focus', () => input.style.boxShadow = "0 0 8px rgba(0,82,212,0.4)");
  input.addEventListener('blur', () => input.style.boxShadow = "none");
});
