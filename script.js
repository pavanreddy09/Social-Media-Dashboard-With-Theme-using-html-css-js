const mode = document.getElementById("mode");
const theme = document.getElementById("theme");
const sliderthumb = document.getElementById("slider-thumb");

  function darkmode() {
      if (theme.getAttribute('href') == "css/dark.css") {
          theme.href = "css/light.css";
          mode.innerHTML = "Dark Mode";
          sliderthumb.style.float = 'right';
          sliderthumb.style.background = 'white';
      } else {
          theme.href = "css/dark.css";
          mode.innerHTML = "Light Mode";
          sliderthumb.style.float = 'left';
          sliderthumb.style.background = 'black';
      }
  }