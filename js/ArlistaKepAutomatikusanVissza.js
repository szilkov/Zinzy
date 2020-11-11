
var kep=document.getElementById('3');
kep.addEventListener('click', IntervalPedikur);


function IntervalPedikur(){
    setInterval(Pedikur, 5000)};

function Pedikur(){

    var parent = document.getElementById("hasab3");
    if (parent.children.length > 1) {
        while (parent.children.length > 1) {
            parent.lastChild.remove()
        }
    }
    var kep=document.getElementById('3');
    if (kep.style.display === "none") {
        kep.style.display = "block";
    }

}
/*
function StopPedikurTimer(){
    var myVar= setInterval(Pedikur, 5000);
    clearInterval(myVar);
}
*/

var kep2=document.getElementById('2');
kep2.addEventListener('click', IntervalManikur);
/*kep2.addEventListener('click', StopPedikurTimer);*/

function IntervalManikur(){
    setInterval(Manikur, 5000)};
    



function Manikur(){

    var parent = document.getElementById("hasab2");
    if (parent.children.length > 1) {
        while (parent.children.length > 1) {
            parent.lastChild.remove()
        }
    }
    var kep=document.getElementById('2');
    if (kep.style.display === "none") {
        kep.style.display = "block";
    }

}

var kep3=document.getElementById('1');
kep3.addEventListener('click', IntervalFodraszat);

 function IntervalFodraszat(){
setInterval(Fodraszat, 5000)};


function Fodraszat(){

    var parent = document.getElementById("hasab1");
    if (parent.children.length > 1) {
        while (parent.children.length > 1) {
            parent.lastChild.remove()
        }
    }
    var kep=document.getElementById('1');
    if (kep.style.display === "none") {
        kep.style.display = "block";
    }

}
