const CartHandler = async function(event) {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const productID = parseInt(this.dataset.product);
console.log(productID);
  if (productID) {
    // Send the e-mail and password to the server
    // post to /login

    // Send the e-mail and password to the server
    // post to /login qithout fetch

    const response = await fetch("/api/cart/products", {
      method: "POST",
      body: JSON.stringify([productID]),
      headers: { "Content-Type": "application/json" },
    });
  
  }
};

document.querySelectorAll(".addtocart").forEach( (button) => {
  console.log(button);
button.addEventListener("click", CartHandler);
})
