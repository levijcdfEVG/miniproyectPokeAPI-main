'use strict';

/**
 * Ejercicio 1: Buscar y mostrar información del Pokemon con jQuery y AJAX
 */

function buscarPokemon(url) {
    return $.ajax({
        url: url,
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            return data;
        },
        error: function(xhr, status, error) {
            alert('Hubo un error al establecer comunicación con la API');
            console.error('Hubo un problema con la solicitud AJAX:', error);
        }
    });
}

function displayPokemonInfo(pokemonData) {
    // Obtén la referencia al contenedor donde se mostrará la información
    const pokemonDataDiv = $('#pokemon-data');
    // Limpia cualquier contenido previo
    pokemonDataDiv.empty();
  
    // Crea elementos y agrega la información del Pokémon al DOM
    const nameHeader = $('<h3>').text(`Nombre: ${pokemonData.name}`);
    pokemonDataDiv.append(nameHeader);
  
    const idParagraph = $('<p>').text(`ID: ${pokemonData.id}`);
    pokemonDataDiv.append(idParagraph);
  
    const typeParagraph = $('<p>').text(`Tipos: ${pokemonData.types.map(typeInfo => typeInfo.type.name).join(', ')}`);
    pokemonDataDiv.append(typeParagraph);
  
    const abilitiesParagraph = $('<p>').text(`Habilidades: ${pokemonData.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ')}`);
    pokemonDataDiv.append(abilitiesParagraph);
  
    const weightParagraph = $('<p>').text(`Peso: ${pokemonData.weight}`);
    pokemonDataDiv.append(weightParagraph);
  
    const heightParagraph = $('<p>').text(`Altura: ${pokemonData.height}`);
    pokemonDataDiv.append(heightParagraph);
  
    // Si hay sprites disponibles, muestra una imagen
    if (pokemonData.sprites && pokemonData.sprites.front_default) {
        const spriteImg = $('<img>')
            .attr('src', pokemonData.sprites.front_default)
            .attr('alt', `${pokemonData.name} sprite`);
        pokemonDataDiv.append(spriteImg);
    }
}

//Main
let currentPokemonData = null; // Variable global para almacenar el Pokémon buscado

$('#search-btn').on('click', function() {
    let pokemonABuscar = $('#pokemon-input').val();
    let nombrePokemon = pokemonABuscar.toLowerCase();
    let url = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;

    // Realiza la búsqueda del Pokémon
    buscarPokemon(url)
        .done(function(pokemonData) {
            if (pokemonData) {
                displayPokemonInfo(pokemonData);
                currentPokemonData = pokemonData; // Guarda los datos globalmente
            } else {
                console.error("No se encontraron datos para el Pokémon.");
                alert('No se encontraron datos para el Pokémon');
                currentPokemonData = null;
            }
        })
        .fail(function(xhr, status, error) {
            console.error('Error en la solicitud AJAX:', error);
            alert('Error en la solicitud AJAX');
        });
});

// Añadir a la colección
$('#add-btn').on('click', function() {
    // Verifica si hay datos disponibles para agregar
    if (currentPokemonData) {
        const pokemonColection = $('#collection-list');

        // Crear un contenedor para el Pokémon
        const pokemonItem = $('<div>').addClass('pokemon-item');

        // Crear un elemento para el nombre
        const nameElement = $('<p>').text(`Nombre: ${currentPokemonData.name}`);
        pokemonItem.append(nameElement);

        // Crear un elemento para la imagen
        const imgElement = $('<img>')
            .attr('src', currentPokemonData.sprites.front_default)
            .attr('alt', `${currentPokemonData.name} sprite`);
        pokemonItem.append(imgElement);

        // Añadir el elemento al contenedor de la colección
        pokemonColection.append(pokemonItem);
    } else {
        console.error("No hay ningún Pokémon para agregar a la colección.");
        alert('No hay ningún Pokémon para agregar a la colección');
    }
});
