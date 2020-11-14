function phoneNoSzilvi() {
    deletePhoneNo();
    var div = document.getElementById('szilvi');
    var button = document.createElement("button");
    div.appendChild(button);
    button.innerHTML = "70/123-45-67";
};

function phoneNoEdina() {
    deletePhoneNo();
    var div = document.getElementById('edina');
    var button = document.createElement("button");
    div.appendChild(button);
    button.innerHTML = "70/123-45-67";
};

function phoneNoMariann() {
    deletePhoneNo();
    var div = document.getElementById('mariann');
    var button = document.createElement("button");
    div.appendChild(button);
    button.innerHTML = "70/123-45-67";
};

function deletePhoneNo() {
   
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