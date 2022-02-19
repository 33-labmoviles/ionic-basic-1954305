console.log("hola mundo!");

var total = 0;
var monto = 0;

var montoTxt = document.getElementById("monto");
var totalMsg= document.getElementById("totalMsg");
var descripcionTxt = document.getElementById("descripcion");
var listaTicket = document.getElementById("ticket");

//Calcular el total
function calcularTotal() {

    monto = montoTxt.value;
    monto = parseInt(monto);
    
    total = total + monto;
   
    //Imprimir total
    totalMsg.innerHTML = "Total: $ " + total;

    imprimirTicket(monto);
}


function imprimirTicket(monto) {

     var elementoTicket = document.createElement("ion-item"); //elemento de lista
     var labelElemento = document.createElement("ion-label"); //etiqueta de elemento

//Crear el texto para la etiqueta
     labelElemento.innerHTML = descripcionTxt.value + " : $" + monto;

     elementoTicket.appendChild(labelElemento);

     listaTicket.appendChild(elementoTicket);

//Limpiar campos de texto
    descripcionTxt.value = "";
    montoTxt.value = "";

}