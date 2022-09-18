"use strict";

// Switch case for vegetable prices
function priceOfVeg(event) {
  var veg = event.target.value; //let veg2 = event.target.value

  var pricePerkg;

  switch (veg) {
    case "potatoes":
    case "carrots":
      pricePerkg = "£0.99/kg";
      break;

    case "brocolli":
      pricePerkg = "£0.49/kg";
      break;

    case "cabbage":
      pricePerkg = "£0.39/kg";
      break;

    case "asparagus":
      pricePerkg = "£1.35/kg";
      break;
  } // let quotePrice = "The price of " + veg + " is " + pricePerkg;


  var quotePrice = "The price of   ".concat(veg, "  is ") + pricePerkg;
  document.getElementById("price-of-veg").innerHTML = quotePrice;
}