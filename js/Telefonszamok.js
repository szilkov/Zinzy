function TelefonszamokMegjeleniteseSzilvi() {
    SzamokTorlese();
    var div = document.getElementById('szilvi');
    var gomb = document.createElement("button");
    div.appendChild(gomb);
    gomb.innerHTML = "70/123-45-67";
};

function TelefonszamokMegjeleniteseEdina() {
    SzamokTorlese();
    var div = document.getElementById('edina');
    var gomb = document.createElement("button");
    div.appendChild(gomb);
    gomb.innerHTML = "70/123-45-67";
};

function TelefonszamokMegjeleniteseMariann() {
    SzamokTorlese();
    var div = document.getElementById('mariann');
    var gomb = document.createElement("button");
    div.appendChild(gomb);
    gomb.innerHTML = "70/123-45-67";
};

function SzamokTorlese() {
   
    var parent = document.getElementById("szilvi");
    if (parent.children.length === 2) {
        parent.lastChild.remove()
    }
    parent = document.getElementById("edina");
    if (parent.children.length === 2) {
        parent.lastChild.remove()
    }
    parent = document.getElementById("mariann");
    if (parent.children.length === 2) {
        parent.lastChild.remove()
    }
};