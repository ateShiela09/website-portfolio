// "Hire Me" button alert
document.querySelector(".download-btn").addEventListener("click", () => {
  alert("Thank you for your interest! I’ll get back to you soon.");
});

// Simple image slider
let currentIndex = 0;
const images = [
  "images/d2.jpeg",
  "images/d3.jpeg",
  "images/d4.jpeg"
];
const heroImg = document.querySelector(".hero-image img");

function changeImage() {
  currentIndex = (currentIndex + 1) % images.length;
  heroImg.src = images[currentIndex];
}
setInterval(changeImage, 4000); // change every 4s

// Back to Top button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
