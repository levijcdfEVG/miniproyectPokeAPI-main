# Ejercicios de Programación Asincrona con la PokéApi

Este repositorio permite manejar una Pokedex utilizando programación asíncrona, lo que facilita la interacción con la PokéApi de una manera eficiente. El ejercicio está dividido en dos versiones: una más antigua que utiliza **JQuery y AJAX** y otra más reciente que emplea **Fetch**. Ambas versiones tienen el mismo propósito, pero emplean diferentes tecnologías y enfoques para manejar las peticiones HTTP y la manipulación de datos.

## Objetivo:
El objetivo de estos ejercicios es permitir la búsqueda y visualización de información sobre los Pokémon de la PokéApi. El usuario puede buscar un Pokémon por nombre, visualizar su información básica (como ID, tipos, habilidades, etc.) y agregarlo a una colección personal.

## 1. **Versión Antigüa: JQuery y AJAX**
En esta versión más antigua, se utiliza **JQuery** junto con **AJAX** para realizar las peticiones HTTP y obtener los datos de la PokéApi. El flujo de trabajo es el siguiente:

- **JQuery** facilita la manipulación del DOM y la realización de solicitudes AJAX.
- **AJAX** se usa para enviar peticiones HTTP de manera asincrónica a la PokéApi.
- Los datos obtenidos de la API se procesan y se muestran en el DOM (por ejemplo, nombre, tipos y habilidades del Pokémon).
- Los eventos, como la búsqueda de un Pokémon, se manejan usando los métodos de JQuery.

### Características de la versión con JQuery y AJAX:
- Dependencia de JQuery.
- Uso de callbacks para manejar las respuestas de las peticiones HTTP.
- Manipulación del DOM directamente con los métodos de JQuery.

## 2. **Versión Reciente: Fetch API**
En la versión más reciente, se utiliza **Fetch** para realizar solicitudes HTTP. Fetch es más moderno y nativo de JavaScript, lo que permite un enfoque más limpio y fácil de leer en comparación con JQuery y AJAX.

- **Fetch** es una API moderna que maneja las solicitudes HTTP y es completamente compatible con JavaScript moderno.
- El código se beneficia de las promesas y la programación asincrónica, lo que facilita la escritura de código más limpio y manejable.
- A diferencia de AJAX, **Fetch** utiliza `Promise` y `async/await`, lo que mejora la legibilidad y el manejo de errores.

### Características de la versión con Fetch:
- No requiere dependencias externas.
- Utiliza promesas y `async/await` para manejar la asincronía.
- Es una API nativa de JavaScript, compatible con los navegadores modernos.

## Comparativa de las versiones:

| **Aspecto**               | **JQuery y AJAX**                                      | **Fetch**                             |
|---------------------------|--------------------------------------------------------|---------------------------------------|
| **Enfoque**               | Basado en JQuery para manipulación del DOM y AJAX      | Basado en JavaScript moderno (Fetch y Promesas) |
| **Manejo de Asincronía**  | Uso de funciones callback (AJAX)                       | Uso de Promesas con `async/await`    |
| **Compatibilidad**        | Necesita JQuery como dependencia externa              | Nativo de JavaScript, no requiere dependencias |
| **Legibilidad**           | Puede resultar más verboso debido a los callbacks      | Más limpio y fácil de leer con `async/await` |
| **Soporte de Navegadores**| Compatible con la mayoría de los navegadores modernos  | Compatible con la mayoría de los navegadores modernos |

## Resumen:
- La **versión con JQuery y AJAX** fue la forma tradicional de manejar las solicitudes asincrónicas y la manipulación del DOM, muy utilizada en los primeros años del desarrollo web dinámico.
- La **versión con Fetch** es el enfoque moderno y recomendado, ya que es más nativo, limpio y aprovechando las características de JavaScript actual como Promesas y `async/await`.

Ambas versiones cumplen con la misma función: interactuar con la PokéApi, buscar información sobre los Pokémon y mostrarla al usuario, pero con diferencias en las tecnologías empleadas y la forma de manejar la asincronía.
