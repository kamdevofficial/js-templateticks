/*
Written by Med Reda Kamal
* */

const firstCartDOM = document.getElementById("cart1");
const secondCartDOM = document.getElementById("cart2");

const products = [{
    name: "Apple Iphone 12",
    price: 799,
    qty: 3,
},
{
    name: "Sony Playsation 5",
    price: 499,
    qty: 7,
},
];

// * Method 1 : the createElement way *

// those 2 arrow functions to make creating & appending codeless
const makeElement = (element) => {
    elem = document.createElement(element);
    return elem;
};
const appendElement = (parent, element) => {
    parent.appendChild(element);
};

const renderCart1 = () => {
    firstCartDOM.innerHTML = "";
    title = createElement("h2");
    title.innerText = "My Cart - createElement example";
    // append title
    appendElement(firstCartDOM, title);
}