// PRACTICAR VECTORES

var vector = [1, 2, 3, 4, 5];

console.log(vector); // Me imprime el vector completo

/*----------------------------------------------------------

    ORDENAR DE MENOR A MAYOR, SIN REEMPLAZAR EL ORIGINAL
    Solo con bucles for.

------------------------------------------------------------*/

var vector1 = [5, 3, 1, 4, 2]; // VECTOR
var vectorOrdenado = []; // VECTOR AUXILIAR

// PASAR MI VECTOR PRINCIPAL AL AUXILIAR
for (var i = 0; i < vector1.length; i++) {
  vectorOrdenado[vectorOrdenado.length] = vector1[i];
}

// ORDENAR VECTOR AUXILIAR

for (var i = 0; i < vectorOrdenado.length; i++) {
  for (var j = 0; j < vectorOrdenado.length - 1; j++) {
    if (vectorOrdenado[j] > vectorOrdenado[j + 1]) {
      aux = vectorOrdenado[j];
      vectorOrdenado[j] = vectorOrdenado[j + 1];
      vectorOrdenado[j + 1] = aux;
    }
  }
}

// AMBOS VECTORES, DESORDENADO Y ORDENADO

console.log(vector1);
console.log(vectorOrdenado);

/**
 *
 * MOSTRA CADA FRUTA EN CONSOLA USANDO UN BUCLE
 *
 */

let frutas = ["manzana", "banana", "pera", "uva"];

