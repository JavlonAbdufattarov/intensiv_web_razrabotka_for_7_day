document.getElementById('main-action-button').onclick = function () {
    document.getElementById('products').scrollIntoView({behavior: 'smooth'});

};
const links = document.querySelectorAll(".menu-item > a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: 'smooth'}) ;
   };
}
const button = document.querySelectorAll(".products-item .button");
for (let i = 0; i < button.length; i++) {
    button[i].onclick = function () {
        document.getElementById(  "order").scrollIntoView({behavior: 'smooth'}) ;
    };
}
const price = document.getElementsByClassName("products-item-price");
document.getElementById("change-currency").onclick = function (e) {
    const curentCurency  = e.target.innerText;
    let newCurrency  = "$" ;
    let coefficient  = 1;
    if (curentCurency === "$") {
        newCurrency = "so`m";
        coefficient = 100;
    }else if (curentCurency === "so`m") {
        newCurrency = "&";
        coefficient = 3;
    }
    else if (curentCurency === "&") {
        newCurrency = "€";
        coefficient = 0.9
    }
    else if (curentCurency === "€") {
        newCurrency = "¥";
        coefficient = 6.9
    }

    e.target.innerText = newCurrency;
    for (let j = 0; j < price.length;    j++) {
        price[j].innerText = +(price[j].getAttribute("data-base-price")*coefficient).toFixed(1) + " " + newCurrency;
    }
};
const product  = document.getElementById("product");
const name  = document.getElementById("name");
const phone  = document.getElementById("phone");

document.getElementById("oeder-action").onclick = function () {
    let hasEror = false;
    [product, name, phone].forEach((item) => {
        if (!item.value){
            item.style.borderColor = "red";
            hasEror = true;
        }else {
            item.style.borderColor = "";
        }
    });
    if (!hasEror) {
        [product, name, phone].forEach((item) => {
            item.value="";

        });
        alert("Спасибо за закакз мы свами свяжемся!")
    }

}











