const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;

    const datos = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento
    }

    const datosJSON = JSON.stringify(datos);

    fetch("https://jsonplaceholder.typicode.com/users", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: datosJSON
    })
    .then(data => {
        if (!data.ok) {
          throw Error(data.status);
         } 
         return data.json();
    })
    .then(update => {
        console.log(update);
    })
})