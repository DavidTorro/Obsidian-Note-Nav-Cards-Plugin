/**
 * Construye la pestaña de ajustes del plugin dentro de Obsidian
 * esta permite configurar el color principal y muestra ejemplos de uso
*/

const { PluginSettingTab, Setting, Notice } = require("obsidian");
const { DEFAULT_SETTINGS } = require("./default-settings.js");

class NoteNavCardsSettingTab extends PluginSettingTab {
  // Constructor de la clase, recibe la instancia de la aplicación y del plugin
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  // Método que se llama para mostrar la pestaña de ajustes
  display() {
    const { containerEl } = this;

    containerEl.empty();

    const root = containerEl.createDiv({
      cls: "note-nav-settings",
    });

    root.createEl("h2", {
      text: "Note Nav Cards",
    });

    root.createEl("p", {
      text: "Crea tarjetas de navegación entre notas usando un bloque de código sencillo dentro de tus apuntes.",
    });

    root.createEl("h3", {
      text: "Personalización",
    });

    // Sección de ajustes para el color principal del plugin con el color picker y botón de restablecer nativo de obsidian
    new Setting(root)
      .setName("Color principal")
      .setDesc("Selecciona el color usado en los iconos, brillos y detalles visuales de las tarjetas.")
      .addColorPicker((color) => {
        color
          .setValue(this.plugin.settings.accentColor)
          .onChange(async (value) => {
            this.plugin.settings.accentColor = value;
            await this.plugin.saveSettings();
          });
      })
      .addButton((button) => {
        button
          .setButtonText("Restablecer")
          .setTooltip("Volver al color por defecto")
          .onClick(async () => {
            this.plugin.settings.accentColor = DEFAULT_SETTINGS.accentColor;
            await this.plugin.saveSettings();
            this.display();
            new Notice("Color restablecido");
          });
      });

    root.createEl("h3", {
      text: "Cómo se usa",
    });

    root.createEl("p", {
      text: "Inserta un bloque note-nav en cualquier nota. Puedes usar las claves en español o en inglés.",
    });

    this.addExample(
      root,
      "Navegación completa",
      "Muestra una tarjeta para la nota anterior y otra para la siguiente.",
      [
        "```note-nav",
        "anterior: Nota anterior",
        "siguiente: Nota siguiente",
        "```",
      ]
    );

    this.addExample(
      root,
      "Solo siguiente",
      "Útil para la primera nota de una sección o tema.",
      [
        "```note-nav",
        "siguiente: Primera nota del tema",
        "```",
      ]
    );

    this.addExample(
      root,
      "Solo anterior",
      "Útil para la última nota de una sección o tema.",
      [
        "```note-nav",
        "anterior: Nota anterior",
        "```",
      ]
    );

    this.addExample(
      root,
      "Compatibilidad con claves en inglés",
      "También puedes escribir prev y next.",
      [
        "```note-nav",
        "prev: Previous note",
        "next: Next note",
        "```",
      ]
    );

    root.createEl("h3", {
      text: "Notas importantes",
    });

    const list = root.createEl("ul");

    list.createEl("li", {
      text: "El nombre debe coincidir con el nombre real de la nota en Obsidian.",
    });

    list.createEl("li", {
      text: "Las tarjetas se renderizan en vista lectura y en la previsualización de Markdown.",
    });

    list.createEl("li", {
      text: "El diseño se adapta automáticamente al tema claro u oscuro de Obsidian.",
    });
  }

  addExample(containerEl, title, description, lines) {
    const wrapper = containerEl.createDiv({
      cls: "note-nav-settings-example",
    });

    const header = wrapper.createDiv({
      cls: "note-nav-settings-example-header",
    });

    const text = header.createDiv({
      cls: "note-nav-settings-example-text",
    });

    text.createEl("h4", {
      text: title,
    });

    text.createEl("p", {
      text: description,
    });

    const codeText = lines.join("\n");

    const copyButton = header.createEl("button", {
      cls: "note-nav-settings-copy-button",
      text: "Copiar",
    });

    copyButton.addEventListener("click", async () => {
      await navigator.clipboard.writeText(codeText);
      new Notice("Ejemplo copiado");
    });

    const pre = wrapper.createEl("pre", {
      cls: "note-nav-settings-code",
    });

    const code = pre.createEl("code");
    code.setText(codeText);
  }
}

module.exports = {
  NoteNavCardsSettingTab,
};
