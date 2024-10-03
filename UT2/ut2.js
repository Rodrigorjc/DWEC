

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

function ejercicio3(){
    let alumnos = [
        { nombre:"Juan", nota:"7.8" },
        { nombre:"Maria", nota:"4.29" },
        { nombre:"Alberto", nota:"10" },
        { nombre:"Rosa", nota:"0.54" },
    ];
    let container = document.getElementById('alumnos-div');
    alumnos.forEach(alumno => {
        let alumnoDiv = document.createElement('div');
        alumnoDiv.textContent = `Nombre: ${alumno.nombre}, Nota: ${alumno.nota}`;
        container.appendChild(alumnoDiv);
    });
    let nombreAlumno = prompt("Introduce el nombre de un alumno:");
    let alumno = alumnos.find(s => s.nombre.toLowerCase() === nombreAlumno.toLowerCase());
    if (alumno){
        alert("La nota de ${alumno.nombre} es ${alumno.nota}");
    } else {
        var nota = parseFloat(prompt("Una nota para el alumno:"));
        while (nota< 0 || nota > 10){
            var nota = parseFloat(prompt("Una nota para el alumno:"));
        }
        alumnos.push({nombre: nombreAlumno, nota: nota})
        alert("Alumno ${nombreAlumno} añadido con la nota ${nota}");
    }
}