for (i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

/**
 *
 *  ENCONTRAR EL NÚMERO MÁS GRANDE
 *
 */

let numeros = [12, 5, 78, 23, 1, 90, 34];
let nMayor = 0;

for (i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
  if (nMayor < numeros[i]) {
    nMayor = numeros[i];
  }
}

console.log(nMayor);

/**
 *
 * FILTRAR NUMEROS PARES DE UN ARRAY
 *
 */

let numeros1 = [3, 8, 15, 20, 7, 10, 22];
let numerosPares = [];

for (var i = 0; i < numeros1.length; i++) {
  if (numeros1[i] % 2 == 0) {
    numerosPares[numerosPares.length] = numeros1[i];
  }
}

console.log(numerosPares);

/**
 *
 *  CONTAR CUANTAS VECES APARECE LA LETRA "a".
 *  Extra: Hacer que funcione con cualquier letra.
 *
 */

let letras = ["a", "b", "a", "c", "a", "b", "d"];
let letraABuscar = "b";
let contador = 0;

for (let i = 0; i < letras.length; i++) {
  if (letras[i] == letraABuscar) {
    contador++;
  }
}

console.log("Hay una cantidad de: " + contador);

/**
 *
 *  GENERAR UN NUEVO ARRAY SIN VALORES DUPLICADOS
 *
 */

let vecOri = [1, 2, 3, 2, 4, 1, 5, 3];
let vecAuxi = [];

console.log(vecAuxi.length);
console.log(vecAuxi[vecAuxi.length - 1]);

// Nuevo array sin valores duplicados

// RECORRO EL ARRAY ORIGINAL
for (let i = 0; i < vecOri.length; i++) {
  // SI LA PRIMER POSICIÓN ESTÁ VACIA LA CARGO DIRECTAMENTE
  if (vecAuxi[0] == undefined) {
    vecAuxi[0] = vecOri[i];
  }

  // SI NO, RECORRO EL ARRAY AUXILIAR PARA VER SI EL VALOR YA ESTÁ CARGADO
  else {
    for (let j = 0; j < vecAuxi.length; j++) {
      // SI EL VALOR YA ESTÁ CARGADO, ROMPO EL BUCLE
      if (vecOri[i] == vecAuxi[j]) {
        break;
      }

      // SI LLEGO AL FINAL DEL ARRAY AUXILIAR Y NO ENCUENTRO EL VALOR, LO CARGO
      else if (j == vecAuxi.length - 1) {
        vecAuxi[vecAuxi.length] = vecOri[i];
      }
    }
  }
}

console.log(vecOri);
console.log(vecAuxi);

// Dame un ejercicio para praticar con vectores, por favor.

vectorPrueba = [10, 20, 30, 40, 50];

// Escribe un código que imprima el doble de cada número en el vectorPrueba.

for (let i = 0; i < vectorPrueba.length; i++) {
  vectorPrueba[i] = vectorPrueba[i] * 2;
}

console.log(vectorPrueba);

// DETECTAR EN QUE POSICIÓN ESTA LA PALABRA "PERA" EN EL VECTOR DE FRUTAS
let frutas1 = ["manzana", "banana", "pera", "uva"];
let posicion = 0;
for (let i = 0; i < frutas1.length; i++) {
  if (frutas1[i] === "pera") {
    posicion = i;
  }
}

console.log(posicion);

// CUANTAS LETRAS TIENE LA PALABRA "BANANA"

let palabra = "banana";
let cantidadLetras = 0;

for (let i = 0; i < palabra.length; i++) {
  cantidadLetras++;
}

console.log(palabra.length);

// DADO UN ARRAY DE FRUTAS, CREAR OTRO ARRAY CON LA LONGITUD DE CADA FRUTA

let frutas2 = ["manzana", "banana", "pera", "uva"];
let longitudes = [];

for (let i = 0; i < frutas2.length; i++) {
  longitudes[longitudes.length] = frutas2[i].length;
}

console.log(longitudes);

// DADO UN STRING CAMBIA TODAS LAS VOCALES A MAYUSCULA

let texto = "hola mundo";
let textoModificado = "";
let auxTemp = [];

for (let i = 0; i < texto.length; i++) {
  if (
    texto[i] === "a" ||
    texto[i] === "e" ||
    texto[i] === "i" ||
    texto[i] === "o" ||
    texto[i] === "u"
  ) {
    auxTemp[auxTemp.length] = texto[i].toUpperCase();
    console.log(auxTemp);
  } else {
    auxTemp[auxTemp.length] = texto[i];
  }
}

textoModificado = auxTemp.join("");

console.log(texto);
console.log(textoModificado);

/**
 *
 *  CONTAR CUANTAS PALABRAS LARGAS HAY (CON MÁS DE 5 LETRAS).
 *
 */

let palabras3 = [
  "uva",
  "oro",
  "casa",
  "auto",
  "ornitorrinco",
  "heladera",
  "baldosa",
  "azul",
  "lapicera",
];
let contador3 = 0;
let cualesSon = [];

for (let i = 0; i < palabras3.length; i++) {
  if (palabras3[i].length > 5) {
    contador3++;
    cualesSon[cualesSon.length] = palabras3[i];
  }
}

console.log(contador3);
console.log(cualesSon);

/**
 *
 * PECADOS CAPITALES.
 * LISTAR LOS PODERES DE HABILIDAD MÁS ALTOS, Y MÁS BAJOS, JUNTO CON SU NOMBRE Y SU CLAN.
 *
 */

let sevenOrigin_pA = [
  [142000, "MELIODAS", "DEMONIO"],
  [70000, "ELIZABETH", "ANGEL"],
  [45000, "KING", "HADA"],
  [46000, "ZELDRIS", "DEMONIO"],
  [200000, "ESCANOR", "PECADO CAPITAL"],
  [90000, "MERLIN", "PECADO CAPITAL"],
  [30, "HAWK", "PURGATORIO"],
];

let auxpA_Ordenado = [];
let pA_masAlto = [];
let pA_masBajo = [];

/**
 *
 * 1. RECORRER MATRIZ.
 * 2. ORDENARLA DE MENOR A MAYOR (O MAYOR A MENOR, DA IGUAL) EN UNA MATRIZ AUXILIAR.
 * 3. TOMAR EL MENOR PUNTAJE DE ATAQUE Y GUARDARLO.
 * 4. TOMAR EL MAYOR PUNTAJE DE ATAQUE Y GUARDARLO.
 * 5. MOSTRAR AMBOS DETALLADAMENTE.
 */

// RECORRO LA MATRIZ Y LA PASO A UNA AUXILIAR (PARA NO MODIFICAR LA ORIGINAL).
for (let i = 0; i < sevenOrigin_pA.length; i++) {
  auxpA_Ordenado[auxpA_Ordenado.length] = sevenOrigin_pA[i];
}

// ORDENO LA MATRIZ DE MENOR A MAYOR, COMPARANDO EL PUNTAJE DE CADA PERSONAJE.
for (let i = 0; i < auxpA_Ordenado.length; i++) {
  for (let j = 0; j < auxpA_Ordenado.length - 1; j++) {
    if (auxpA_Ordenado[j][0] > auxpA_Ordenado[j + 1][0]) {
      let auxPuntaje = auxpA_Ordenado[j];
      auxpA_Ordenado[j] = auxpA_Ordenado[j + 1];
      auxpA_Ordenado[j + 1] = auxPuntaje;
    }
  }
}

// TOMO EL VALOR MÁS BAJO Y EL MÁS ALTO.
pA_masBajo = auxpA_Ordenado[0];
pA_masAlto = auxpA_Ordenado[auxpA_Ordenado.length - 1];

console.log(auxpA_Ordenado);
console.log(
  "El PowerAttack más bajo es: " + pA_masBajo[0] + ", y pertenece a ",
);
console.log(pA_masAlto);

/**
 *
 *
 *  Tomar numeros pares de la matriz.
 *
 *
 */

let matriz1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let aux_vec = [];

// RECORRO LA MATRIZ

for (let i = 0; i < matriz1.length; i++) {
  for (let j = 0; j < matriz1.length; j++) {
    console.log(matriz1[i][j]);
    if (matriz1[i][j] % 2 === 0) {
      aux_vec[aux_vec.length] = matriz1[i][j];
    }
  }
}

console.log(aux_vec);
