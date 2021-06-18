//---------------------------------
//             SECCIÓN 3             
//---------------------------------
/* console.log("Hola Mundo");

// De F a C

let c; 
let f = 90;

//c = (f-32)*(5/9);

c = f-32;
c = c * (5/9);
console.log(c);

// C a F

let f;
let c = 32

f= c*(9/5) + 32
console.log(f)

// C a K
let k;
let c = 32;

k = c + 273.15
console.log(k)

// F a K
let k;
let f= 90;

k = (f-32)*(5/9) + 273.15
console.log(k) */

//---------------------------------
//             SECCIÓN 4             
//---------------------------------
// TypeScript
// let nombreVariable :tipoDato = 85;
// let promedioNotas :number=85;
// let nombre:string="Claudia Soto";
// let feo:boolean=false;

// Recomendación
// El nombre para una variable de tipo booleana debe leerse en positivo.
// let activo = true;

/* EJEMPLO PRÁCTICO: TIPOS DE DATOS */
/* let nombre = 'Estefanía';
let apellido = 'Garcés Pérez';
let nombreCompleto = nombre + ' ' +apellido;
console.log(nombreCompleto); */

/* let a = '10'; // str
let b = '20'; // str
console.log(a+b); // str 1020 */

/* let a = 10; // int
let b = 20; // int
console.log(aa+bb); // int 30 */

/* let activo = true; //1
let despedido = false; //0
console.log(activo + despedido); // 1 */

/* let activo = 'true'; //str
let despedido = false; //boolean
console.log(activo + despedido); // str truefalse, despedido pasa a ser automáticamente str para que se pueda concatenar. */

// NaN = Not-A-Number: el valor especificado en el parámetro no puede ser parseado como un número.


/* ESTRUCTURA DE DATOS */

// DE CONTROL: permiten poder indicarle a la computadora qué acción debe realizar y qué flujo seguir, dependiendo de condiciones y/o decisiones.

/* if(expresión)
    (condición)
   else
    (condición)*/

// Switch: permite realizar múltiples  decisiones de forma limpia y eficiente.

/* switch (variable o expresión a evaluar) 
    case1:'Hoy es lunes';
        break;
    case2:'Hoy es martes';
        break;
    case3:'Hoy es miércoles';
        break;
    default: 'Hoy no es ni lunes, ni martes, ni miércoles.'; 
*/

/* EJEMPLO PRÁCTICO DE ESTRUCTURAS DE CONTROL IF */

/* 

Crear un algoritmo que, basado en la nota, 
imprima si el alumno aprueba la materia.

aprueba con 60 o más

*/

/* let nota = 60;
if(nota >=60){
    console.log('El alumno aprueba.');
}else{
    console.log('El alumno no aprueba.');
}

console.log('Fin del programa.'); */

/* 
Si el alumno tiene nota menor que 50, 
imprimir un mensaje que diga: por favor estudie más. 
*/

/* let nota = 49;
if(nota >=60){
    console.log('El alumno aprueba.');
}else{
    if (nota<50){
        console.log('Por favor estudie más.');
    }else{
        console.log('El alumno no aprueba.');
    }
}

console.log('Fin del programa.');  */

/* let nota = 49;

if(nota >=60){
    console.log('El alumno aprueba.');
}else if (nota < 50){
    console.log('Por favor estudie más.');
}else{
    console.log('El alumno no aprueba.');
}

console.log('Fin del programa.'); */

/* EJEMPLO PRÁCTICO IF - ELSE anidado */

/*
    Cree un algoritmo que permita determinar la
    calificación en letras de un alumno.

    Si la nota se encuentra entre 100 a 90 = A
    Si la nota se encuentra entre 80 a 89 = B
    Si la nota se encuentra entre 70 a 79 = C
    Si la nota se encuentra entre 60 a 69 = D
    Si la nota es inferior a 60 = F

*/

