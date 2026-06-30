/** 
 * Componente encargado de crear una tarjeta de navegación individual
 * este gestiona el enlace, el texto visible, el icono y el comportamiento al hacer clic
*/

function createNoteNavCard(options) {
  // Desestructura las opciones recibidas para crear la tarjeta
  const { app, container, label, title, icon, direction, sourcePath } = options;

  // Crea un elemento <a> que actúa como la tarjeta de navegación, con clases CSS para estilo y dirección
  const card = container.createEl("a", {
    cls: `note-nav-card note-nav-card-${direction}`,
    href: title,
  });

  // Crea y agrega los elementos hijos de la tarjeta: el "kicker" (etiqueta), el título y el icono
  card.createSpan({
    cls: "note-nav-kicker",
    text: label,
  });

  // Crea y agrega el título de la nota a la tarjeta
  card.createSpan({
    cls: "note-nav-title",
    text: title,
  });

  // Crea y agrega el icono de navegación a la tarjeta
  card.createSpan({
    cls: "note-nav-icon",
    text: icon,
  });

  // Agrega un evento de clic a la tarjeta que abre la nota correspondiente en Obsidian
  card.addEventListener("click", (event) => {
    event.preventDefault();
    app.workspace.openLinkText(title, sourcePath);
  });
}

module.exports = {
  createNoteNavCard,
};
