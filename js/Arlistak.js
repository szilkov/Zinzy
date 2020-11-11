function PedikurArlista() {
    ArlistaTorlese("hasab2", '2');
    var kep = document.getElementById('3');
    kep.style.display = "none";
    var pedikurHasab = document.getElementById('hasab3');
    var arlista1 = document.createElement("p");
    pedikurHasab.appendChild(arlista1);
    arlista1.innerHTML = "Klasszikus pedikűr: 4200 Ft";
    arlista1.style.fontSize = "150%";
    var arlista2 = document.createElement("p");
    pedikurHasab.appendChild(arlista2);
    arlista2.innerHTML = "Calluxos lábápolás: 5800 Ft";
    arlista2.style.fontSize = "150%";
    var arlista3 = document.createElement("p");
    pedikurHasab.appendChild(arlista3);
    arlista3.innerHTML = "Géllakk lábra: 3500 Ft";
    arlista3.style.fontSize = "150%";
    var arlista4 = document.createElement("p");
    pedikurHasab.appendChild(arlista4);
    arlista4.innerHTML = "Paraffinos lábápolás: 3000 Ft";
    arlista4.style.fontSize = "150%";
}

function ManikurArlista() {
    ArlistaTorlese("hasab3", "3");
    var kep = document.getElementById('2');
    kep.style.display = "none";

    ArlistaLetrehozasManikur("Klasszikus manikűr: 2500 Ft");
    ArlistaLetrehozasManikur("Gépi manikűr: 3000 Ft");
    ArlistaLetrehozasManikur("Japán manikűr: 2500 Ft");
    ArlistaLetrehozasManikur("Paraffinos kézápolás: 2500 Ft");
    ArlistaLetrehozasManikur("Géllak: 4300 Ft");
    ArlistaLetrehozasManikur("Több szinű géllak: 4800 Ft");
    ArlistaLetrehozasManikur("Gél-lakk eltávolítás: 1500 Ft");


}

function ArlistaLetrehozasManikur(szoveg) {
    var manikurHasab = document.getElementById('hasab2');
    var arlista = document.createElement("p");
    manikurHasab.appendChild(arlista);
    arlista.innerHTML = szoveg;
    arlista.style.fontSize = "150%";
}

function ArlistaTorlese(hasab, kep) {

    var parent = document.getElementById(hasab);
    if (parent.children.length > 1) {
        while (parent.children.length > 1) {
            parent.lastChild.remove()
        }
    }

    var kep = document.getElementById(kep);

    if (kep.style.display === "none") {
        kep.style.display = "block";
    }


   

}

