

function ejercicio1() {
   var frase = prompt("Introduce una frase");
   fraseI(frase);
   while (frase.split(" ").length < 5) {
        var frase = prompt("Introduce una frase");
        fraseI(frase);
    }
}

function fraseI(frase){
    let fraseSinEspacios = frase.replace(/ /g, "");
        let caracteres = fraseSinEspacios.length;
        console.log("La frase tiene " + caracteres + " caracteres");
        let fraseSinVocales = frase.replace(/[aeiou]/ig, "*");
        console.log(fraseSinVocales);
        let fraseElementosPar = "";
        let contador = 0;
        for (let i = 0; i < frase.length; i++) {
            if (frase[i] !== " "){
                contador++;
                if(contador % 2 === 0){
                    fraseElementosPar += "_"
                } else {
                    fraseElementosPar += frase[i];
                }
            } else {
                fraseElementosPar += " ";
            }
        }
        console.log(fraseElementosPar);
}

function ejercicio2() {
    let palabras = []
    for (let i = 0; i < 7; i++){
        let palabra = prompt("Introduce una palabra:")
        palabras.push(palabra);
    }
    
    palabras = palabras.filter(palabra => palabra.length > 4);
    palabras = palabras.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    console.log(palabras);

    nuevaPablara = prompt("Introduce una palabra para comprobar que esta en las palabras anteriores:")
    let encontrada = palabras.some(palabra => palabra.toLowerCase() === nuevaPablara.toLowerCase());
    if(encontrada){
        console.info("La palabra esta en la lista de palabras anterior")
    } else {
        palabras.push(nuevaPablara);
        palabras = palabras.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        console.log(palabras);
    }
}




let alumnos = [
    { nombre:"Juan", nota:7.8 },
    { nombre:"Maria", nota:4.29 },
    { nombre:"Alberto", nota:10 },
    { nombre:"Rosa", nota:0.54 },
];

function ejercicio3(){
    let listaAlumnos = alumnos.map(alumno => `${alumno.nombre}: ${alumno.nota}`);
    alert("Alumnos registrados:" + listaAlumnos.join(", "));
    let nombre = prompt("Introduce el nombre del estudiante:").trim();
    let alumnoEncontrado = alumnos.find(alumno => alumno.nombre.toLowerCase() === nombre.toLowerCase());
    if (alumnoEncontrado) {
        alert(`La nota de ${alumnoEncontrado.nombre} es ${alumnoEncontrado.nota}`);
    } else {
        let nuevaNota = obtenerNota();
        alumnos.push({nombre: nombre, nota: nuevaNota});
        alert(`${nombre} ha sido registrado con una nota de ${nuevaNota}`);
    }
    let totalNotas = alumnos.reduce((sum, alumno) => sum + alumno.nota, 0);
    let notaMedia = (totalNotas / alumnos.length).toFixed(2);
    console.info(`La nota media de la clase es: ${notaMedia}`);
    let nombresOrdenados = alumnos.map(alumno => alumno.nombre).sort();
    alert("Alumnos ordenados alfabéticamente:\n" + nombresOrdenados.join("\n"));
}

function obtenerNota(){
    let nota;
    do {
        nota = parseFloat(prompt("Introduce la nota del estudiante (entre 0 y 10):").trim());
    } while (isNaN(nota) || nota < 0 || nota > 10);
    return parseFloat(nota.toFixed(2));
}


