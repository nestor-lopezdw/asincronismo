import fetch from 'node-fetch';
const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlApi){
    return fetch(urlApi).then(response => response.json());
};

// fetchData(`${API}/products`)
//     .then(response => response.json())
//     .then(products => {
//         console.log(products);
//     })
//     .then(() => {
//         console.log("Hola")
//     })
//     .catch(error => console.log(error));

fetchData(`${API}/products`)
    //.then(response => response.json())
    .then(products => {
        //console.log("products[0]: " + products[0]);
        //console.log(`${API}/products/${products[0].id}`)
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(product => {
        console.info(product.title);
        return fetchData(`${API}/categories/${product?.category?.id}`)
    })
    .then(category => {
        console.log(category.name);
    })
    .catch(err => console.log(err))
    .finally(() => console.log('Finally'));