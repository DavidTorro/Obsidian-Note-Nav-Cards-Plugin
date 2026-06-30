/** 
 * Utilidad para interpretar la configuración escrita dentro del bloque note-nav.
 * Convierte líneas como "anterior:" o "siguiente:" en datos utilizables por el plugin.
*/

function parseNoteNavConfig(source) {
  // Inicializa un objeto vacío para almacenar la configuración en formato clave-valor
  const config = {};

  // Divide el contenido del bloque en líneas y procesa cada línea para extraer la clave y el valor
  source.split("\n").forEach((line) => {
    const [key, ...valueParts] = line.split(":");

    if (!key || valueParts.length === 0) return;

    const normalizedKey = key.trim().toLowerCase();
    const value = valueParts.join(":").trim();

    if (!value) return;

    const validKeys = ["anterior", "siguiente", "prev", "next"];

    if (validKeys.includes(normalizedKey)) {
      config[normalizedKey] = value;
    }
  });

  /**
   * Devuelve el objeto de configuración resultante, que contiene las notas anterior y siguiente 
   * según lo especificado en el bloque note-nav en formato clave-valor y todo para ser utilizado por el procesador de bloques Markdown del plugin
  */
  return config;
}

module.exports = {
  parseNoteNavConfig,
};
