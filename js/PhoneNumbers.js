window.addEventListener('scroll', deletePhoneNo);

function phoneNo(name, phone) {
    deletePhoneNo();
    var div = document.getElementById(name);
    var button = document.createElement("button");
    div.appendChild(button);
    button.innerHTML = phone;
};

function deletePhoneNo() {

    let phoneButtons = document.getElementsByClassName("nameButton");

    for(let i =0; i<phoneButtons.length; i++){
        let parent = phoneButtons[i];
    if (parent.children.length === 2) {
        parent.lastChild.remove()
    }
    }

   
   
};