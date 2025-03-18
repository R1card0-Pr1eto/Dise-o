console.log("Vinculado correctamente...");

// Ejercicio 1: Declaración de variables
// Instrucciones: Declara dos variables numéricas llamadas 'ahora' y 'fecha_nac'.
// Luego, calcula y muestra en un mensaje la edad actual basada en el año de nacimiento.

function declararVariables() {
    let ahora;
    do {
        ahora = parseInt(prompt("Ingrese el año actual:"));
    } while (isNaN(ahora)); 

    let fecha_nac;
    do {
        fecha_nac = parseInt(prompt("Ingrese su año de nacimiento:"));
    } while (isNaN(fecha_nac)); 

    let edad = ahora - fecha_nac;

    alert("Tu edad actual es: " + edad);
}
// Ejercicio 2: Asignación de valores
// Instrucciones: Completa la función para asignar el valor de 'var1' a 'var2' y luego muestra el valor de 'var2'.

function asignarValores() {
    let var1 = parseInt(prompt("Ingrese un número: "));
    let var2 = var1; // Asignamos el valor de var1 a var2

    alert("El valor de var2 es: " + var2);
}

// Ejercicio 3: Operaciones matemáticas
// Instrucciones: Completa la función para realizar las siguientes operaciones:
// Suma 'num1','num2' y 'num3', resta 'num1' de 'num3', multiplica 'num2' por 'num3', y divide 'num1' entre '120'.
// Además, resta 2025 con el número ingresado en 'asignarValores()'.
// Muestra los resultados en un mensaje.


function realizarOperaciones() {

    let num1 = parseInt(prompt("Ingrese el primer número:"));
    let num2 = parseInt(prompt("Ingrese el segundo número:"));
    let num3 = parseInt(prompt("Ingrese el tercer número:"));

    let suma = num1 + num2 + num3;
    let resta = num3 - num1;
    let multiplicacion = num2 * num3;
    let division = num1 / 120;

    alert("Resultado de la suma: " + suma +
        "\n Resultado de la resta (num3 - num1): " + resta + 
        "\n Resultado de la multiplicación: " + multiplicacion +
        "\n Resultado de la división (num1 / 120): " + division +
        "\n Resultado de la resta con 2025: " + resultadoResta);
}

// Ejercicio 4: Manipulación de cadenas
// Instrucciones: Completa la función para construir un mensaje utilizando las variables 'direccion' y 'n_casa'.
// Luego, muestra la longitud del mensaje y el antepenúltimo carácter en el mensaje.

function manipularCadenas() {
    let direccion = prompt("Ingrese su dirección:");
    let n_casa = prompt("Ingrese el número de casa:");

    let mensaje = "Vivo en " + direccion + " número " + n_casa;
    let longitud = mensaje.length;
    let antepenultimo = mensaje[mensaje.length - 3];  // Obtiene el antepenúltimo carácter

    alert("Mensaje: " + mensaje +
    "\n Longitud del mensaje: " + longitud + 
    "\n Antepenúltimo carácter: " + antepenultimo);
}