/*2.	En un cierto país el impuesto que se debe pagar por artículos importados se calcula mediante las siguientes reglas:*/

function valor(valor1){
    if(valor1> 0.00 && valor1 <= 20.00){
        console.log("No genera impuesto.");
        console.log("Total a pagar: "+"$"+ valor1);
    }
    else{
        if(valor1>=20.01 && valor1<=40.00){
             var resul= valor1*0.30;
             var total= valor1+resul;
            console.log("Tiene que pagar un 30% de impuesto: "+ resul);
            console.log("Total a pagar: "+"$"+ total);
        }else{
            if(valor1>=40.01 && valor1<=500.00){
                var resul= valor1*0.40;
                var total= valor1+resul;
                console.log("Tiene que pagar un 40% de impuesto: "+ resul);
                console.log("Total a pagar: "+"$"+ total);
            }else{
                var resul= valor1*0.50;
                var total= valor1+resul;
                console.log("Tiene que pagar un 50% de impuesto: "+ resul);
                console.log("Total a pagar: "+"$"+ total);
            }
        }
    }

}
valor(500)
