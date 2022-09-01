
for(let i= 1; i<=12;i++){
    //console.log(i);
    let opcion = document.createComment('option');
    opcion.value =i;
    opcion.innerText =i;
    formulario.selectMes.appendChild(opcion);
}

const yearActual =new Date().getFullYear();
for(let i = yearActual; i<=yearActual+8; i++){
    let opcion = document.createComment('option');
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
});

//CAPTURA DE DATOS

function capturaEnvio(){
    let arrayEnvio = new Array();
    let enviosValores = document.getElementsByClassName("inputEnvio");
    valoresEnvio = [].map.call(enviosValores,function(capturaEnvio){
        arrayEnvio.push(capturaEnvio.value);
    });
    console.log(arrayEnvio);
    
}
