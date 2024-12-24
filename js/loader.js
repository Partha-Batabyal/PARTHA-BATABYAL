document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".main_body_loader");
  const main = document.querySelector("#main");

  // Initially hide the main content
  main.style.display = "none";

  // Wait until all resources (images, CSS, JS) are loaded
  window.onload = () => {

    setTimeout(() => {
      loader.style.display = "none"; // Hide the loader
      main.style.display = "block"; // Show the main content
    }, 4000); // Optional delay for smoother transition
  };
});
