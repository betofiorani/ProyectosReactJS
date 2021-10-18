export const seleccionPalabra = (tematicaElegida,palabrasDisponibles) => {
    
    const cantidadPalabras = palabrasDisponibles[tematicaElegida].length;
    let ramdomIndex = Math.floor(Math.random()*cantidadPalabras)
    const palabraSeleccionada = palabrasDisponibles[tematicaElegida][ramdomIndex]['palabra'];
    return palabraSeleccionada.toUpperCase()
    
}

export const estaEnPalabra = (letra, palabraSeleccionada) =>{

    let cantidadAciertos = palabraSeleccionada && palabraSeleccionada.split('').filter(letraPalabra => {
        return letraPalabra === letra
    }).length

    
    return cantidadAciertos && cantidadAciertos >0 ? true : false

}