/* let nota = 20;
let notaLetra = '';

if(nota >= 90){
    notaLetra = 'A'
    console.log(nota +' es igual a: '+notaLetra);
}else if(nota >=80){
    notaLetra = 'B'
    console.log(nota +' es igual a: '+notaLetra);
}else if(nota >=70){
    notaLetra = 'C'
    console.log(nota +' es igual a: '+notaLetra);
}else if(nota >=60){
    notaLetra = 'D'
    console.log(nota +' es igual a: '+notaLetra);
}else{
    notaLetra = 'F'
    console.log(nota +' es igual a: '+notaLetra);
} */

// Switch

/* let dia = 1; // lunes, 2: martes, 3: miércoles, ect., 0 = domingo.
switch(dia){
    case 0:
        console.log('Es domingo.');
        break;
    case 1:
        console.log('Es lunes.');
        break;
    case 2:
        console.log('Es martes.');
        break;
    case 3:
        console.log('Es miércoles.');
        break;
    case 4:
        console.log('Es jueves.');
        break;
    case 5:
        console.log('Es viernes.');
        break;
    case 6:
        console.log('Es sabado.');
        break;
    default:
        console.log('No es válido.');
} */

/* Diferencias entre == y === */

// Doble igual: solo verifica igualdad de valores. Hace coerción de tipos inherentemente. (Verifica los valores, convierte los tipos de variables para que coincidan).
// Triple igual: no hace coerción de tipos. Vefifica que las variables que se están comparando tengan el mismo valor y el mismo tipo.


/* let dia = 1; // lunes, 2: martes, 3: miércoles, ect., 0 = domingo.
if(dia === 0){
    console.log('Es domingo.');
}else if(dia === 1){
    console.log('Es lunes.');
}else if(dia === 2){
    console.log('Es martes.');
}else if(dia === 3){
    console.log('Es miércoles.');
}else if(dia === 4){
    console.log('Es jueves.');
}else if(dia === 5){
    console.log('Es viernes.');
}else if(dia === 6){
    console.log('Es sabado.');
}else{
    console.log('No es válido.')
} */

/* CICLOS O LOOPS */
// Permiten ejercutar las mismas líneas de código una y otra vez de forma consecutiva.

/* Ciclo WHILE: es muy útil, cuando no se conece exactamente la cantidad de veces que se necesita ejecutar el código.
while(condición){
    (instrucciones)
} */

/* Ciclo FOR: es muy ítil cuando se sabe la cantidad de veces que se necesita ejecutar el código 
for(let variable = 1; variable <= 10; variable ++){
    (instrucciones)
} */

/* EJERCICIO PRÁCTICO - CICLO WHILE */
/* let gasolina = 100;

while(gasolina>0){
    gasolina--; // gasolina = gasolina - 1
    console.log('Gasolina restante: ' + gasolina);
}

console.log('Ya no tiene gasolina'); */

/* EJECICIO PRÁCTICO - CICLO FOR */
/* let base = 10;
let limite = 20;

for(let i = 1; i <= limite; i++){
    let resultado = base * i
    console.log(base +' x ' + i + ' = ' + resultado)
} */

//---------------------------------
//             SECCIÓN 5             
//---------------------------------

/* FUNCIONES */
// Conjunto de líneas de códifo que realizan una 
// tarea específica y pueden retornan algo.

/*
function saludar(){
    (instrucciones);
} 

saludar();*/

/* Parámetros o argumentos: algo que se le ingresa a la función para que trabaje con él.
function saludar(nombre){
    (instrucciones);
}

saludar('Estefanía');
*/

/* function sumar(a,b){ // sumar: nombre de la función, a y b son parárametros, el return a+b es el retorno de la función(lo que se obtine cuando la ejecución de la función termina), todo lo que esté entre llavaes es el cuerpo de la función.
    return a + b;
}

let total= sumar(10, 20);
console.log(total); */

/* EJERCICIOS BÁSICOS CON FUNCIONES */

/* function sumar(a,b) {
    return a+b;
}

let total = sumar(20,30);
console.log('El total es: '+total) */

/* SEPARANDO CÓDIGO EN FUNCIONES */

