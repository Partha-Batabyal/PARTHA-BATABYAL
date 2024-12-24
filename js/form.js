const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});



function take(selector) {
  return document.querySelector(selector);
}

/**
 * Get all required elements
 */
const nameElement = take(".small_user");
const emailElement = take(".small_email");
const subjectElement = take(".small_subject");
const messageElement = take(".small_message");
const smallbtn = take(".small_btn");


