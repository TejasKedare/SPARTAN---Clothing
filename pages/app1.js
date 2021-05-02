function addToCart(event) {
  var x = event.target;
  var cardDetails = x.parentElement;
  var imageDetails = cardDetails.getElementsByClassName("card-img-top")[0];
  var nameDetails = cardDetails.getElementsByClassName("card-title")[0];
  var priceRatingDetails = cardDetails.getElementsByClassName("card-text")[0];
  document.getElementById("alert").style.display = "block";
  document.documentElement.scrollTop = 0;
  // var cardItem = document.getElementsByClassName("card");
  // for (let i = 0; i <br cardItem.length; i++) {
  //   var detail = cardItem[i];
  //   displayToCart();
  // }
  // console.log(imageDetails);
  var name = nameDetails.innerHTML;
  var price = priceRatingDetails.innerHTML;
  // console.log(priceRatingDetails);
  var item = [name, price];
  var div = document.createElement("div");
  div.innerHTML = item + "<br><u>__________</u>";
  // var div1 = document.createElement("<u></u>");
  // div1.innerHTML = price;

  console.log(div);

  var display = document.getElementById("dropdownMenuButton");
  console.log(display);
  display.append(div);
  // display.append(div1);
}

function alertText() {
  document.getElementById("alert").style.display = "block";
}
