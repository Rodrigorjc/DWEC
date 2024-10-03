function ejercicio1() {
    let numero1 = parseInt(prompt("Introduce un número"));
    let numero2 = parseInt(prompt("Introduce otro número"));
    
    let suma = numero1 + numero2;
    document.write("La suma de los números es: " + suma);
}

function ejercicio2() {
    let numero1 = parseInt(prompt("Introduce un número"));
    let numero2 = parseInt(prompt("Introduce otro número"));
    
    let mult = numero1 * numero2;
    document.write("La multiplicación de los números es: " + mult);
}

function ejercicio3() {
    let celsius =parseFloat(prompt("Introduce la temperatura en grados Celsius"));
    let fahrenheit = (celsius * 9/5) + 32;
    let kelvin = celsius + 273.15;
    document.write("Temperatura en grados centígrados: " + celsius + "°C<br>");
    document.write("Equivalente en grados Fahrenheit: " + fahrenheit + "°F<br>");
    document.write("Equivalente en grados Kelvin: " + kelvin + "K<br>");
}

function ejercicio4() {
    let lado1 = parseFloat(prompt("Introduce el primer lado del cuadrado"));
    let area = lado1 * lado1;
    document.write("El área del cuadrado es: " + area);
}

function ejercicio5() {
    let radio = parseFloat(prompt("Introduce el radio de la circunferencia"));
    let area = Math.PI * Math.pow(radio, 2);
    document.write("El área de la circunferencia es: " + area);
}

function ejercicio6() {
    let preciopantalon = parseFloat(prompt("Introduce el precio del pantalón"));
    let descuento = parseFloat(prompt("Introduce el descuento a aplicar"));
    let preciofinal = preciopantalon - (preciopantalon * descuento / 100);
    document.write("El precio final del pantalón es: " + preciofinal);
}

function ejercicio7() {
    let gasolina = parseFloat(prompt("Introduce el precio de la gasolina"));
    let hotel = parseFloat(prompt("Introduce el precio del hotel"));
    let restaurante = parseFloat(prompt("Introduce el precio del restaurante"));
    let total = gasolina + hotel + restaurante;
    let porcentagegasolina = gasolina * 100 / total;
    let porcentagehotel = hotel * 100 / total;
    let porcentagerestaurante = restaurante * 100 / total;
    document.write("Porcentaje de gasolina: " + porcentagegasolina + "%<br>");
    document.write("Porcentaje de hotel: " + porcentagehotel + "%<br>");
    document.write("Porcentaje de restaurante: " + porcentagerestaurante + "%<br>");
}

function ejercicio8() {
    let esnulo = parseFloat(prompt("Introduce un número"));
    if (esnulo == 0) {
        document.write("El número es nulo");
    } else {
        document.write("El número no es nulo");
    }
}

function ejercicio9() {
    let numero = parseFloat(prompt("Introduce un número"));
    if (numero > 0) {
        document.write("El número es positivo");
    } else if (numero < 0) {
        document.write("El número es negativo");
    } else {
        document.write("El número es nulo");
    }
}

function ejercicio10() {
    let numero = parseFloat(prompt("Introduce un número"));
    let numero1 = parseFloat(prompt("Introduce otro número"));
    let suma = numero + numero1;
    if (suma > 0) {
        document.write("La suma de los números es positiva");
    } else if (suma < 0) {
        document.write("La suma de los números es negativa");
    } else {
        document.write("La suma de los números es 0");
    }
}

function ejercicio11() {
    let numero = parseFloat(prompt("Introduce un número"));
    let numero1 = parseFloat(prompt("Introduce otro número"));
    if (numero + numero1 > 10 && numero * numero1 > 50) {
        document.write("Estos sí");
    } else {
        document.write("Estos no");
    }
}

function ejercicio12() {
    let edad = parseInt(prompt("Introduce tu edad"));
    if (edad >= 25 && edad <=45) {
        document.write("Nos vale");
    } else {
        document.write("No nos vale");
    }
}

