function registro(){
    let nombre=document.getElementById('name').value;
    let correoE=document.getElementById('correo').value;
    let contra1=document.getElementById('palabraSecreta1').value;
    let contra2=document.getElementById('palabraSecreta2').value;
    let date=document.getElementById('fecha').value;
    if (nombre==""){
        //alert('Ingrese Nombre');
        document.getElementById("name").focus();
    }else{
        if (correoE==""){
            //alert('Ingrese Correo Electronico');
            document.getElementById("correo").focus();
    }else{
        if (contra1==""){
            //alert('Ingrese Contraseña');
            document.getElementById("palabraSecreta1").focus();
    }else{
        if (contra2==""){
            //alert('Confirme Contraseña ');
            document.getElementById("palabraSecreta2").focus();
    }else{
        if (date==""){
            //alert('Ingrese Fecha de Nacimiento');
            document.getElementById("fecha").focus();
    }else{
        console.log(nombre+" "+correoE+" "+contra1+" "+contra2);
        document.getElementById("name").value="";
        document.getElementById("correo").value="";
        document.getElementById("palabraSecreta1").value="";
        document.getElementById("palabraSecreta2").value="";
        document.getElementById("fecha").value="";
    }
}
    }
}
}
}

function arraySing(){
    let arrayInput = new Array();
    let inputsValues = document.getElementsByClassName('regis'),
    namesValues = [].map.call(inputsValues,function(dataInput){
        arrayInput.push(dataInput.value);
    });
    console.log(arrayInput);
}
