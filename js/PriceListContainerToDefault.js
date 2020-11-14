window.addEventListener('scroll', priceListContainerToDefault);

function priceListContainerToDefault(){
    pedicure();

    manicure();

    hair();

    var container = document.getElementById("priceLists");
    container.style.height="initial";

}

function pedicure(){
    
    imgReappear('col_3', '3')
}

function manicure(){

    imgReappear('col_2', '2');
}

function hair(){

    imgReappear('col_1', '1');
}

function imgReappear(col, kepId){

    var parent = document.getElementById(col);
    if (parent.children.length > 1) {
        while (parent.children.length > 1) {
            parent.lastChild.remove()
        }
    }
    var img=document.getElementById(kepId);
    if (img.style.display === "none") {
        img.style.display = "block";
    }
}