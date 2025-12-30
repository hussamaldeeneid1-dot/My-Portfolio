const generateBtn = document.getElementById("generateBtn");
const userCard = document.getElementById("userCard");
const userImg = document.getElementById("userImg");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userLocation = document.getElementById("userLocation");


generateBtn.addEventListener("click", fetchUser);

async function fetchUser() {
  try {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    const user = data.results[0];

    userImg.src = user.picture.large;
    userName.textContent = `${user.name.first} ${user.name.last}`;
    userEmail.textContent = user.email;
    userLocation.textContent = `${user.location.city}, ${user.location.country}`;

    userCard.style.display = "flex";
  } catch (error) {
    console.error("Error fetching user:", error);
    alert("Failed to fetch user. Try again!");
  }
}
