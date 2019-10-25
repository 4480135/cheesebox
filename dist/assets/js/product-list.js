"use strict";

document.addEventListener("DOMContentLoaded", function () {
  fetch("/data/products.json").then(function (response) {
    return response.json();
  }).then(function (json) {
    var DOMproductCategoryList = document.querySelector("#product-category-list");
    var DOMlistItemTemplate = document.querySelector("#list-item-template");
    json.forEach(function (product) {
      var listItemTemplate = DOMlistItemTemplate.content.cloneNode(true);
      listItemTemplate.querySelector(".product-name").innerText = product.name;
      listItemTemplate.querySelector(".product-img").src = "/assets/img/" + product.images[0];
      product.description.forEach(function (desc) {
        var descItemElement = document.createElement("p");
        descItemElement.innerText = desc;
        listItemTemplate.querySelector(".product-desc").appendChild(descItemElement);
      });
      listItemTemplate.querySelector(".product-country").innerText = product.country;
      listItemTemplate.querySelector(".product-weight").innerText = product.weight;
      listItemTemplate.querySelector(".product-price").innerText = product.price;
      listItemTemplate.querySelector(".product-link").href = "/product-item/?sku=" + product.sku;
      DOMproductCategoryList.appendChild(listItemTemplate);
    });
  });
});