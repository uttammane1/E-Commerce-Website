// document.addEventListener('DOMContentLoaded', () => {
//   const productList=document.getElementById('product-list');
//   const categoryFilter=document.getElementById('category');
//   constsortSelect=document.getElementById('sort');
//   constsearchInput=document.getElementById('search');

//   letproductData=[]; //store the product

//   //fetch now from fetch product
// async function fetchProducts(){
//     try{
//         const response=await fetch('https://fakestoreapi.com/products');
//         constdata=await response.json();
//         productData=data;
//         displayProducts(productsData);
//         populateCategories();    
//     }catch(error){
//         console.error('Error fetching products:',error);
//     }
// }

// //display Products

// function displayProducts(products){
//     productList.innerHTML=";
//     products.forEach(product=>{
//         const productItem=document.createElement('div');
//         productItem.classList.add('product-item');
//         productItem.innerHTML=`
//         <img src ="${product.image}" alt="${product.title}">
//         <h3>${product.title}</h3>
//         <p>${product.price}</p>
//         `;
//         productList.appendChild(productItem);
//     });
// }


// //filter dropdown and category

// function populateCategories(){
//     const categories=productData.reduce((acc, curr)=>{
//         if(!acc.includes(curr.category)){
//             acc.push(curr.category);
//         }
//         return acc;
//     };[]);
//     categoryFilter.innerHTML+=category.map(cat=><option value="${cat}">${cat}</option>).join('');
// }

// //product bye category
// categoryFilter.addEventListener('change',()=>{
//     const selectCategory=categoryFilter.value;
//     if(selectCategory){
//         constfilteredProducts=productData.filter(product=>product.category===selectCategory);
//         displayProducts(filteredProducts);
//     }else{
//         displayProducts(productData);
//     }
// });


// //sort product

// sortSelct.addEventListener('change',()=>{
//     const sortOrder=sortSelct.value;
//     const sortedProducts=[...productsData];
//     sortedProducts.sort((a,b)=>{
//         if(sortOrder==='asc'){
//             return a.price-b.price;
//         }else{
//             return b.price;
//         }
//     })
//     displayProducts(sortedProducts);
// })

// //search product

// searchInput.addEventListener('input',()=>{
//     const searchQuery=searchInput.value.trim().toLowerCase();
//     const filteredProducts=productsData.filter(product=>product.title.toLowerCase().includes(searchQuery)
// );
// displayProducts(filteredProducts);
// });

// frtchProducts();
// });



document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const categoryFilter = document.getElementById('category');
    const sortSelect = document.getElementById('sort');
    const searchInput = document.getElementById('search');
  
    let productData = []; //store the product
  
    //fetch now from fetch product
    async function fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        productData = data;
        displayProducts(productData);
        populateCategories();
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
  
    //display Products
  
    function displayProducts(products) {
      productList.innerHTML = "";
      products.forEach((product) => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
          <img src ="${product.image}" alt="${product.title}">
          <h3>${product.title}</h3>
          <p>${product.price}</p>
          `;
        productList.appendChild(productItem);
      });
    }
  
    //filter dropdown and category
  
    function populateCategories() {
      const categories = productData.reduce((acc, curr) => {
        if (!acc.includes(curr.category)) {
          acc.push(curr.category);
        }
        return acc;
      }, []);
      categoryFilter.innerHTML += categories.map((cat) => `<option value="${cat}">${cat}</option>`).join('');
    }
  
    //product bye category
    categoryFilter.addEventListener('change', () => {
      const selectCategory = categoryFilter.value;
      if (selectCategory) {
        const filteredProducts = productData.filter((product) => product.category === selectCategory);
        displayProducts(filteredProducts);
      } else {
        displayProducts(productData);
      }
    });
  
    //sort product
  
    sortSelect.addEventListener('change', () => {
      const sortOrder = sortSelect.value;
      const sortedProducts = [...productData];
      sortedProducts.sort((a, b) => {
        if (sortOrder === 'asc') {
          return a.price - b.price;
        } else {
          return b.price;
        }
      })
      displayProducts(sortedProducts);
    })
  
    //search product
  
    searchInput.addEventListener('input', () => {
      const searchQuery = searchInput.value.trim().toLowerCase();
      const filteredProducts = productData.filter((product) => product.title.toLowerCase().includes(searchQuery));
      displayProducts(filteredProducts);
    });
  
    fetchProducts();
  });