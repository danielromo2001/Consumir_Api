const app = document.querySelector('.container');
const url = 'https://jsonplaceholder.typicode.com/users';
//let busqueda = document.getElementById('api')

fetch(url)
            .then( response => response.json() )
            .then( data => mostrarData(data) )
            .catch( error => console.log(error) )

        const mostrarData = (data) => {
            console.log(data)
            let body = ""
            for (var i = 0; i < data.length; i++) {      
               body+=`<tr>
               <td>${data[i].id}</td>
               <td>${data[i].name}</td>
               <td>${data[i].email}</td>
               <td>${data[i].phone}</td>
               <td>${data[i].website}</td>
               </tr>`
               /*let element = document.getElementById('element')
              document.getElementById("texto").innerHTML = JSON.stringify(data)
              console.log(data)*/
            }
            document.getElementById('data').innerHTML = body
            console.log(body)
        }
