//class to define a product object: like a struct or object in java
class Product {
  // Constructor
  constructor (title, imgURL, description, price) {
    this.title = title;
    this.imgURL = imgURL;
    this.description = description;
    this.price = price;
  }
}

// class to define an actual list to render to the DOM
class ProductList {
  constructor () {}
  // fields
  productList = [
    //this array mimics a database
    new Product (
      'Pillow',
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      'Plush pillow',
      34.99
    ),
    new Product (
      'RVCA Hat',
      'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      'RVCA cap',
      40.99
    ),
    new Product (
      'Ocean Painting',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
      'Ocean painting',
      10.99
    ),
  ];

  render () {
    const renderHook = document.getElementById ('app'); // grab the app div we will be appending all our html to
    const prodList = document.createElement ('ul'); // create an unordered list and give it a classname
    prodList.className = 'product-list';

    // loop all the products in our 'database' [this objects array of products] and create list items to append to the list
    for (const product of this.productList) {
      const productItem = new ProductItem (product); //instantiate each product from the product item clss and create a new LI
      const productElement = productItem.createElement (); //create that element (product item class will provide the html/logic to do so [returns that dome elemnent which is  why we saved it])
      prodList.append (productElement); // append this product to the ul
    }
    //append the product list itself to the app div
    renderHook.append (prodList);
  }
}

// creates a product item card
class ProductItem {
  // accepts a product to be rendered to the DOM
  constructor (product) {
    this.product = product;
  }

  // adds item to cart: callback for event listened on the button of the product: the buttons event is bound by default to the object in which calls it
  //which is in another class, therefore, its undefined! We need to always bind event listeners to things that are used elsewhere (this is a big thing in react)
  addItemToCart () {
    console.log ('Adding to cart:' + this.product);
  }

  // [user defined method] creates a new list item product card and returns that item to be rendered
  createElement () {
    const productElement = document.createElement ('li');
    productElement.className = 'product-item';

    //gather all the data for this product (the one passed into the constructor in the product list render method) and render it with some html : style.css will style this []
    productElement.innerHTML = ` 
      <div>
        <img src="${this.product.imgURL}" alt="${this.product.title}"/>
        <div class="product-item__content">
          <h2>${this.product.title}</h2>   
          <h3>\$${this.product.price}</h3>
          <p>${this.product.description}</p>   
          <button>Add to Cart</button>
        </div>
      </div>
    `;

    //put an event listener on the button in the product element
    const addToCart = productElement.querySelector ('button');
    addToCart.addEventListener ('click', this.addItemToCart.bind (this)); //add product to cart: bind the method to this particular products context and nit the object ocntext calling it in the other class

    //return the new DOM element
    return productElement;
  }
}

const productList = new ProductList ();
productList.render ();
