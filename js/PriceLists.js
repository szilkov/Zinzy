
function createPriceLists(name) {

    switch (name) {

        case "hair":
            deletePriceLists("hair");
            removeImg('1');

            createPriceList('col_1', "Feltöltés alatt...");
            break;

        case "manicure":
            deletePriceLists("manicure");
            removeImg('2');

            createPriceList('col_2', "Klasszikus manikűr: 2500 Ft");
            createPriceList('col_2', "Gépi manikűr: 3000 Ft");
            createPriceList('col_2', "Japán manikűr: 2500 Ft");
            createPriceList('col_2', "Paraffinos kézápolás: 2500 Ft");
            createPriceList('col_2', "Géllak: 4300 Ft");
            createPriceList('col_2', "Több szinű géllak: 4800 Ft");
            createPriceList('col_2', "Gél-lakk eltávolítás: 1500 Ft");
            break;

        case "pedicure":
            deletePriceLists("pedicure");
            removeImg('3');

            createPriceList('col_3', "Klasszikus pedikűr: 4200 Ft");
            createPriceList('col_3', "Calluxos lábápolás: 5800 Ft");
            createPriceList('col_3', "Géllakk lábra: 3500 Ft");
            createPriceList('col_3', "Klasszikus pedikűr: 4200 Ft");
            createPriceList('col_3', "Paraffinos lábápolás: 3000 Ft");
            break;

    }
}


function createPriceList(col, szoveg) {

    var container = document.getElementById('priceLists');
    container.style.height = "300px";

    switch (col) {
        case 'col_1':
            var coloumnHair = document.getElementById('col_1');
            var priceList = document.createElement("p");
            coloumnHair.appendChild(priceList);
            priceList.innerHTML = szoveg;
            priceList.style.fontSize = "150%";
            break;
        case 'col_2':
            var coloumnManicure = document.getElementById('col_2');
            var priceList = document.createElement("p");
            coloumnManicure.appendChild(priceList);
            priceList.innerHTML = szoveg;
            priceList.style.fontSize = "150%";
            break;
        case 'col_3':
            var coloumnPedicure = document.getElementById('col_3');
            var priceList = document.createElement("p");
            coloumnPedicure.appendChild(priceList);
            priceList.innerHTML = szoveg;
            priceList.style.fontSize = "150%";
            break;
    };

}

function deletePriceLists(name) {

    switch (name) {

        case "hair":
            deletePriceList("col_3", "3");
            deletePriceList("col_2", "2");
            break;

        case "manicure":
            deletePriceList("col_3", "3");
            deletePriceList("col_1", "1");

            break;

        case "pedicure":
            deletePriceList("col_2", "2");
            deletePriceList("col_1", "1");
            break;
    }
}

function deletePriceList(col, img) {

    var parent = document.getElementById(col);
    if (parent.children.length > 1) {
        while (parent.children.length > 1) {
            parent.lastChild.remove()
        }
    }

    var img = document.getElementById(img);

    if (img.style.display === "none") {
        img.style.display = "block";
    }
}

function removeImg(imgId) {
    var img = document.getElementById(imgId);
    img.style.display = "none";

}
