import _ from 'underscore';

// export const miNombre = 'Denilson Lopez';

/**
 * esta funcion crea un nuevo deck
 * @param {array<string>} tiposDeCarta Ejemplos ['C','D','H','S']
 * @param {array<string>} tiposEspeciales Ejemplos ['A','J','Q','K']
 * @returns {array<String>} retona un nuevo deck de cartas 
 */
 export const crearDeck = (tiposDeCarta, tiposEspeciales ) => {

 if (!tiposDeCarta || tiposDeCarta.lengh > 0) throw new Error('TiposDeCarta es obligatorio como un arrglo de strings'); 
 if (!tiposEspeciales || tiposEspeciales.lengh > 0) throw new Error('tiposEspeciales es obligatorio como un arrglo de strings'); 

let deck  = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    //console.log( deck );
    return deck;
}

// export default crearDeck;