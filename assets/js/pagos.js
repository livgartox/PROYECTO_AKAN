
for(let i= 1; i<=12;i++){
    //console.log(i);
    let opcion = document.createElement('option');
    opcion.value =i;
    opcion.innerText =i;
    formulario.selectMes.appendChild(opcion);
    console.log(formulario.selectMes.value);
}

const yearActual =new Date().getFullYear();
for(let i = yearActual; i<=yearActual+8; i++){
    let opcion = document.createElement('option');
    opcion.value =i;
    opcion.innerText =i;
    formulario.selectYear.appendChild(opcion);
}

formulario.inputNumero.addEventListener('keyup', (e) =>{
    let valorInput = e.target.value
    formulario.inputNumero.value = valorInput
    // Eliminar espacios 
    .replace(/\s/g, '')
    // Eliminar letras
    .replace(/\D/g, '')
    .replace(/([0-9]{4})/g, '$1 ')
    .trim();
});

formulario.inputCCV.addEventListener('keyup', (e) => {
formulario.inputCCV.value = formulario.inputCCV.value
.replace(/\s/g, '')
// Eliminar letras
.replace(/\D/g, '');
});


codigoPostal.addEventListener('keyup', (e) => {
    codigoPostal.value = codigoPostal.value
    .replace(/\s/g, '')
    // Eliminar letras
    .replace(/\D/g, '');
    });

telefono.addEventListener('keyup', (e) => {
        telefono.value = telefono.value
        .replace(/\s/g, '')
        // Eliminar letras
        .replace(/\D/g, '');
        });
////////////////////////// aqui voy a editar--NEK
//function capturaEnvio() {
    const $formulario = document.getElementById('datosEnvio');
    $formulario.addEventListener('submit', (e) => {
    e.preventDefault();


    let nombreEn = document.getElementById('nombreEnvio').value;
    let apellidoEnvio = document.getElementById('apellidoEnvio').value;
    let estadoEnvio = document.getElementById('estado').value;
    let direccionEnvio = document.getElementById('grupoDireccion').value;
    let coloniaEnvio = document.getElementById('colonia').value;
    let municipioEnvio = document.getElementById('municipio').value;
    let codigoPostalEnvio = document.getElementById('codigoPostal').value;
    let telefonoEnvio = document.getElementById('telefono').value;
    const datosEnvioArreglo = {nombre:nombreEn,apellido:apellidoEnvio, estado:estadoEnvio, direccion: direccionEnvio, colonia: coloniaEnvio,municipio: municipioEnvio, codigo: codigoPostalEnvio, telefono: telefonoEnvio}
    const jsonEnvio = JSON.stringify(datosEnvioArreglo);
    console.log(jsonEnvio);

    //if (nombreEn === "" && apellido === "" && estado === "" && direccion === "" && colonia === "" && municipio === "" && codigo === "" && telefono === "") return alert("Todos los espacios están vacíos"); 
    
    fetch('http://localhost:8080/usuarios',  {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre: nombreEn,
            apellido:apellidoEnvio,
            estado:estadoEnvio,
            direccion:direccionEnvio,
            colonia:coloniaEnvio,
            municipio:municipioEnvio,
            codigo:municipioEnvio,
           telefono:telefonoEnvio,
           registro:{
            id_registro:1
           }
        })

    })

    .then(resp => {
        // if( resp.ok) {
              
        //       url = window.location;
        //       const path = url.pathname.substring(0, url.pathname.lastIndexOf('/') + 1)
        //       location.href = path +  'index.html';
        // }
    })
    
    .catch((error) => {
        console.error('Error:', error);
    }); 
    })
//};
/////////////////////////////////Hasta aki------------nek
function capturaPago() {
    let numTarjeta = document.getElementById('inputNumero').value;
    let nombreTarjeta =document.getElementById('inputNombre').value;
    let mes = document.getElementById('selectMes').value;
    let year = document.getElementById('selectYear').value;
    let codSeguridad = document.getElementById('inputCCV').value;
    const capturaPagoArreglo = {numeroT:numTarjeta,nombreT:nombreTarjeta,mes:mes, year:year,ccv:codSeguridad}
    console.log(capturaPagoArreglo);
    const jsonPago = JSON.stringify(capturaEnvio);
    console.log(jsonPago);
}

// VENTANA MODAL
document.getElementById("btnabrir").addEventListener ("click",function(){
    document.getElementsByClassName
    ("fondo_transparente")[0].style.display="block"
    return false
})

document.getElementsByClassName("modal_cerrar")[0].
addEventListener("click", function () {
    document.getElementsByClassName
    ("fondo_transparente")[0].style.display="none"
})