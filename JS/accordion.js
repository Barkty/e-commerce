var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        var mark = document.getElementById('acc').parentElement;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      mark.style.marginTop = "60px"
    } else {
      panel.style.display = "block";
      mark.style.marginTop = "150px"
    }
  });
}  