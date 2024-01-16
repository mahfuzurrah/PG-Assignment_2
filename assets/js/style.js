/*======= Navbar ========*/
function toggleNavbar() {
  var navbarLinks = document.getElementById('nav_menu');
  navbarLinks.classList.toggle('show');
}


/*======= Selector ========*/

function toggleOptions(id) {
  var options = document.getElementById("selectOptions" + id);
  if (options.classList.contains("open")) {
    options.classList.remove("open");
    options.classList.add("closed");
  } else {
    options.classList.remove("closed");
    options.classList.add("open");
  }
}

function selectOption(id, option) {
  document.getElementById("selectedOption" + id).innerText = option;
  var options = document.getElementById("selectOptions" + id);
  options.classList.remove("open");
  options.classList.add("closed");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  var dropdowns = document.getElementsByClassName("select-options");
  for (var i = 0; i < dropdowns.length; i++) {
    var options = dropdowns[i];
    if (
      options.classList.contains("open") &&
      !event.target.matches(".select-box")
    ) {
      options.classList.remove("open");
      options.classList.add("closed");
    }
  }
};
