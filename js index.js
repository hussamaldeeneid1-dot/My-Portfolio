document.addEventListener("DOMContentLoaded", () => {
  console.log("Website loaded successfully");
});

// Back To Top Button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
//work with me button//
document.getElementById("workWithMeBtn").addEventListener("click", function () {
  window.location.href = "./Contact.html";
});

//daily quote//
const quotes = [
  "Stay positive and work hard.",
  "Consistency is key.",
  "Take breaks to refresh your mind.",
  "Learn something new every day.",
  "Focus on progress, not perfection.",
  "Keep your code clean and readable.",
  "Never stop improving your skills.",
];

const quoteText = document.getElementById("quoteText");

const randomIndex = Math.floor(Math.random() * quotes.length);
quoteText.innerText = quotes[randomIndex];

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
const allBadges = document.querySelectorAll('.availability-section .badge');

allBadges.forEach(badge => {
  badge.addEventListener('click', () => {
    allBadges.forEach(b => b.classList.remove('selected'));

    badge.classList.add('selected');

    console.log('Current Status:', badge.dataset.status);
  });
});

