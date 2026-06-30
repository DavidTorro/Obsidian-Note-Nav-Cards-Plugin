// Build para generar el archivo styles.css en la raíz del plugin

const fs = require("fs");
const path = require("path");

const rootDir = process.cwd();

const cssFiles = [
  "src/styles/variables.css",
  "src/styles/cards.css",
  "src/styles/settings.css",
  "src/styles/responsive.css",
];

function buildStyles() {
  const banner = `
  /*
    * Note Nav Cards
    * Archivo generado automáticamente.
    * No editar directamente: modifica los archivos de src/styles/.
    */
  `;

  // Mapeo de los archivos CSS y concatenación de su contenido para generar el archivo styles.css
  const content = cssFiles
    .map((file) => {
      const filePath = path.join(rootDir, file);
      const css = fs.readFileSync(filePath, "utf8").trim();

      // Agregar un comentario con el nombre del archivo antes de su contenido
      return `/* ===== ${file} ===== */\n\n${css}`;
    })
    .join("\n\n");

  // Escribir el contenido final ya concatenado en styles.css en la raíz del plugin
  fs.writeFileSync(
    path.join(rootDir, "styles.css"),
    banner + content + "\n",
    "utf8"
  );

  console.log("styles.css generado correctamente.");
}

module.exports = {
  buildStyles,
};
