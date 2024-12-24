fetch("content.json")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("about_title").textContent = data.about_me.title;
    document.getElementById("about_intro").innerHTML = data.about_me.intro;
    document.getElementById("about_education").textContent =
      data.about_me.education;
    document.getElementById("about_passion").innerHTML = data.about_me.passion;
    document.getElementById("about_future").textContent = data.about_me.future;
    document.getElementById("about_contact").textContent =
      data.about_me.contact;
  })
  .catch((error) => console.error("Error loading content:", error));
