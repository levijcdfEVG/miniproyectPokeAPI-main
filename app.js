
/**
 * Ejercicio 1: Buscar y mostrar información del Pokemon con FETCH
 */
/**
 * Función para buscar pokemon ejercicio 1 y 2.
 * 
*/
let pokemonABuscar = document.getElementById("pokemon-input").value;
let botonBusqueda = document.getElementById('search-btn');
botonBusqueda.addEventListener('click', () => {
    let nombrePokemon = pokemonABuscar.toLowerCase();
    let url = "https://pokeapi.co/api/v2/pokemon/"+nombrePokemon;
    console.log(buscarPokemon(url));
});

async function buscarPokemon(url){
    try {
        // Realiza la solicitud fetch y espera la respuesta
        const respuesta = await fetch(url);
        
        // Verifica si la respuesta es exitosa
        if (!respuesta.ok) {
            throw new Error('Error en la red: ' + respuesta.status);
        }

        // Convierte la respuesta a JSON
        const datos = await respuesta.json();

        //Devolver el json
        return datos;

    } catch (error) {
        console.error('Hubo un problema con la solicitud fetch:', error);
    }


}
    

/**
 *  Descomentar para hacer uso de la función.
 */
//document.getElementById('search-btn').addEventListener('click',buscarPokemon);


/**
 * Ejercicio 3: buscar pokemon con JQuery AJAX.
 */

function buscarPokemonJQueryAJAX(){
    /**
     * Tu código aquí.
     */
}

/**
 * Haciendo uso de JQuery, descomentar para usar la función buscarPokemonJQueryAJAX
*/
/**
$(document).ready(function(){
    $('#search-btn').on('click', buscarPokemonJQueryAJAX);
}); 
*/


