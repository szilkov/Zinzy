

function phoneNo(name, phone) {
    deletePhoneNo();
    var div = document.getElementById(name);
    var button = document.createElement("button");
    div.appendChild(button);
    button.innerHTML = phone;
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