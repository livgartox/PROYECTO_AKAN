//funcion que captura datos del formulario iniciar sesoon
function inicioSesion(){
    let correoElec=document.getElementById('correo1').value;
    let contraseña=document.getElementById('palabraSecreta').value;
    if (correoElec==""){
        //alert("Ingrese correo Electronico");
        document.getElementById("correo1").focus();
    }else{
        if (contraseña==""){
            //alert("Ingrese Contraseña");
            document.getElementById("palabraSecreta").focus();
    }else{
        console.log(correoElec +" "+contraseña);
        document.getElementById("correo1").value="";
        document.getElementById("palabraSecreta").value="";
    }
    
}
}

function arrayLog(){
    let arrayInput = new Array();
    let inputsValues = document.getElementsByClassName('datoInput'),
    namesValues = [].map.call(inputsValues,function(dataInput){
        arrayInput.push(dataInput.value);
    });
    console.log(arrayInput);
}