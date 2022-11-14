/*1.	Leer un número entero y determinar si tiene 3 dígitos.*/

function numero(numero1){
    if(numero1>-1000 && numero1<-99){
    console.log("El numero: "+ numero1 + " tiene 3 digitos.");
}else{
    if(numero1>99 && numero1<1000){
        console.log("El numero: "+ numero1 + " tiene 3 digitos.");
    }else{
        console.log("El numero: "+ numero1+ " no tiene 3 digitos.");
    }
}
}
numero(100)