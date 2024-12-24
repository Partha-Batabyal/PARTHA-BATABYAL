// Create a media query to match screens with a minimum width of 1024px
const mediaQuery = window.matchMedia("(min-width: 1024px)");

// Function to apply the effects when the media query is matched
function handleScreenChange(e) {
  if (e.matches) {
    // Initialize the mouse follower effect for larger screens
    Shery.mouseFollower({
      skew: true,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });

    // Apply magnet effect to the targeted element with .big_r class
    Shery.makeMagnet(".big_r", {
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 3,

    });

    // Apply image effect to elements with the .img class
    Shery.imageEffect(".img>img", {
      style: 2,

      //   debug: true,
      //   gooey: true,
    });
    Shery.imageMasker(".mask-target", {
      mouseFollower: true,
      text: "Your_Brain",
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
    Shery.hoverWithMediaCircle(".hover-target", {
      images: ["./assets/img_mine.jpg"],
    });
  }
}
// Function to reload the page when the screen width changes
function reloadOnResize() {
  let initialWidth = window.innerWidth;

  // Listen for window resize events
  window.addEventListener("resize", function () {
    // Check if the width has changed
    if (window.innerWidth !== initialWidth) {
      window.location.reload(); // Reload the page
    }
  });
}

// Call the function to start listening for resize events
reloadOnResize();

// Initial check when the page loads
handleScreenChange(mediaQuery);

// Listen for changes in screen size
mediaQuery.addEventListener("change", handleScreenChange);
