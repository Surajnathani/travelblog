function toggleNav() {
  var x = document.getElementById("navbar");
  var menuIcon = document.getElementById("menuIcon");
  var closeIcon = document.getElementById("closeIcon");

  if (x.className === "navbar") {
    x.className += " responsive";
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
  } else {
    x.className = "navbar";
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
  }
}