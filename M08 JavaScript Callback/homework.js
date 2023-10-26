/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   if (typeof nombre === "string" && nombre.length>0) {
      return nombre[0].toUpperCase() + nombre.slice(1);
      //slice se utiliza para recortar y devolver una cadena desde una posición de caracter en adelante
   } else {
      return "Dato inválido";
   }
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes retornar nada.
   // Tu código:
   cb();
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   return cb(num1, num2);
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes retornar nada.
   // Tu código:
   if (Array.isArray(arrayOfNumbers) && arrayOfNumbers.every(element => typeof element === "number")) {
      //arrayOfNumbers.every(element => typeof element === "number")) verifica que todos los elementos del array sean números
      var suma = 0;
      for(let i=0; i<arrayOfNumbers.length; i++){
         suma += arrayOfNumbers[i];
      }
      cb(suma);
   } else {
      console.log("No es un array o no es un array de números");
   }
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   if (Array.isArray(array)) {
      array.forEach(element => {
      cb(element);
      });
   } else {
      return "No es un arreglo";
   }
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   var nuevoArreglo = [];
   array.forEach(element => {
      nuevoArreglo.push(cb(element));
   });
   return nuevoArreglo;
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   if (Array.isArray(arrayOfStrings) && arrayOfStrings.every(element => typeof element === "string")) {
      var nuevoArreglo = [];
      for (let i = 0; i < arrayOfStrings.length; i++) {
            if(arrayOfStrings[i].charAt(0) === "a") nuevoArreglo.push(arrayOfStrings[i]);
      }
      return nuevoArreglo;
   } else {
      return "No es un arreglo o no es un arreglo de strings";
   }
   
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
