let nombre = 'Jab';
const CANAL = "HTML6";
let fecha = new Date();
let numero = 3;
let euros=100;

let mensaje = `Me llamo ${nombre}, mi canal es ${CANAL} y estamos en el año ${fecha.getFullYear()} y despues del numero ${numero} viene el numero ${++numero} y el valor de ${euros}€ equivalen a ${convertir(euros)}  pesos mexicanos`;
alert(mensaje);

function convertir(a){
    let resultado= a * 22.23;
    return resultado;
}

// ///////////////////////////
// ///////////////////////////

// EQUIVALENTE EN PHP8

// <?php
// $nombre = 'Jab';
// const CANAL = "HTML6";
// $fecha = new DateTime();
// $numero = 3;
// $euros = 100;

// function convertir($a){
//     $resultado = $a * 22.23;
//     return $resultado;
// }

// $mensaje = "Me llamo $nombre, mi canal es " . CANAL . " y estamos en el año " . $fecha->format('Y') . " y después del número $numero viene el número " . ++$numero . " y el valor de $euros€ equivale a " . convertir($euros) . " pesos mexicanos";
// echo $mensaje;
// ?>

