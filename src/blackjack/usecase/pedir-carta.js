 /**
  * Esta funcion me permite pedir una carta
  * @param {Array<string>} deck es un arreglo de strings
  * @returns {String} return una carta de deck  
  */

export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}