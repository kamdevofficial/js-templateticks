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

    // show products inside an unordered-list items
    listgroup = createElement("ul");
    products.map((product) => {
        listgroupitem = createElement("li");
        listgroupitem.innerText =
            product.name +
            " - " +
            "$" +
            product.price +
            " - " +
            product.qty +
            " item(s)";
        appendElement(listgroup, listgroupitem);
    });
    // append listgroup
    appendElement(firstCartDOM, listgroup);

    // show total quantity, price inside a total element
    total = createElement("div");
    totalqty = createElement("span");
    totalprice = createElement("span");
    breakelement = createElement("br");

    totalqty.innerText =
        "Quantity : " +
        products.reduce((acc, product) => acc + product.qty, 0) +
        "item(s)";
    totalprice.innerText =
        "You will pay : $" +
        products.reduce((acc, product) => acc + product.price, 0);
    appendElement(total, totalqty);
    appendElement(total, breakelement);
    appendElement(total, totalprice);

    // append total
    appendElement(firstCartDOM, total);
}

// execute renderCart1
renderCart1();

// * Method 2 : using Template Literals ! Magical way *

const renderCart2 = () => {
    cartContent = `
  <h2>Cart - Example 2</h2>
  <ul>
    ${products
      .map(
        (product) =>
          `<li>${product.name} - $${product.price} - ${product.qty} item(s)</li>`
      )
      .join("")}
  </ul>
  <div>
   <span>Quantity : ${products.reduce(
     (acc, product) => acc + product.qty,
     0
   )} item(s)</span></br>
   <span>You will pay : $${products.reduce(
     (acc, product) => acc + product.price,
     0
   )}</span>
  </div>
  `;
};