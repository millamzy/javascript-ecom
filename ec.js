// Define products
const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];
  
  // Define cart
  let cart = [];
  
  // Function to display products
  function displayProducts() {
    console.log('Available products:');
    products.forEach(product => {
      console.log(`${product.id}. ${product.name} - $${product.price}`);
    });
  }
  
  // Function to add product to cart
function addProductToCart(productId) {
    const productToAdd = products.find(product => product.id === productId);
    if (productToAdd) {
      cart.push(productToAdd);
      console.log(`${productToAdd.name} added to cart.`);
    } else {
      console.log('Product not found.');
    }
  }
  
  // Example usage
  displayProducts();
  addProductToCart(2);
  console.log('Cart:', cart);