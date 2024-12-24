document.addEventListener("DOMContentLoaded", () => {
  const take = (e) => document.querySelector(e);
  var homeBtn_Box_size = document.querySelector(".text_sec_home_box");

  const changeTheme = take(".change > input");
  const change = take(".change");
  const left = take("#left");
  const right = take("#right");
  const colorToggler = take(".box3_color>.container>.toggle>input");
  const leftLinks = document.querySelectorAll(".left_a");

  // * Initial settings
  changeTheme.checked = false;
  document.body.classList.add("Default-Theme");

  // * Theme change event listener
  changeTheme.addEventListener("change", () => {
    if (!changeTheme.checked) {
      // * Change theme to default
      document.body.classList.remove("Alternative-Theme");
      document.body.classList.add("Default-Theme");
      take(".Input_Box_Left")?.remove();
      typed.reset();
      typed.stop();
      homeBtn_Box_size.style.width = "50%";
    } else {
      // * Change theme to alternative
      document.body.classList.remove("Default-Theme");
      document.body.classList.add("Alternative-Theme");
      typed1();

      if (screen.width < 700) {
        homeBtn_Box_size.style.width = "90%";
      }
    }
  });

  // * Color toggler event listener
  colorToggler.addEventListener("change", () => {
    document.body.classList.toggle("mycolor");
    saveColorInBrowser();
  });

  // * Save color in local storage
  const saveColorInBrowser = () => {
    const color = document.body.classList.contains("mycolor")
      ? ["mycolor"]
      : [];
    localStorage.setItem("color", JSON.stringify(color));
  };

  // * Load color from local storage
  const loadColorInBrowser = () => {
    const color = JSON.parse(localStorage.getItem("color"));
    if (color && color.includes("mycolor")) {
      document.body.classList.add("mycolor");
      colorToggler.checked = true;
    } else {
      colorToggler.checked = false;
    }
  };

  // * Load the saved color on page load
  loadColorInBrowser();

  // * Left links click event listener
  leftLinks.forEach((link) => {
    link.addEventListener("click", () => {
      leftLinks.forEach((item) => {
        item.classList.remove("hover_active");
      });
      link.classList.toggle("hover_active");
    });
  });

  // * Scroll event listener
  const pages = document.querySelectorAll(".page");

  window.addEventListener("scroll", () => {
    const top = window.scrollY;
    pages.forEach((page) => {
      const offset = page.offsetTop;
      const height = page.offsetHeight;
      const id = page.getAttribute("id");

      if (top >= offset - 37 && top < offset + height - 37) {
        leftLinks.forEach((item) => {
          item.classList.remove("hover_active");
        });
        document.querySelector(`[href="#${id}"]`).classList.add("hover_active");
        console.log(`Now you are on the ${id} page`);
      }
    });
  });
});