function ejercicio13() {
    let numero = parseInt(prompt("Introduce un número"));
    let numero1 = parseInt(prompt("Introduce otro número"));
    let suma = numero + numero1;
    let resta = numero - numero1;
    let sumausuario = parseInt(prompt("Introduce la suma de los números"));
    let restausuario = parseInt(prompt("Introduce la resta de los números"));
    if (sumausuario == suma && restausuario == resta) {
        document.write("Muy bien")
    } else {
        document.write("Así no")
    }
}

function ejercicio14() {
    let mes = parseInt(prompt("Introduce el numero del mes"));
    if (mes >= 1 && mes <= 12){
        document.write("Correcto")
    } else {
        document.write("No es correcto")
    }
}

function ejercicio15() {
    let a = parseFloat(prompt("Introduce el coeficiente a"));
    let b = parseFloat(prompt("Introduce el coeficiente b"));
    let c = parseFloat(prompt("Introduce el coeficiente c"));
    let ecuacion = b * b - 4 * a * c;
    if (ecuacion < 0) {
        document.write("No tiene solución real");
    } else if (ecuacion === 0) {
        let x = -b / (2 * a);
        document.write("La ecuación tiene una raíz: " + x);
    } else {
        let x1 = (-b + Math.sqrt(ecuacion)) / (2 * a);
        let x2 = (-b - Math.sqrt(ecuacion)) / (2 * a);
        document.write("La ecuación tiene dos raíces: " + x1 + " y " + x2);
    }
}

function ejercicio16() {
     let dividendo = parseInt(prompt("Introduce el dividendo"));
     let divisor = parseInt(prompt("Introduce el divisor"));
     if (divisor === 0) {
         document.write("No se puede hacer la división");
     } else {
         let cociente = Math.floor(dividendo / divisor);
         let resto = dividendo % divisor;
         document.write("El cociente es: " + cociente + "<br>");
         document.write("El resto es: " + resto);
     }
}

function ejercicio17() {
    let base = parseFloat(prompt("Introduce la base"));
    let exponente = parseInt(prompt("Introduce el exponente"));
    let resultado;
    if (exponente === 0) {
        resultado = 1;
    } else {
        resultado = Math.pow(base, exponente);
    }    
    document.write("El resultado de " + base + " elevado a " + exponente + " es: " + resultado);

}

function ejercicio18() {
     let num1 = parseFloat(prompt("Introduce el primer número"));
     let num2 = parseFloat(prompt("Introduce el segundo número"));
     let num3 = parseFloat(prompt("Introduce el tercer número"));
      if (num1 > num2) {
        [num1, num2] = [num2, num1];
     }
     if (num1 > num3) {
        [num1, num3] = [num3, num1];
     }
     if (num2 > num3) {
        [num2, num3] = [num3, num2];
     }
      document.write("Los números ordenados de forma creciente son: " + num1 + ", " + num2 + ", " + num3);
}

function ejercicio19() {
    let base1 = parseFloat(prompt("Introduce la base del primer triángulo"));
    let altura1 = parseFloat(prompt("Introduce la altura del primer triángulo"));
    let base2 = parseFloat(prompt("Introduce la base del segundo triángulo"));
    let altura2 = parseFloat(prompt("Introduce la altura del segundo triángulo"));
    let base3 = parseFloat(prompt("Introduce la base del tercer triángulo"));
    let altura3 = parseFloat(prompt("Introduce la altura del tercer triángulo"));
    let area1 = 0.5 * base1 * altura1;
    let area2 = 0.5 * base2 * altura2;
    let area3 = 0.5 * base3 * altura3;
    let maxArea = area1;
    let maxBase = base1;
    let maxAltura = altura1;
    if (area2 > maxArea) {
        maxArea = area2;
        maxBase = base2;
        maxAltura = altura2;
    }
    if (area3 > maxArea) {
        maxArea = area3;
        maxBase = base3;
        maxAltura = altura3;
    }
    document.write("El triángulo con mayor área tiene:<br>");
    document.write("Base: " + maxBase + "<br>");
    document.write("Altura: " + maxAltura + "<br>");
    document.write("Área: " + maxArea);
}