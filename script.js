function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function btnFunction() {
  document.getElementById("btnDropdown").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.btn__account')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
}

window.onclick = function(e) {
  if (!e.target.matches('.btn__dropdown')) {
    var myDropdown = document.getElementById("btnDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
}

