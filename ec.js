// Define products
const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
  ];
  
  // Define cart
  let cart = [];
  
  // display products
  function displayProducts() {
    console.log('Products Available:');
    products.forEach(product => {
      console.log(`${product.id}. ${product.name} - $${product.price}`);
    });
  }
  
// add to cart
function addProductToCart(productId) {
    const productToAdd = products.find(product => product.id === productId);
    if (productToAdd) {
      cart.push(productToAdd);
      console.log(`${productToAdd.name} added to cart.`);
    } else {
      console.log('Product not found.');
    }
  }
  
  // Function to calculate total price and check out
  function checkOut() {
    let totalPrice = 0;
    cart.forEach(item => {
      totalPrice += item.price;
    });
    console.log(`Total price: $${totalPrice}`);
    cart = [];
    console.log('Thank you for shopping with us!');
  }
  
  // Example usage
  displayProducts();
  addProductToCart(2);
  console.log('Cart:', cart);
  checkOut();