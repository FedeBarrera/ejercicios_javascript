// Realizar una funcion que reciba un numero y escriba una piramide desde 1

function piramide(x){
    lista=[];
    for (let i = 1; i <= x; i++) {
        lista.push(i);
        contador=console.log(lista);
    }
    return contador;
}
piramide(3)
piramide(6)

/*Escribir una funcion que reciba 2 array y devuelva
un array con todos los elementos que coinciden entre ellos*/

let lista1 = ['rojo', 'azul', 'amarillo'];
let lista2 = ['blanco', 'negro', 'rojo'];

let lista3= [4, 3, true, 'manzana']
let lista4= ['pera', 3, false, true, 3, true]

function comparar(a,b){
    let iguales = a.filter(elemento => b.includes(elemento))
    return iguales;        
}

let elementosIguales = comparar(lista3,lista4)
console.log(elementosIguales)











