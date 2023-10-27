/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
    var sw = 0
    var newCad = nombre.split("")
    
    if(sw == 0){
        var ini = newCad[0].toUpperCase();
        newCad[0] = ini;
        sw = 1
    }
    var unir = newCad.join("")
    return unir;
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   var call = cb();
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   var result = cb(num1, num2)
   return result;
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   var len = arrayOfNumbers.length;
   var sum = 0;
   for(var i = 0; i < len; i++ ){
      sum = sum + arrayOfNumbers[i] 
   }
   cb(sum);
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   var len = array.length;
   for(var i = 0; i < len; i++ ){
      cb(array[i]);
   }
   
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   var len = array.length;
   var newArray = [];
   for(var i = 0; i < len; i++ ){
     var res = cb(array[i]);
     newArray[i] = res
   }
   return newArray;
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var len = arrayOfStrings.length;
   var newArray = [];
   var cont = 0;
    for(var i = 0; i < len; i++){
       if(arrayOfStrings[i].substring(0, 1) == 'a'){
          newArray[cont] = arrayOfStrings[i]
          cont = cont + 1; 
      } 
   }
   return newArray;
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
