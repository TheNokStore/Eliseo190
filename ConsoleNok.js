// Definir las noticias y la versión del proyecto
const noticias = [
  "Muy Pronto el lanzamiento"
];

const version = "0.01";

// Función para mostrar las noticias y la versión en la consola
function mostrarInformacion() {
  console.log("=== TheNokStore ===");
  console.log("Versión: " + version);
  console.log("Noticias:");

  for (let i = 0; i < noticias.length; i++) {
    console.log("- " + noticias[i]);
  }
}

// Llamar a la función para mostrar la información en la consola
mostrarInformacion();
