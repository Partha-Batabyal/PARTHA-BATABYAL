// Fetch content from content.json and initialize Swiper tooltips
fetch("content.json")
  .then((response) => response.json())
  .then((data) => {
    const swiperData = data.swiper_data;

    // Initialize Swiper with responsive settings
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: window.innerWidth <= 700 ? 1 : 3,
      // direction: window.innerWidth <= 700 ? "vertical" : "horizontal",
      speed: 1000,
      spaceBetween: 9,
      autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    // Pause autoplay on hover and resume on leave
    const swiperContainer = document.querySelector(".mySwiper");
    swiperContainer.addEventListener("mouseenter", () =>
      swiper.autoplay.stop()
    );
    swiperContainer.addEventListener("mouseleave", () =>
      swiper.autoplay.start()
    );

    // Initialize tooltips and click/double-tap events for Swiper slides
    const initSwiperTooltips = () => {
      const swiperSlides = document.querySelectorAll(".swiper-slide");

      swiperSlides.forEach((slide, index) => {
        if (swiperData[index]) {
          const { tooltip, url } = swiperData[index];
          slide.setAttribute("data-tooltip", tooltip);

          // Handle double-click for desktop
          slide.addEventListener("dblclick", () =>
            handleSlideClick(slide, url, tooltip)
          );

          // Handle double-tap for mobile
          let lastTouchTime = 0;
          slide.addEventListener("touchstart", (event) => {
            const currentTime = new Date().getTime();
            const timeDifference = currentTime - lastTouchTime;

            // Detect double tap (threshold is 300ms)
            if (timeDifference < 300 && timeDifference > 0) {
              handleSlideClick(slide, url, tooltip);
            }
            lastTouchTime = currentTime;
          });
        }
      });
    };

    // Function to handle click/touch event on a slide
    const handleSlideClick = (slide, url, tooltip) => {
      // Prevent repeated clicks by checking if the slide is already disabled
      if (slide.classList.contains("disabled")) return;

      // Disable interaction and remove tooltip
      slide.classList.add("disabled");
      slide.removeAttribute("data-tooltip");

      // Display loader if not already present
      if (!slide.querySelector(".loaderSwiper")) {
        const loader = document.createElement("div");
        loader.classList.add("loaderSwiper", "loader");
        slide.appendChild(loader);
      }

      // Open link after a 2-second delay and re-enable interaction
      setTimeout(() => {
        const loader = slide.querySelector(".loaderSwiper");
        if (loader) loader.remove();

        // Open the URL in a new tab
        window.open(url, "_blank");

        // Re-enable interaction and restore tooltip
        slide.classList.remove("disabled");
        slide.setAttribute("data-tooltip", tooltip);
      }, 2000);
    };

    // Initialize tooltips and event handlers
    initSwiperTooltips();
  })
  .catch((error) => console.error("Error loading content:", error));

// Function to update project borders based on screen size
const updateProjectBorder = () => {
  const isMobile = window.innerWidth < 700;
  const borderElement = document.querySelector(".project_all");

  if (borderElement) {
    if (isMobile) {
      borderElement.style.border = "none";
      borderElement.style.borderTop = `4px solid var(--project_all_border_color)`;
      borderElement.style.borderBottom = `4px solid var(--project_all_border_color)`;
    } else {
      borderElement.style.border = `4px solid var(--project_all_border_color)`;
      borderElement.style.borderTop = "none";
      borderElement.style.borderBottom = "none";
    }
  }
};

// Update project border on load and resize
window.addEventListener("DOMContentLoaded", updateProjectBorder);
window.addEventListener("resize", updateProjectBorder);