/* function tablaMultiplicar(base, limite) {
    for(let i = 1; i <= limite; i++){
        let resultado = base * i;
        console.log(base+' x ' + i + ' = ' + resultado);   
    }
}

let a = 2;
let b = 10;
tablaMultiplicar(a, b); */

/* TAREA PRÁCTICA SOBRE FUNCIONES */

// Crear una función que permita determinar la calificación
// de tres alumnos uno con nota de 100, otro con nota de 80
// y el último con nota de 59.

/* function calificacion(nota) {
    if(nota >= 90){
        notaLetra = 'A';
        console.log(nota +' es igual a: '+notaLetra);
    }else if(nota >=80){
        notaLetra = 'B';
        console.log(nota +' es igual a: '+notaLetra);
    }else if(nota >=70){
        notaLetra = 'C';
        console.log(nota +' es igual a: '+notaLetra);
    }else if(nota >=60){
        notaLetra = 'D';
        console.log(nota +' es igual a: '+notaLetra);
    }else{
        notaLetra = 'F';
        console.log(nota +' es igual a: '+notaLetra);
    }
}

let notaAlumno1 = 100;
let notaAlumno2 = 80;
let notaAlumno3 = 59;
calificacion(notaAlumno1);
calificacion(notaAlumno2);
calificacion(notaAlumno3); */

/* EXPLICACIÓN SOBRE LOS ARREGLOS - ARRAYS */
// Arreglo: conjunto de cosas similares.

/* Definiendo arreglos 
let SinFlores = [];
let flores = ['Rosa', 'Girasol', 'Lirio']; 
*/

/* Trabajar con elementos del arreglo 

let flores = ['Rosa', 'Girasol', 'Lirio'];
let primeraFlor = flores[0];
let segundaFlor = flores[1];
let terceraFlor = flores[2];
*/

/* EJERCICIO BÁSICO CON ARREGLOS */
/* let SinFlores = [];
console.log(SinFlores); */

/* let flores = ['Rosa', 'Girasol', 'Lirio'];
let primeraFlor = flores[0];
let segundaFlor = flores[1];
let terceraFlor = flores[2];

console.log(primeraFlor, segundaFlor, terceraFlor);
 */

/* EJERCICIO SOBRE ARREGLOS #2 */
/* let personas = ['Fernando', 'Estefanía', 'María'];
let salarios = [1000, 1200, 3000];

for(let i=0; i < personas.length; i++){
    console.log(personas[i]+' tiene un salario de '+salarios[i]);
} */

//---------------------------------
//             SECCIÓN 6             
//---------------------------------

/* EXPLICACIÓN SOBRE OBJETOS */
// Representación abstracta de una cosa en la vida real.
// Son variables que dentro de si tienen propiedades.

/* // Creando un objeto o diccionario x'D
let carros = {color: 'blanco', tracción: '4x4', llantas: 4, puertas: 2, marca: 'Mitsubishi'}

// Buena práctica para presentar el objeto
let carro = {
    color: 'blanco', 
    tracción: '4x4', 
    llantas: 4, 
    puertas: 2, 
    marca: 'Mitsubishi'
};
// Accediendo a los elementos del objeto y/o diccionario
console.log(carros.color, carro.llantas, carro.tracción);

if(carro.puertas===5){
    console.log('Camioneta');
}else{
    console.log('Turismo');
} */

/* EJERCICIO PRÁCTICO SOBRE OBJETOS */

/* function describirPersona(p){
    //console.log(p.nombre+' tiene una edad de '+p.edad+' y mide '+p.estatura);
    console.log(`${p.nombre} tiene una edad de ${p.edad} y mide ${p.estatura}`)
}

let personas = {
    nombre: 'Sara',
    edad: 12,
    estatura: 1.49
};

console.log(personas);
console.log('Nombre: '+personas.nombre);
console.log('Edad: '+personas.edad);
console.log('Estatura: '+personas.estatura);

describirPersona(personas)
 */

/* ARREGLOS DE OBJETOS */

/* s/n propia: function persona(p) {
                    console.log(`El nombre es ${p.nombre} y la edad es ${p.edad}`);
                } 
*/

