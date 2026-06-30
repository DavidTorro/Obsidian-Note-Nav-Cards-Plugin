![Banner](./assets/Banner.png)

# 📝 Note Nav Cards

![Obsidian](https://img.shields.io/badge/-Obsidian-483699?style=for-the-badge&logo=obsidian&logoColor=white) ![Markdown](https://img.shields.io/badge/-Markdown-5b5b5b?style=for-the-badge&logo=markdown&logoColor=white) ![JavaScript](https://img.shields.io/badge/-JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=000) ![CSS](https://img.shields.io/badge/-CSS-264de4?style=for-the-badge&logo=css3&logoColor=white) ![CommonJS](https://img.shields.io/badge/-CommonJS-20232a?style=for-the-badge&logo=node.js&logoColor=white) ![esbuild](https://img.shields.io/badge/-esbuild-FFCF00?style=for-the-badge&logo=esbuild&logoColor=000) ![v1.0.0](https://img.shields.io/badge/-v1.0.0-2ea44f?style=for-the-badge)

Plugin de Obsidian para crear tarjetas de navegación entre notas con un bloque de código bastante directo. La idea es simple: defines la nota anterior, la siguiente o las dos, y el plugin se encarga de montar la UI usando la API nativa de Obsidian para procesar bloques Markdown, abrir enlaces internos y exponer ajustes sin complicarte demasiado.

[Documentación completa](https://note-nav.davidtorro.com)

## ✨ Qué hace

- Procesa bloques de código `note-nav`.
- Acepta claves en español e inglés.
- Renderiza una tarjeta para nota anterior, nota siguiente o ambas.
- Usa la API de Obsidian para resolver y abrir enlaces internos.
- Aplica estilos adaptativos a tema claro y oscuro.

## 📸 Capturas

### Bloque en código fuente

![Bloque en código fuente](./assets/Bloque-codigo-fuente.png)

### Color picker en ajustes

![Color picker en ajustes](./assets/Color-picker-ajustes.png)

### Ejemplo en tema claro

![Ejemplo en nota clara](./assets/Card-tema-claro.png)

### Ejemplo en tema oscuro

![Ejemplo en nota oscura](./assets/Card-tema-oscuro.png)

## 🧠 Comportamiento

- El título de cada tarjeta debe coincidir con el nombre real de la nota en el vault.
- El procesador utiliza `sourcePath` para resolver la navegación en contexto.
- Si solo existe una dirección, solo se renderiza esa tarjeta.
- Si no hay ninguna nota válida, se muestra un mensaje de estado vacío.
- El componente se renderiza tanto en lectura como en previsualización de Markdown.

## 🎨 Estilo y tema

El componente separa estructura y presentación mediante clases CSS específicas y variables reutilizables.

- El color principal se expone como variable CSS del plugin.
- Las tarjetas adaptan bordes, sombras e iconos al color de acento.
- Los estilos incluyen variantes para tema claro y oscuro.
- La hoja de estilos está dividida por responsabilidades: variables, tarjetas, ajustes y responsive.

## ✅ Compatibilidad

- Obsidian 1.5.0 o superior.
- Escritorio y móvil.

## 👤 Autor

**David Torró**

Nació como un proyecto personal para usarlo en mi propio vault de Obsidian.

Lo dejo publicado por si a alguien más le interesa, le sirve como base o le da ideas para montar su propia navegación entre notas.

## 💬 Apoyo y contribuciones

Si te sirve este plugin, puedes ayudar de forma muy simple:

- Dale una estrella al repositorio.
- Abre una issue si detectas un fallo o una mejora.
- Abre una pull request si quieres proponer cambios.
- Comparte feedback si lo estás usando en tu vault.

## 🔗 Obsidian

[Note Nav Cards en Obsidian](https://obsidian.md/plugins?id=note-nav-cards)

## ⚖️ Licencia

Este proyecto se distribuye bajo licencia MIT. Puedes usarlo, modificarlo y redistribuirlo con los términos habituales de MIT.
