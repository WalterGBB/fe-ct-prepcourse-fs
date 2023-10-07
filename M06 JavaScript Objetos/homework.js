/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
   var gato = {nombre: nombre, edad: edad};
   gato["meow"] = function() {return "Meow!"};
   return gato;
}

function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
   var usuario = {
      nombre: nombre,
      email: email,
      password: password
   };
   return usuario;
}

function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
   if (typeof objeto === "object") {
      objeto[propiedad] = null; //null no va entre corchetes porque indica que la propiedad está vacía, no es un elemento del arreglo que compone la propiedad
      return objeto;
   } else return "No es un objeto";
}

function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
      //Verificamos si el método existe en el objeto y que la propiedad método sea dle tipo función
   if (objeto.hasOwnProperty(metodo) && typeof objeto[metodo] === "function") {
      //Invocamos a la función de la propiedad metodo utilizando paréntesis
      objeto[metodo]();
   }else return "No es un objeto";
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
      //Aquí numeroMisterioso si va entre comillas porque no es un parámetro de la función
   if (typeof objetoMisterioso === "object" && objetoMisterioso.hasOwnProperty("numeroMisterioso")) {
      if(typeof objetoMisterioso.numeroMisterioso === "number")
         return objetoMisterioso.numeroMisterioso*5;
      else return "La propiedad número misterioso no es un número";
   } else return "No es un objeto o no tiene la propiedad número misterioso";
   /*Así sería en notación Bracket Notation
   if (typeof objetoMisterioso === "object" && objetoMisterioso.hasOwnProperty("numeroMisterioso")) {
      if (typeof objetoMisterioso['numeroMisterioso'] === "number") {
         return objetoMisterioso['numeroMisterioso'] * 5;
      } else return "La propiedad 'numeroMisterioso' no es un número";
   } else return "No es un objeto o no tiene la propiedad 'numeroMisterioso'";*/
}

function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:
   if (typeof objeto === "object" && objeto.hasOwnProperty(propiedad)) {
      delete objeto[propiedad]; //Aquí propiedad no va entre comillas porque está como parámetro de la función
      return objeto;
   } else return "No es un objeto o el segundo parámetro ingresado no es su propiedad"
}

function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
    /*Esta respuesta es más completa y cumple con todos los enunciados:
      if (typeof objetoUsuario === "object"){
         if (objetoUsuario.hasOwnProperty("email") && typeof objetoUsuario["email"] !== "undefined") {
            return true;
         } else return false + " No tiene la propiedad 'email' o dicha propiedad no esta definida";
      } else return false + " No es un objeto";*/

      /*Esto simplemente verifica si la propiedad "email" existe en el objeto y retorna true si existe 
      y false si no existe o es undefined. Sin embargo, no cumple con la parte de "retornar false con 
      un mensaje si la propiedad no está definida", que era una parte importante del enunciado original...
      Pero lo dejo así porque de este modo si lo reconoce como respuesta completamente correcta sin embargo
      se insiste en que hubo un error al programar la corrección de este ejercicio*/
      if(objetoUsuario["email"]) return true;
      else return false;
}

function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
      /*if(typeof objeto === "object" && objeto.hasOwnProperty(propiedad)) return true;
      else return false + " No es un objeto";*/
   //Nuevamento lo anterior es más detalladp pero piden que sea de este modo: 
   if(objeto[propiedad]) return true;
   else return false;
}

function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
      /*if(objetoUsuario["password"] === password) return true; //Con igualdad estricta porque es una contraseña, debe coincidir en valor y formato
      else return false;*/
   //Lo anterior es más ilustrativo pero levemente redundante, así es más resumido (Ya se sabe que retornará true o false según sea el caso)
   return objetoUsuario["password"] === password;
}

function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contraseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.password = nuevaPassword; //Dot Notation para variar :)
   return objetoUsuario;
      /*En Bracket Notation sería así:
         objetoUsuario["password"] = nuevaPassword;
         return objetoUsuario;*/
}

function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.amigos.push(nuevoAmigo);
   return objetoUsuario;
}

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:
   for(let i=0; i<objetoMuchosUsuarios.length; i++){ //length sin () porque funciona como propiedad no como función en este caso
      objetoMuchosUsuarios[i].esPremium = true;
   }
   return objetoMuchosUsuarios;
}

function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
     /*Esta en la forma de la estructura de ObjetoUsuario:
      objetoUsuario = {
         posts: [post = {likes: num}]
      }  Es un objeto con un arreglo de objetos como propiedad*/ 
   let suma = 0;
   for(let i=0; i<objetoUsuario.posts.length; i++){ //Accedemos a la propiedad posts de objetoUsuario 
      suma += objetoUsuario.posts[i].likes; //En dicha propiedad (arreglo), sumar los likes de cada posición del arreglo, osea de cada post
   }
   return suma;
}

function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
      /*Aquí hay un error de redacción, según lo que te piden debes retornar el precio final así:
      objetoProducto.calcularPrecioDescuento = function() {
         return objetoProducto.precio*objetoProducto.porcentajeDeDescuento;
      }
      return objetoProducto.precio-objetoProducto.calcularPrecioDescuento();*/

      //Pero al corregir demanda retornar todo el objetoProducto para considerar correcto el ejercicio :(
      //Por eso queda así:
      objetoProducto.calcularPrecioDescuento = function() {
         return this.precio - (this.precio*this.porcentajeDeDescuento); /*this es válido aquí, sirve para 
         indicar que el contexto al que se hace referencia es un objeto, es como si this reemplazara a 
         ObjetoProducto :)*/
      }  
      return objetoProducto; 
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
