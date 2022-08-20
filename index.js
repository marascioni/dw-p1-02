/*
1- Calcular e informar un sueldo sabiendo que:

La categoria define el sueldo basico mensual (1: u$s 1000, 2: u$s 1500, 3: u$s 2000)
La subcategoria define el multiplicador (A: x1.5, B: x2, C: x2.5)
Ambos datos son ingresados por el usuario
3- Informar dentro de que rango esta el sueldo:

Rango inicial: entre u$s 1500 inclusive y u$s 3000 inclusive
Rango intermedio: entre u$s 3000 exclusive y u$s 4000 inclusive
Rango avanzado: si supera los u$s 4000

*/

var categoria;
var subCategoria;
var sueldoBasico;
var multiplicador;
var flag = 1;

do{
   categoria = prompt("Ingrese la categoría: (1 - 2 - 3) "); 
} while (categoria!="1"&& categoria!="2" &&categoria!="3" )



switch (categoria) {
    case '1':
        sueldoBasico = 1000;
        break;
    case '2':
        sueldoBasico = 1500;
        break;
    case '3':
        sueldoBasico = 2000;
        break;
    default:
        flag = 0;
        break;
}

if (flag) {
    do{
       subCategoria = prompt("Ingrese la subcategoría: (A - B - C) "); 
    } while (subCategoria!="A" && subCategoria!="B" && subCategoria!="C")
    
    flag = 1;
    switch (subCategoria) {
        case 'A':
            multiplicador = 1.5;
            break;
        case 'B':
            multiplicador = 2;
            break;
        case 'C':
            multiplicador = 2.5;
            break;
        default:
            flag = 0;
            break;
    }
    if (flag) {
        if (sueldoBasico * multiplicador >= 1500 && sueldoBasico * multiplicador < 3000) {
            document.write("<h2>rango inicial</h2>");
        } else if(sueldoBasico * multiplicador >= 3000 && sueldoBasico * multiplicador < 4000){
            document.write("<h2>rango intermedio</h2>");
        } else if(sueldoBasico * multiplicador >= 4000){
            document.write("<h2>rango avanzado</h2>");
        }
    }
}

