/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   
   /*const sirve para asegurarse que la variable siempre será del tipo inicial declarado, aunque su contenido 
   si puede cambiar solo si es un objeto a un arreglo const en caso que no sea un objeto a un arreglo, no podrá 
   cambiar su valor, ejem: const x=5, x siempre tendrá el valor numérico de 5
   -De esta forma arregloDeArrelgos siempre será un array*/
   const arregloDeArreglos = [];
   /*Iniciamos un bucle for in que recorre todas las propiedades del objeto.
   -La palabra clave sirve para representar cada clave del objeto en cuestión independientemente del nombre 
   real de la clave.
   -const clave indica que las acciones a realizar dentro del for solo serán para cada clave del objeto*/
   for (const clave in objeto) {
      /*Cuando se utiliza hasOwnProperty en esta función, se está verificando si la propiedad que se está 
      iterando en el objeto pertenece directamente a ese objeto, es decir, si es una propiedad que ha sido 
      definida específicamente en ese objeto, en lugar de ser heredada de su prototipo*/
    if (objeto.hasOwnProperty(clave)) {
      /*Creamos un nuevo arreglo con la clave y el valor correspondientes y lo agregamos
      al arreglo principal arregloDeArreglos. De esta manera, estamos construyendo
      un arreglo de arreglos con pares clave-valor, clave es el nombre de la propuiedad del objeto y 
      objeto[clave] sería el valor que tiene dicha propiedad en el objeto*/ 
      arregloDeArreglos.push([clave, objeto[clave]]);
        //clave es el nombre de la propiedad del objeto.
        //objeto[clave] es el valor asociado a esa propiedad en el objeto
      }
      /*En JavaScript, los objetos pueden heredar propiedades de sus prototipos, y a veces, cuando se itera 
      sobre un objeto, es importante asegurarse de que solo se incluyan las propiedades que son específicas 
      de ese objeto y no las propiedades heredadas. Usar hasOwnProperty es una forma de realizar esta 
      verificación y asegurarse de que solo se incluyan propiedades directas del objeto. Por lo tanto, 
      la función deObjetoAarray utiliza hasOwnProperty para evitar la inclusión de propiedades heredadas al 
      construir el arreglo de arreglos a partir del objeto*/
   }
  return arregloDeArreglos;
  /*En un objeto en JavaScript, cada par "clave: valor" se define de la siguiente manera:
   -La parte que está antes de los dos puntos (:) se considera la clave o el nombre de la propiedad.
   -La parte que está después de los dos puntos (:) se considera el valor asociado a esa propiedad. 
   EJEMPLO:
   const persona = {
      nombre: "Juan",
      edad: 30,
      ciudad: "México"
   };
   En este caso, "nombre", "edad" y "ciudad" son las claves, y "Juan", 30 y "México" son los valores 
   asociados a esas claves, respectivamente.*/
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   
   /*Crear un objeto para almacenar la cuenta de cada letra diferente será una clave y la cantidad de veces 
   que se repita dicha letra será su valor*/
   const count = {}; //Recuerda que los objetos en js tienen clave:valor

   // Recorrer el string y contar las letras.
   for (let i = 0; i < string.length; i++) {
      //letra representa cada clave del objeto count que será cada letra del parámetro string
      const letra = string[i]; 
      // Si la letra o clave ya existe en el objeto, incrementa su conteo; de lo contrario, inicializa el conteo en 1.
      if (count[letra]) {
         count[letra]++;
      } else { //se crea una nueva clave a partir de una nueva letra encontrada y se asigna el valor 1
         count[letra] = 1;
      }
  }

  //Objeto creado para ordenar alfabéticamente las letras del objeto count y sus recuentos.
   const orderedCount = {};
   /*Object.keys(count) se utiliza para obtener un arreglo con todas las claves (letras) del objeto count. 
   En otras palabras, esto obtiene todas las letras que se contaron en el objeto count
   .sort() ordenará alfabéticamente las claves.
   .forEach(function(key)){}); Se utiliza el método .forEach() para recorrer cada clave (letra) en el arreglo 
   ordenado. Para cada clave, se ejecuta una función que toma la clave actual como argumento (denominada key).
   orderedCount[key] = count[key]; Dentro de la función .forEach(), se crea una propiedad en el objeto 
   orderedCount con el nombre de la clave key y se le asigna el valor del recuento correspondiente obtenido 
   del objeto count. En otras palabras, se copia la letra y su recuento desde el objeto count al objeto 
   orderedCount*/
      Object.keys(count).sort().forEach(function(key) { //Las claves de count se copian a orderedCount a través de la iteración de las propiedades del objeto count
      orderedCount[key] = count[key]; //Se copian los valores (recuentos) del objeto count al objeto orderedCount
   });

   /*Esto sería más simple y directo:
      Object.keys(count).sort(); 
   /pero el ejercicio solicita crear un nuevo objeto que tenga las mismas claves y recuentos del primer objeto 
   pero ya ordenado alfabéticamente, se requiere así como buena práctica de legibilidad*/ 

   return orderedCount;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   //Se declaran las cadenas como let porque su valor se modificará conforme el bucle for itere el parametro string
   let letrasMayusculas = ""; 
   let letrasMinusculas = "";
   for (let i=0; i<string.length; i++) {
      //En algunos casos const funciona si las variables declaradas así se declaran dentro del bucle, puesto que su valor se resetea con cada iteración
      //if (string[i].charCodeAt(0) >= 65 && string[i].charCodeAt(0) <= 90) es otra forma de hacerlo, entre el 65 y 90 se encuentran los valores numéricos de las letras mayúsculas en el sistema ASCII
      //ASCII (American Standard Code for Information Interchange) es un conjunto de caracteres y códigos que se utiliza para representar texto y controlar dispositivos de comunicación
      if (string[i] === string[i].toUpperCase()) { //verificamos si el la letra de la cadena en la posición i está en mayúscula (si es equivalente a su versión en mayúscula para que lo entienda la PC)
         letrasMayusculas += string[i]; //Si es así se agrega a la cadena de mayúsculas
      }else{
         letrasMinusculas += string[i]; //Si no, se agrega a la cadena de minúsculas 
      }
   }
 
   return letrasMayusculas + letrasMinusculas; //concatenamos ambas cadenas conforme pide el ejercicio y retornamos

}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   // Verifica si la entrada (frase) es una cadena de texto.
   if(typeof frase === "string") {
      // Es una buena práctica utilizar const en lugar de let cuando sabes que el valor de una variable no cambiará después de su inicialización. 
      // Divide la frase en palabras que están separadas por espacios y almacena las palabras en un arreglo.
      const palabras = frase.split(" ");
      // Inicializa una cadena para almacenar la frase invertida.
      const fraseInvertida = palabras.map(palabra => {
         //Se utiliza el método map() para aplicar una función a cada palabra en el arreglo de palabras.
         return palabra.split("").reverse().join("")}).join(" ");   
         //.split("") Divide la palabra en un arreglo de caracteres.
         //.reverse() Invierte el orden de los elementos de un arreglo, en este caso invierte los caracteres en la palabra.
         //.join("") Une los caracteres invertidos para formar la palabra invertida.
         //.join(" ") Une las palabras invertidas para formar la frase invertida, separadas por espacios.
      
      // Retorna la frase invertida.
      return fraseInvertida;
 } else {
   // Si la entrada no es una cadena de texto, retorna "Dato inválido".
   return "Dato inválido";
 }
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   if (typeof numero === "number") {
      /*CÓDIGO NOOB pero funcional xd
      const num = numero.toString().split("");
      let aux = numero.toString().length-1;
      for(let i=0; i<numero.toString().length/2; i++){
         if(num[i] !== num[aux]){
            return "No es capicua";
         }
         aux--;
      }
      return "Es capicua";*/

      //Código más decente utilizando reverse para verificar si es capicua:
      //split("") convierte la cadena en un arreglo donde cada caracter de la cadena es un nuevo elemento dle arreglo
      //reverse() invierte el orden de los elementos del arreglo
      //join("") convierte el arreglo en una cadena uniendo cada elemento del mismo (en este caso cada caracter) 
      const num = numero.toString().split("").reverse().join(""); 
      if (numero.toString() === num) { 
         return "Es capicua";
      } else {
         return "No es capicua";
      }
   } else {
      return "Dato inválido";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   if (typeof string === "string") {
      /*CÓDIGO NOOB pero funcional xd, No es buena práctica recargar el condicional de operadores &&, ||, etc
      let newString = "";
      for (let i=0; i<string.length; i++) {
         //El operador || indica que al menos una de las condiciones debe ser verdadera para ejecutar la(s) accion(es) del condicional
         //Se utiliza && porque queremos que no sea a, ni b, ni c.
         if(string.charAt(i) !== "a" && string.charAt(i) !== "b" && string.charAt(i) !== "c"){
            newString += string.charAt(i);
         }         
      }
      return newString;*/

      //Código más decente, utilizando expresiones regulares
      //Aquí no estoy eliminando las letras a, b y c del parametro string, solo estoy retornando como sería el string sin esas letras 
      //Para eliminarlas de verdad sería: string = string.replace(/[abc]/g,"");
      return string.replace(/[abc]/g,""); 
      /*ESTRUCTURA DE UNA EXPRESIÓN REGULAR:
      -Las barras diagonales: // al principio y al final del patrón indican el inicio y el final de la expresión regular.
      -Los corchetes cuadrados: [ ] se utilizan para definir una clase de caracteres. En este caso, [abc] significa que se está buscando 
      cualquier carácter que sea "a", "b" o "c". La expresión regular buscará cualquiera de estos tres caracteres en la cadena.
      -El modificador: g (de global) se coloca después de la expresión regular para indicar que se debe buscar y reemplazar todas las ocurrencias 
      del patrón en toda la cadena. Sin el modificador g, la expresión regular detendría la búsqueda después de encontrar la primera coincidencia. 
      */
   } else {
      return "Dato inválido";
   }
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   
   // Verifica si el argumento es un arreglo.
   if (Array.isArray(arrayOfStrings)) {
      // Verifica si todos los elementos del arreglo son strings.
      if(arrayOfStrings.every(element => typeof element === "string")) {
         // Utiliza la función .sort() para ordenar el arreglo en función de la longitud de los strings.
         // La función de comparación (a, b) => a.length - b.length ordena los elementos en orden creciente de longitud.
         return arrayOfStrings.sort((a, b) => a.length - b.length);
      }else {
         return "No es un arreglo de strings";
      }
   } else {
      return "No es un arreglo";
   }
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   
   if (Array.isArray(array1) && Array.isArray(array2)) {
      if (array1.every(element => typeof element === "number") && array2.every(element => typeof element === "number")) {
         var interseccion = [];
         /*CÓDIGO NOOB, funcional pero puede admitir valores repetidos en interseccion si en array1 existen elementos repetidos
         for(let i=0; i<array1.length; i++) {
            for(let j=0; j<array2.length; j++) {
               if(array1[i] === array2[j]){
                  interseccion.push(array1[i]);
                  break; //Evita agregar el mismo elemento múltiples veces a la intersección si ocurre más de una coincidencia, se rompe el bubcle interno.
               }            
            }
         }*/
         
         //Código más decente:
         // Itera a través de los elementos del primer arreglo
         for(let i=0; i<array1.length; i++){
            // Verifica si el elemento del primer arreglo existe en el segundo arreglo
            if(array2.includes(array1[i])){ //includes retorna un valor booleano que verifica si un elemento existe dentro de un arreglo
               // Si existe, agrega el elemento a la intersección
               interseccion.push(array1[i]);
            }
         }
         return interseccion;
      } else {
         return "Uno o ambos no son arreglos de números";
      }
   } else {
      return "Datos inválidos";
   }
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
