const passwordInput = document.getElementById("password");
const strengthBar = document.getElementById("strength");
const message = document.getElementById("message");

passwordInput.addEventListener("input", checkStrength);

function checkStrength() {
  const password = passwordInput.value;
  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  if (strength === 0) {
    strengthBar.style.width = "0%";
    message.textContent = "";
  } else if (strength === 1) {
    strengthBar.style.width = "25%";
    strengthBar.style.background = "red";
    message.textContent = "Weak";
  } else if (strength === 2) {
    strengthBar.style.width = "50%";
    strengthBar.style.background = "orange";
    message.textContent = "Medium";
  } else if (strength === 3) {
    strengthBar.style.width = "75%";
    strengthBar.style.background = "yellowgreen";
    message.textContent = "Good";
  } else {
    strengthBar.style.width = "100%";
    strengthBar.style.background = "green";
    message.textContent = "Strong";
  }
}
