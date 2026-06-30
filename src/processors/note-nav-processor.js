/** 
 * Registra el bloque Markdown ```note-nav```
 * Lee su configuración y genera las tarjetas anterior/siguiente
*/

const { parseNoteNavConfig } = require("../utils/parse-config.js");
const { createNoteNavCard } = require("../components/note-nav-card.js");

/**
 * Función que registra el procesador de bloques Markdown para el plugin Note Nav Cards 
 * y genera las tarjetas de navegación entre notas según la configuración proporcionada.
*/
function registerNoteNavProcessor(plugin) {
  // Registra el procesador de bloques Markdown para el bloque ```note-nav```
  plugin.registerMarkdownCodeBlockProcessor("note-nav", (source, el, ctx) => {
    // Analiza la configuración del bloque note-nav usando la función parseNoteNavConfig
    const config = parseNoteNavConfig(source);

    // Obtiene los valores de las notas anterior y siguiente, permitiendo claves en español o inglés
    const previousNote = config.anterior || config.prev;
    const nextNote = config.siguiente || config.next;

    // Crea un contenedor para las tarjetas de navegación
    const nav = el.createDiv({
      cls: "note-nav",
    });

    if (!previousNote && !nextNote) {
      nav.createDiv({
        cls: "note-nav-empty",
        text: "Note Nav Cards: añade una nota anterior o siguiente.",
      });

      return;
    }

    if (previousNote) {
      createNoteNavCard({
        app: plugin.app,
        container: nav,
        label: "Anterior",
        title: previousNote,
        icon: "←",
        direction: "prev",
        sourcePath: ctx.sourcePath,
      });
    }

    if (nextNote) {
      createNoteNavCard({
        app: plugin.app,
        container: nav,
        label: "Siguiente",
        title: nextNote,
        icon: "→",
        direction: "next",
        sourcePath: ctx.sourcePath,
      });
    }
  });
}

module.exports = {
  registerNoteNavProcessor,
};
