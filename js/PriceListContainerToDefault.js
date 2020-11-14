window.addEventListener('scroll', priceListContainerToDefault);

function priceListContainerToDefault(){
    imgReappear('col_3', '3');

    imgReappear('col_2', '2');

    imgReappear('col_1', '1');

    var container = document.getElementById("priceLists");
    container.style.height="initial";

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