function ejercicio4() {
    let multiplosDe2 = [];
    let multiplosDe3 = [];
    
    for (let i = 0; i <= 30; i++) {
        if (i % 2 === 0) multiplosDe2.push(i);
        if (i % 3 === 0) multiplosDe3.push(i);
    }
    let union = [];
    for (let i = 0; i <= 30; i++) {
        if (multiplosDe2.includes(i) || multiplosDe3.includes(i)) {
            union.push(i);
        }
    }
    let interseccion = [];
    for (let i = 0; i <= 30; i++) {
        if (multiplosDe2.includes(i) && multiplosDe3.includes(i)) {
            interseccion.push(i);
        }
    }
    let diferencia1 = [];
    for (let i = 0; i <= 30; i++) {
        if (multiplosDe2.includes(i) && !multiplosDe3.includes(i)) {
            diferencia1.push(i);
        }
    }
    let diferencia2 = [];
    for (let i = 0; i <= 30; i++) {
        if (multiplosDe3.includes(i) && !multiplosDe2.includes(i)) {
            diferencia2.push(i);
        }
    }
    let exclusion = [];
    for (let i = 0; i <= 30; i++) {
        if ((multiplosDe2.includes(i) || multiplosDe3.includes(i)) && !(multiplosDe2.includes(i) && multiplosDe3.includes(i))) {
            exclusion.push(i);
        }
    }
    alert("Mira el log para ver el resultado");
    console.log("Resultado de la unión de ambos conjuntos:", union);
    console.log("Resultado de la intersección de ambos conjuntos:", interseccion);
    console.log("Resultado de la diferencia del primero menos el segundo:", diferencia1);
    console.log("Resultado de la diferencia del segundo menos el primero:", diferencia2);
    console.log("Resultado de la exclusión de los elementos que pertenecen a ambos conjuntos:", exclusion);
}

function pedirNumeros() {
    let numeros;
    while (true) {
        let entrada = prompt("Introduce una serie de números separados por comas:");
        numeros = entrada.split(",").map(num => num.trim());
        let todosNumericos = numeros.every(num => !isNaN(num) && num !== "");
        if (todosNumericos) {
            numeros = numeros.map(num => parseFloat(num));
            break;
        } else {
            alert("Por favor, introduce solo valores numéricos.");
        }
    }
    return numeros;
}

function calcularValoresUnicosYMedia(numeros) {
    let conteo = {};
    numeros.forEach(num => {
        conteo[num] = (conteo[num] || 0) + 1;
    });

    let valoresUnicos = numeros.filter(num => conteo[num] === 1);
    let suma = valoresUnicos.reduce((acc, num) => acc + num, 0);
    let media = valoresUnicos.length > 0 ? (suma / valoresUnicos.length) : 0;

    return { valoresUnicos, media };
}

function ejercicio5() {
    let numeros = pedirNumeros();
    let { valoresUnicos, media } = calcularValoresUnicosYMedia(numeros);

    alert("Valores únicos: " + valoresUnicos.join(", "));
    alert("Media de los valores únicos introducidos: " + media);
}


function esPalindromo(frase) {
    let fraseNormalizada = frase
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-zñ]/g, "");

    let fraseReversa = fraseNormalizada.split("").reverse().join("");
    return fraseNormalizada === fraseReversa;
}

function ejercicio6() {
    let frase = prompt("Introduce una frase o palabra:");
    if (esPalindromo(frase)) {
        alert("La frase o palabra es un palíndromo.");
    } else {
        alert("La frase o palabra no es un palíndromo.");
    }
}

let tareas = [];

function agregarTarea() {
    let tarea = prompt("Introduce la nueva tarea:");
    if (tarea && !tareas.some(t => t.nombre === tarea)) {
        tareas.push({ nombre: tarea, completada: false });
        alert("Tarea agregada.");
    } else {
        alert("La tarea ya existe o no es válida.");
    }
}

function completarTarea() {
    let tarea = prompt("Introduce la tarea a completar:");
    let tareaEncontrada = tareas.find(t => t.nombre === tarea);
    if (tareaEncontrada) {
        tareaEncontrada.completada = true;
        alert("Tarea completada.");
    } else {
        alert("Tarea no encontrada.");
    }
}

function eliminarTarea() {
    let tarea = prompt("Introduce la tarea a eliminar:");
    let indice = tareas.findIndex(t => t.nombre === tarea);
    if (indice !== -1) {
        tareas.splice(indice, 1);
        alert("Tarea eliminada.");
    } else {
        alert("Tarea no encontrada.");
    }
}

function mostrarLista() {
    if (tareas.length === 0) {
        alert("No hay tareas.");
    } else {
        let lista = tareas.map(t => `${t.nombre} - ${t.completada ? "Completada" : "Pendiente"}`).join("\n");
        alert("Lista de tareas:\n" + lista);
    }
}

function mostrarPendientes() {
    let pendientes = tareas.filter(t => !t.completada);
    if (pendientes.length === 0) {
        alert("No hay tareas pendientes.");
    } else {
        let lista = pendientes.map(t => t.nombre).join("\n");
        alert("Tareas pendientes:\n" + lista);
    }
}