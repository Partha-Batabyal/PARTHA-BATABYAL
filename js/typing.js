let y = [`<i class="fa-solid fa-magnifying-glass name_go"></i>`];
let x = [
  "Hey",
  "Human",
  "It's",
  "Your",
  "Brain",
  "How",
  "Are",
  "You?",
  "Please",
  "Enter",
  "Your",
  "Name",
  ...y,
];

let typed;

let typed1 = () => {
  typed?.destroy();

  typed = new Typed(".typing_left", {
    strings: [...x],
    typeSpeed: 150,
    backSpeed: 15,
    loop: true,
    cursorChar: "",
    smartBackspace: true,
    showCursor: false,
  });
};

document.querySelector(".typing_left").addEventListener("click", (event) => {
  if (event.target.classList.contains("name_go")) {
    typed.destroy();
    document.querySelector(".line").style.display = "none";
    let input = document.createElement("input");
    input.placeholder = "Enter your name";
    input.classList.add("input_box_left");
    input.type = "text";
    let appendBox = document.querySelector(".box1_Txt");
    appendBox.appendChild(input);
    input.focus();

    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        let name = input.value.split(" ");
        console.log(name);
        input.remove();

        x = ["hii", ...name, "thank", "you", "for", "your", "time"];
        y = [];

        typed1();

        document.querySelector(".line").style.display = "inline";
      }
    });
  }
});

about_me = [
  "Your_Brain",
  "Software_engineer",
  "Web_developer",
  "Web_designer",
  "Freelancer",
  "Programmer",
];
let homeTyped = () => {
  typedhome = new Typed(".about_me_home", {
    strings: [...about_me],
    typeSpeed: 150,
    backSpeed: 15,
    loop: true,
    cursorChar: "",
    smartBackspace: true,
    showCursor: false,
  });
};

homeTyped();
