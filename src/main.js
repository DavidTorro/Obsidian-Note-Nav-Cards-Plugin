/**
 * Punto de entrada del plugin: carga ajustes, registra la pestaña de configuración
 * y activa el procesador Markdown encargado de renderizar las tarjetas
*/

const { Plugin } = require("obsidian");
const { DEFAULT_SETTINGS } = require("./settings/default-settings.js");
const { NoteNavCardsSettingTab } = require("./settings/settings-tab.js");
const { registerNoteNavProcessor } = require("./processors/note-nav-processor.js");
const { applyAccentColor, removeAccentColor } = require("./styles/css-vars.js");

// Clase principal del plugin, que extiende la clase Plugin de Obsidian
module.exports = class NoteNavCardsPlugin extends Plugin {
  /** 
    * En el método onload, se cargan los ajustes, se aplica el color de acento y se 
    * registra la pestaña de configuración y el procesador Markdown.
  */ 
  async onload() {
    await this.loadSettings();

    applyAccentColor(this.settings.accentColor);

    this.addSettingTab(new NoteNavCardsSettingTab(this.app, this));

    registerNoteNavProcessor(this);
  }

  /** 
    * En el método onunload, se remueve el color de acento aplicado al cargar el plugin.
    * Esto asegura que el estilo del plugin no afecte a la interfaz de usuario después de desactivarlo.
  */ 
  onunload() {
    removeAccentColor();
  }

  // Método para cargar los ajustes del plugin desde el almacenamiento de datos de Obsidian.
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  // Método para guardar los ajustes del plugin en el almacenamiento de datos de Obsidian.
  async saveSettings() {
    await this.saveData(this.settings);
    applyAccentColor(this.settings.accentColor);
  }
};
