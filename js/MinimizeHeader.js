/*window.onscroll = function () { minimizeHeader() };*/
var header = document.getElementById("header");
header.addEventListener('mousemove', minimize);

var zinzy = document.getElementById('Zinzy');
var height = 100;
function minimize() {
    var id = setInterval(min, 50);
    function min() {
      if (height <= 30) {
        clearInterval(id);
        zinzy.style.display="block";
        zinzy.style.padding = "2rem";
        zinzy.style.top = "100px";

        var h1 = document.getElementById('h1');
        h1.style.fontSize = "4rem";

        var h3 = document.getElementById('h3');
        h3.style.fontSize = "2rem";
      } else {
        zinzy.style.display="none";
        height--;
        header.style.height = height + '%';
      }
    }
}