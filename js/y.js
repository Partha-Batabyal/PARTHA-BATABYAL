// Disable right-click context menu
document.addEventListener("contextmenu", (event) => event.preventDefault());

// Utility function to check if a key combination is pressed
const isKeyCombination = (
  event,
  key,
  shiftRequired = false,
  ctrlOrMetaRequired = false
) => {
  const keyLower = key.toLowerCase();
  return (
    event.key.toLowerCase() === keyLower &&
    (shiftRequired ? event.shiftKey : true) &&
    (ctrlOrMetaRequired ? event.ctrlKey || event.metaKey : true)
  );
};

// Event listener for keydown events
document.addEventListener("keydown", (event) => {
  // Disable specific key combinations
  if (isKeyCombination(event, "F12")) {
    event.preventDefault();
  }

  if (isKeyCombination(event, "I", true, true)) {
    event.preventDefault();
  }

  if (isKeyCombination(event, "C", true, true)) {
    event.preventDefault();
  }

  if (isKeyCombination(event, "J", true, true)) {
    event.preventDefault();
  }

  if (isKeyCombination(event, "U", false, true)) {
    event.preventDefault();
  }

  if (isKeyCombination(event, "S", true, true)) {
    event.preventDefault();
  }

  if (isKeyCombination(event, "P", false, true)) {
    event.preventDefault();
  }

  if (isKeyCombination(event, "N", true, true)) {
    event.preventDefault();
  }

  if (isKeyCombination(event, "E", true, true)) {
    event.preventDefault();
  }

  if (isKeyCombination(event, "H", true, true)) {
    event.preventDefault();
  }
});

console.log("Script loaded and keybindings disabled.");
