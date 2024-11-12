'use strict';
/**
 * Ejercicio 1: Buscar y mostrar información del Pokemon con FETCH
 */

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

    return null;

}

function displayPokemonInfo(pokemonData) {
    // Obtén la referencia al contenedor donde se mostrará la información
    const pokemonDataDiv = document.getElementById('pokemon-data');
    // Limpia cualquier contenido previo
    pokemonDataDiv.innerHTML = '';
  
    // Crea elementos y agrega la información del Pokémon al DOM
    const nameHeader = document.createElement('h3');
    nameHeader.textContent = `Nombre: ${pokemonData.name}`;
    pokemonDataDiv.appendChild(nameHeader);
  
    const idParagraph = document.createElement('p');
    idParagraph.textContent = `ID: ${pokemonData.id}`;
    pokemonDataDiv.appendChild(idParagraph);
  
    const typeParagraph = document.createElement('p');
    const types = pokemonData.types.map(typeInfo => typeInfo.type.name).join(', ');
    typeParagraph.textContent = `Tipos: ${types}`;
    pokemonDataDiv.appendChild(typeParagraph);
  
    const abilitiesParagraph = document.createElement('p');
    const abilities = pokemonData.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ');
    abilitiesParagraph.textContent = `Habilidades: ${abilities}`;
    pokemonDataDiv.appendChild(abilitiesParagraph);
  
    const weightParagraph = document.createElement('p');
    weightParagraph.textContent = `Peso: ${pokemonData.weight}`;
    pokemonDataDiv.appendChild(weightParagraph);
  
    const heightParagraph = document.createElement('p');
    heightParagraph.textContent = `Altura: ${pokemonData.height}`;
    pokemonDataDiv.appendChild(heightParagraph);
  
    // Si hay sprites disponibles, muestra una imagen
    if (pokemonData.sprites && pokemonData.sprites.front_default) {
      const spriteImg = document.createElement('img');
      spriteImg.src = pokemonData.sprites.front_default;
      spriteImg.alt = `${pokemonData.name} sprite`;
      pokemonDataDiv.appendChild(spriteImg);
    }
}

//Main

let botonBusqueda = document.getElementById('search-btn');
let pokemonData = botonBusqueda.addEventListener('click', async () => {
    //Recojemos el nombre del pokemon en el value y se lo pasamos a la funcion de busqueda
    let pokemonABuscar = document.getElementById("pokemon-input").value;
    let nombrePokemon = pokemonABuscar.toLowerCase();
    let url = "https://pokeapi.co/api/v2/pokemon/"+nombrePokemon;
    let pokemonData = await buscarPokemon(url);
    // Verifica si se han obtenido datos antes de intentar mostrarlos
    if (pokemonData) {
        displayPokemonInfo(pokemonData);
    } else {
        console.error("No se encontraron datos para el Pokémon.");
    }

});


