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
let currentPokemonData = null; // Variable global para almacenar el Pokémon buscado

// Obtener información del Pokémon y mostrarla por pantalla
botonBusqueda.addEventListener('click', async () => {
    let pokemonABuscar = document.getElementById("pokemon-input").value;
    let nombrePokemon = pokemonABuscar.toLowerCase();
    let url = "https://pokeapi.co/api/v2/pokemon/" + nombrePokemon;

    // Realiza la búsqueda del Pokémon
    let pokemonData = await buscarPokemon(url);

    // Si hay datos, muestra la información y guarda el Pokémon actual
    if (pokemonData) {
        displayPokemonInfo(pokemonData);
        currentPokemonData = pokemonData; // Guarda los datos globalmente
    } else {
        console.error("No se encontraron datos para el Pokémon.");
        currentPokemonData = null;
    }
});

// Añadir a la colección
let botonAniadir = document.getElementById('add-btn');
botonAniadir.addEventListener('click', function () {
    // Verifica si hay datos disponibles para agregar
    if (currentPokemonData) {
        const pokemonColection = document.getElementById('collection-list');

        // Crear un contenedor para el Pokémon
        const pokemonItem = document.createElement('div');
        pokemonItem.classList.add('pokemon-item'); // Clase opcional para estilos

        // Crear un elemento para el nombre
        const nameElement = document.createElement('p');
        nameElement.textContent = `Nombre: ${currentPokemonData.name}`;
        pokemonItem.appendChild(nameElement);

        // Crear un elemento para la imagen
        const imgElement = document.createElement('img');
        imgElement.src = currentPokemonData.sprites.front_default;
        imgElement.alt = `${currentPokemonData.name} sprite`;
        pokemonItem.appendChild(imgElement);

        // Añadir el elemento al contenedor de la colección
        pokemonColection.appendChild(pokemonItem);
    } else {
        console.error("No hay ningún Pokémon para agregar a la colección.");
    }
});
