/*3.1) Dado el siguiente objeto
let carrito = {
    montoTotal: 10,
    productos: ["Leche"]
}

//Crear las clases necesarias para generar carritos respetando la estructura del objeto dado.
3.2) Agregar un metodo a la clase que agregue un producto al carrito y actualice el montoTotal
agregarProducto(nombre, precio, unidades) {
    // Completar aca...
}

3.3)Agregar al ejercicio anterior una validación para no permitir duplicados
e imprimir un mensaje si el item ya existe “ya existe xxx con yyy unidades”*/

//no sabía si inicializar el carrito vacío o como si tuviera "leche"

class Carrito {
    constructor() {
      this.montoTotal = 0;
      this.productos = [];
    }
    agregarProducto(nombre, precio, unidades) {
      if (!this.productos.includes(nombre)) {
        this.productos.push(nombre)
        this.montoTotal += precio * unidades;
      } else {
        console.log(`ya existe ${nombre} en el carrito`);
      }
  
    }
}
let carrito =new Carrito()
carrito.agregarProducto("Leche",10,1)
console.log(carrito)

carrito.agregarProducto("Azucar", 5, 2)
console.log(carrito)

carrito.agregarProducto("Azucar", 5, 2)
console.log(carrito)


