const products = [];
async function getApiData() {
    // Fetch the data from the API and return the promise
  
   await fetch('https://fakestoreapi.com/products')
        .then( res =>{
            if (res.ok) {
             return res.json()
            } else {
                console.log("Error loading api")
            }
        }) 
        .then (data => {
            data.forEach( product => {
                 products.push(product)   
            })
        })
        .catch(error => console.log("error ", error))
     
}



await getApiData();
export {products}