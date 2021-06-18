//---------------------------------------------------------
//                      EJERCICIOS 
//---------------------------------------------------------



//---------------------------------------------------------
// 1. Convertir de Libras a Kilogramos
//---------------------------------------------------------

function lbKg(numero) {
    let kg = numero/2.20462;
    kg *= 100;
    kg = Math.round(kg);
    kg /= 100;
    return kg;
}

let libras = 160;
console.log(lbKg(libras));

//---------------------------------------------------------
// 2. Convertir de kilómetros a millas
//---------------------------------------------------------

function kmMi(numero) {
    let mi = numero/1.60934;
    mi *= 100;
    mi = Math.round(mi);
    mi /= 100;
    return mi;
}

let kilometros = 20;
console.log(kmMi(kilometros));

//---------------------------------------------------------
// 3. Calcule el área de un triangulo rectángulo
//---------------------------------------------------------
function areaTriangulo(h,b) {
    return b*h/2;
}

let base = 10;
let altura = 5;

console.log(areaTriangulo(altura, base));

//---------------------------------------------------------
// 4. Determinar ¿cuál es el número mayor en un arreglo?   
//---------------------------------------------------------
function numeroMayor(lista) {
    let mayor = lista[0];
    for(let i = 0; i < lista.length; i++){
        if (lista[i]>=mayor){
            mayor = lista[i];
        }
    }
    return mayor;
}

let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5];
console.log(numeroMayor(numeros));

//---------------------------------------------------------
// 5. Determinar ¿Números pares e impares?
//---------------------------------------------------------
function parImpar(numero) {
    if(numero%2==0) return console.log(`${numero} es número par.`);
    else return console.log(`${numero} es número impar.`);
}

let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5];
for(let i=0; i < numeros.length; i++){
    parImpar(numeros[i])
}

//---------------------------------------------------------
// 6. Realizar tabla de multiplicar
//---------------------------------------------------------
function tablaMultiplicar(limite) {
    let linea = '';
    for(let i = 1; i <=limite; i++){
        for(let j = 1; j<=limite; j++){
            linea += `${i*j} `;
        }
        console.log(linea);
        linea = '';
    }
}

console.log(tablaMultiplicar(5));

//---------------------------------------------------------
// 7. Crear una función que reciba 3 argumentos numéricos   
//---------------------------------------------------------

function max(a,b,c) {
    let mayor = a;
    if (b>mayor){
        mayor = b;
    }else if (c>mayor){
        mayor = c;
    }
    return mayor;
}

let numero = max(5,100,6);
console.log(numero); //6

//---------------------------------------------------------
// 8. Función para determinar el nombre más largo   
//---------------------------------------------------------
function nombreLargo(lista) {
    let mayor = '';
    for( let i = 0; i<lista.length; i++){

        let longitud = lista[i].length;
        if (longitud > mayor.length){
            mayor = lista[i];
        }

    }
    return mayor;
}

let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
let heroeLargo = nombreLargo(heroes);
console.log(heroeLargo);

//---------------------------------------------------------
// 9. Función para filtrar nombres   
//---------------------------------------------------------
function filtrarNombre(lista, letra) {
    let listaOrdenada = [];
    for( let i = 0; i<lista.length; i++){
        palabra = lista[i];
        if (palabra[0]===letra){
            listaOrdenada.push(palabra);
        }
    }
    return listaOrdenada;
}

let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
let heroesCon = filtrarNombre( heroes, 'D');

console.log(heroesCon)