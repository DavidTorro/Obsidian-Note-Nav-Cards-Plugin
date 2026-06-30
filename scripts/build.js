// Build para generar el archivo main.js en la raíz del plugin

const esbuild = require("esbuild");
const { buildStyles } = require("./build-styles.js");
const isProd = process.argv.includes("--production");

// Función para construir el archivo main.js usando esbuild
async function buildJavaScript() {
  await esbuild.build({
    entryPoints: ["src/main.js"],
    bundle: true,
    external: ["obsidian"],
    format: "cjs",
    target: "es2020",
    outfile: "main.js",
    sourcemap: isProd ? false : "inline",
    logLevel: "info",
  });
}

// Función para construir los estilos y el JavaScript del plugin
async function build() {
  await buildJavaScript();
  buildStyles();

  console.log("Build completada.");
}

/**
 * Ejecutar la función build y manejar errores mostrando un mensaje en la consola 
 * y saliendo con un código de error en caso de que ocurra algún problema durante el proceso de build
*/
build().catch((error) => {
  console.error(error);
  process.exit(1);
});