/* let personaUno = {
    nombre: 'Miguel Ángel',
    edad: 26
};

let personaDos = {
    nombre: 'Estefanía',
    edad: 20
};

let personaTres = {
    nombre: 'Pepito',
    edad: 50
};

let personas = [personaUno, personaDos, personaTres];

console.log(personaUno);
console.log(personaDos);
console.log(personaTres);
console.log(personas);

for(let i=0; i < personas.length; i++){
    // s/n propia: persona(personas[i]);
    //s/n 1: let persona = personas[i]
    //       console.log(`${persona.nombre} -- ${persona.edad}`);
    
    // s/n 2: 
    console.log(`${personas[i].nombre} -- ${personas[i].edad}`);
} */

/* EXPLICACIÓN SOBRE LAS CLASES */

// Al igual que los objetos, pueden ser respresentaciones abstractas de cosas que existen en la vida real.

// class Galleta (Molde para hacer galletas)
// galletaUno = new Galleta(); (Llamo al molde para que hacer una galleta, por lo que el resultado es una galleta)
// galletaDos = new Galleta();

// class Galleta - propiedades: botones, sabor, fechaCreación (debería ser automática).
/* class Galleta{
    constructor(botones, sabor){ // Cuando se crea una nueva galleta variable ejecuta primero esta función
        this.botones = botones; //this: apunta a la misma clase, entonces this === Galleta, .botones, .sabor: propiedades de la clase; botones, sabor: valores para las propiedades.
        this.sabor = sabor;
        this.fechaCreacion = 'HOY';
    }
} */

// Métodos: funciones relacionadas a la clase y cualquier variable que sea una instancia de la clase tendrá esas funciones.
// Ejemplo con un carro de métodos: encenderCarro(), apagarCarro(), cambiarMarcha().
// Ejemplo con un carro de propiedades: numeroPuertas, numerollantas, color, marca.

// class Carro // Se crea la categoría Carro
// new Carro('SEDAN'); // Se crea un nuevo carro de tipo SEDAN.
// new Carro('JEEP'); // Se crea un nuevo carro de tipo JEEP.

/* EJERCICIO PRÁCTICO - CLASES*/

// Piden especificar carros, pero hace muy tedioso cuando son muchas propiedades y se tienen muchos carros, por ello se crearon las clases.

/* // Objetos
let carro0 = {
    marca: 'Toyota',
    tipo: 'Sedan',
    puertas: 3
};

let carro1 = {
    marca: 'Honda',
    tipo: 'Sedan',
    puertas: 3
};

let carro2 = {
    marca: 'Mazda',
    tipo: 'Sedan',
    puertas: 4
};

// Clase

class Carro{
    constructor(marca, tipo, puertas){
        this.marca = marca;
        this.tipo = tipo;
        this.puertas = puertas;
        this.creadoEn = 'hoy';
    }
}

let carro3 = new Carro('Maza', 'Sedan', 2); //new: se usa para crear nuevas instancias de algún objeto o de una clase.
 */

/* MÉTODOS DE CLASE*/

class Carro{
    constructor(marca, tipo, puertas){
        this.marca = marca;
        this.tipo = tipo;
        this.puertas = puertas;
        this.creadoEn = 'hoy';
        this.encendido = false;
        this.gasolina = 100;
    }

    encenderCarro(){ //Creando método, cuando se llame la función encender el carro.
        if (this.encendido=== false){
            this.encendido = true;
            console.log('El motor está encendido');
        }else{
            console.error('El carro ya está encendido.')
        }
        return this;
    }

    realizarViaje(consumo){
        if (!this.encendido) return console.error('No se puede viajar porque el carro está apagado');
        if (consumo>=this.gasolina) return console.error('No se puede viajar porque el consumo es mayor que la cantidad de gasolina');
        this.gasolina = this.gasolina - consumo;
        return 'Le queda ' + this.gasolina;
    }
}

let carro = new Carro('Maza', 'Sedan', 2);
console.log(carro)