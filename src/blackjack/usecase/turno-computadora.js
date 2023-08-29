// import { transformWithEsbuild } from "vite";
import { pedirCarta, valorCarta } from "./";
import { crearCartaHTML } from "./crear-carta";


/**
 * 
 * @param {number} puntosMinimos puntos minimos que la computadora neceista para ganar 
 * @param {HTMLElement} puntosHTML Elementos HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadoraElementos HTML para mostrar las cartas
 * @param {Array<String>} deck
 */


export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora,  deck = [] ) => {
    if(!puntosMinimos) throw new Error('puntosMinimos son necesarios');
    if(!deck) throw new Error('El deck es necesarios');
let puntosComputadora = 0 ;
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">

      //To Do : crear carta 
const imgCarta =  crearCartaHTML(carta)
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
