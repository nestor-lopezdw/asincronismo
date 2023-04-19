const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;   // Previamente instalado por consola con: npm i xmlthhprequest
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlApi, true); // Método, url, habilitado
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) {  // el valor 4: se ha completado el llamado  // Cambios de estado del sevidor
            if (xhttp.status === 200) {  // Si la solicitud ha sido correcta
                callback(null, JSON.parse(xhttp.responseText));  // Se recibe como texto y se convierte a JSON
            } else {
                const error = new Error('Error: ' + urlApi);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

fetchData(`${API}/products`, function (error1, data1) {
    if (error1) return console.error(error1);
    fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
        if (error2) return console.error(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
            if (error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});
