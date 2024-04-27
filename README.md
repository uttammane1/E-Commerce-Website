# Product-Listing-Web-Application-using-FakeStoreAPI
# Usage 
To use the Fake Store API, you can make HTTP requests to the following endpoints:

/products: Fetches a list of products.
/products/{id}: Fetches a single product by ID.
/categories: Fetches a list of categories.
/categories/{id}: Fetches a single category by ID.
/users: Fetches a list of users.
/users/{id}: Fetches a single user by ID.

# Documentation

For more information about the Fake Store API, including request and response formats, please see the official documentation at https://fakestoreapi.com/documentation.


## Code Examples

fetch('https://fakestoreapi.com/products')
 .then(response => response.json())
 .then(data => {
    console.log(data);
  })
 .catch(error => {
    console.error('Error fetching products:', error);
  });

