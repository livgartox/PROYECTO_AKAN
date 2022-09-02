 function contraseOlv(){
    let correoElec2=document.getElementById('correo2').value;
    let contraseña1=document.getElementById('contra-1').value;
    let contraseña2=document.getElementById('contra-2').value;
    if (correoElec2==""){
        //alert("Ingrese correo Electronico");
        document.getElementById("correo2").focus();
    }else{
        if (contraseña1==""){
            //alert("Ingrese Contraseña");
            document.getElementById("contra-1").focus();
    }else{
        if (contraseña2===""){
            //alert("Ingrese Contraseña2");
            document.getElementById("contra-2").focus();
    }else{
        console.log(correoElec2 +" "+contraseña1+" "+contraseña2);
        document.getElementById("correo2").value="";
        document.getElementById("contra-1").value="";
        document.getElementById("contra-2").value="";
    }
}
}
}  

function viewArrayInput(){
    let arrayInput = new Array();
    let inputsValues = document.getElementsByClassName('datoInput'),
    namesValues = [].map.call(inputsValues,function(dataInput){
        arrayInput.push(dataInput.value);
    });
    console.log(arrayInput);
    document.getElementsByClassName("datoInput");
}