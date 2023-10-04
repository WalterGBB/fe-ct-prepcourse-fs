/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   if(Array.isArray(array)) return array[0];
   else return "No ha ingresado un array";
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   if(array.length>0){
      if(Array.isArray(array)) return array[array.length-1];
      else return "No ha ingresado un array";   
   }else return "Array vacío";
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   if(Array.isArray(array)) return array.length;
   else return "No ha ingresado un array";
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   if(Array.isArray(array)) {
      return array.map((num) => {return num+1});
   }
   else return "No ha ingresado un array";
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   if(Array.isArray(array)){
      array.push(elemento);
      return array;
   }else return "No ha ingresado un arreglo"; 
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   if(Array.isArray(array)){
      array.unshift(elemento);
      return array;
   }else return "No ha ingresado un arreglo"; 
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   if(Array.isArray(palabras)){
      var stringConcatenado = "";
      stringConcatenado = palabras.join(" ");
      return stringConcatenado;
   }else return "No ha ingresado un arreglo"; 
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   if(Array.isArray(array)){
      return array.includes(elemento);
   }else return false + ", no es un arreglo";
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   if (Array.isArray(arrayOfNums) && arrayOfNums.every((num) => typeof num === "number")) {
      return arrayOfNums.reduce((sumaElementos, num) => sumaElementos + num, 0);
      //reduce permite operar cada elemento de un array y retornar un único valor
      //el 0 es el valor inicial que se establece para el acumulador sumaElementos
   } else {
      return "No es un arreglo";
   }
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
      /* Verificar si el parámetro es un arreglo de números.
      if (Array.isArray(resultadosTest) && resultadosTest.every((resultado) => typeof resultado === "number")) {
         // Utilizar el método reduce() para sumar todos los elementos del arreglo.
         const sumaResultados = resultadosTest.reduce((total, resultado) => total + resultado, 0);
         // Calcular el promedio dividiendo la suma entre la cantidad de elementos.
         return sumaResultados / resultadosTest.length;
      } else {
         // Si no es un arreglo de números válidos, puedes devolver un valor predeterminado o lanzar un error, según lo prefieras.
         // Por ejemplo, devolver false:
         return false + "No es un arreglo de números";
      }*/
   
   //Se puede hacer con el código anterior comentado, pero como pide con un bucle:
      if (Array.isArray(resultadosTest) && resultadosTest.every((resultado) => typeof resultado === "number" )) {
      var sumaResultados = 0; 
      for(var i=0; i<resultadosTest.length; i++){
         sumaResultados += resultadosTest[i];
      }
      return sumaResultados/resultadosTest.length;
   } else {
      return "No es un arreglo de números";
   }
   
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   if (Array.isArray(arrayOfNums) && arrayOfNums.every((num) => typeof num === "number" )) {
      var numMayor = 0;
      for(let index = 0; index < arrayOfNums.length; index++) {
         if(numMayor<arrayOfNums[index]) numMayor = arrayOfNums[index];
      }
      return numMayor;
   }else return "No es un arreglo de números";
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
      /*OJO --> La palabra clave arguments en JavaScript es una palabra especial que se utiliza dentro
      de funciones para acceder a los argumentos que se pasaron a la función, independientemente de la
      cantidad de argumentos o de si se declararon explícitamente como parámetros de la función.*/
      
      // Verifica si se pasaron argumentos
      if (arguments.length === 0) {
         return 0;
      } else if (arguments.length === 1) {
         return arguments[0];
      } else {
         /*let estará disponible solo dentro del bloque en el que se declara, ya sea un bloque de 
         función, un bloque if, un bucle for, etc.*/
         let producto = 1;
         for (let i = 0; i < arguments.length; i++) {
            producto *= arguments[i];
         }
         return producto;
   }
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   if(Array.isArray(array)){
      let contador = 0;
      for(let index = 0; index < array.length; index++) {
         if(array[index]>18) contador++;
      }
      return contador;
   }else return "No es un array";

}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if(Number.isInteger(numeroDeDia) && numeroDeDia>0 && numeroDeDia<8){
      if(numeroDeDia==1 || numeroDeDia==7) return "Es fin de semana";
      else return "Es dia laboral";
   } else return "No es un número de día Válido";

}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   if(typeof num==="number"){ //toString() retorna el valor de num en formato tipo string
      let cadena = num.toString().split(""); //split convierte num.toString a un array y separa cada elemento ya sea número o símbolo, ejemplo (3.24) --> [3, ., 2, 4]
      if(cadena[0]==9) return true;
      else return false;         
   }
   else return "No es un número";
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   if(Array.isArray(array)) {
      var elementosIguales = array.every((elemento) => { return elemento==array[0]});
      if(elementosIguales) return true; //forma reducida de if(elementos == true), si no se coloca nada por defecto se entiende como "si es verdadero que..."
      else return false;
   }else return "No es un arreglo";
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var nuevoArreglo = [];
   for (let index = 0; index < array.length; index++) {
      if(array[index] == "Enero"|| array[index] == "Marzo"|| array[index] =="Noviembre")
      nuevoArreglo.push(array[index]);
   }

   if(nuevoArreglo.includes("Enero") && nuevoArreglo.includes("Marzo") && nuevoArreglo.includes("Noviembre")) return nuevoArreglo;
   else return "No se encontraron los meses pedidos";
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let resultadosTablaDelSeis = [];
   for (let i = 0; i <= 10; i++) { //del 0 al 60 deben los resultados por eso el valor de i llega hasta 10
      resultadosTablaDelSeis.push(i*6);
   }
   return resultadosTablaDelSeis;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   newArray = [];
   if(Array.isArray(array)){
      array.forEach(element => {
         if(element>100) newArray.push(element);
      });
      return newArray;
   }else return "No es un arreglo";
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   let array = [];
   let i=0; //declaramos el i fuera del for para que pueda ser reutilizado en el condicional final, es deir que su uso no se restrinja al bloque for, sino a toda la función
   for(i; i<10; i++){
      if(num == i) break;  //No tiene sentido usar break aquí si ya está el return "Se interrumpió la ejecución";
      num += 2; //equivalencia a num = num + 2; OJO -> += NO ES LO MISMO QUE =+, este último no tiene sentido en js 
      array.push(num);
   }
   //Pero como piden utilizar el statament break sería así: 
   if(num == i) return "Se interrumpió la ejecución"; //si el valor de num es igual a i que este al interrumpirse el for es igual al tamaño del array  
   return array;
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let array = [];
   let i=0; 
   for(i; i<10; i++){
      if(i==5) { //Por lo visto también se referían a que no incluya num al array cuando i sea igual 5
         //array.push(num); así se haría si queremos que num se agregue al array pero sin sumarle 2 a su último valor
         continue;  //según la condición del if, continue suprime todas las instrucciones del bubcle hasta su próxima ieración
      }
      num += 2; 
      array.push(num);
   }
   return array;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
