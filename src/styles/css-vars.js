/**
 * Gestiona las variables CSS globales del plugin.
 * Aplica y elimina el color principal seleccionado por el usuario.
*/

// Aplica el color de acento a las variables CSS del plugin y a los elementos de navegación
function applyAccentColor(color) {
  document.body.style.setProperty("--note-nav-accent", color);
  document.documentElement.style.setProperty("--note-nav-accent", color);

  // Aplica el color de acento a todos los elementos con la clase .note-nav quitando cualquier color previamente establecido
  document.querySelectorAll(".note-nav").forEach((nav) => {
    nav.style.removeProperty("--note-nav-accent");
  });
}

// Elimina el color de acento de las variables CSS del plugin y de los elementos de navegación
function removeAccentColor() {
  document.body.style.removeProperty("--note-nav-accent");
  document.documentElement.style.removeProperty("--note-nav-accent");

  // Elimina el color de acento de todos los elementos con la clase .note-nav quitando cualquier color previamente establecido
  document.querySelectorAll(".note-nav").forEach((nav) => {
    nav.style.removeProperty("--note-nav-accent");
  });
}

module.exports = {
  applyAccentColor,
  removeAccentColor,
};
