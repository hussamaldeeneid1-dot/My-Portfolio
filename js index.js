document.addEventListener("DOMContentLoaded", () => {
  console.log("Website loaded successfully");
});

//ai portfolio//
function askAI() {
  const query = document.getElementById("ai-query").value;
  const responseDiv = document.getElementById("ai-response");

  if (query.toLowerCase().includes("project")) {
    responseDiv.innerHTML =
      "I have built 10 projects using JavaScript, CSS, and HTML and you can find them in Projects Section";
  } else if (query.toLowerCase().includes("skill")) {
    responseDiv.innerHTML =
      "My main skills are HTML, JavaScript,CSS,and AI integrations.";
  } else {
    responseDiv.innerHTML = "Try asking about my projects or skills!";
  }
}

// Dynamic Selection for Multiple Badges
const allBadges = document.querySelectorAll(".availability-section .badge");

allBadges.forEach((badge) => {
  badge.addEventListener("click", () => {
    allBadges.forEach((b) => b.classList.remove("selected"));

    badge.classList.add("selected");

    console.log("Current Status:", badge.dataset.status);
  });
});
//menuToggle//
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
});


