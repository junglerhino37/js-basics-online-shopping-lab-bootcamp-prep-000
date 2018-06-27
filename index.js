var cart = [];

addToCart("Bananas")
addToCart("Banan0s")
console.log(cart)

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
var itemPrice=Math.floor(Math.random()*100)
var newObj={
  ['itemName']:itemName,
  ['itemPrice']:itemPrice
}
cart.push(newObj)
ans=`${itemName} has been added to your cart.`
return ans
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
