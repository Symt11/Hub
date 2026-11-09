# Cambios de fase 5

Se transformó la misma carpeta de la aplicación anterior, tras respaldarla por completo. No se creó otra aplicación ni se modificó el servidor del videojuego.

## Respaldo privado, fuera del proyecto estático

`../respaldo-privado-fase4-antes-de-fase5/` conserva toda la fase 4 anterior: archivos, estructura, metadatos Git, documentación, base local, copias y entorno Python. Se validó la copia de código, la integridad de SQLite y las 64 pruebas. `RESTAURAR_FASE4.txt` explica cómo recuperarla. No se incluye en el ZIP de HUB ni debe subirse al repositorio público.

## Archivos actuales y finalidad

- `content/catalog.json`: exportación exclusivamente editorial de 13 categorías y 93 fichas; sustituye la consulta de datos en SQLite.
- `scripts/build.mjs`: genera portada, categorías, fichas, búsqueda e índice local. Solo usa módulos incluidos en Node.
- `assets/style.css`: adapta la identidad negra y verde a consulta, lectura y navegación móvil; respeta movimiento reducido.
- `assets/gate.svg`: ilustración original conservada, con nombre neutral y adaptación por composición/CSS.
- `assets/favicon.svg`: símbolo original, acompañado siempre por la marca HUB en la interfaz.
- `assets/search-core.js`: búsqueda normalizada, filtros combinados e índice de texto.
- `assets/app.js`: resultados, paginación, URL de búsqueda, menú móvil y cierre con Escape; sin peticiones externas ni almacenamiento.
- `site/`: entrega estática lista para Pages; 108 páginas HTML, recursos locales e índice. Esta es la única carpeta publicada por el workflow.
- `.github/workflows/pages.yml`: genera, comprueba y publica en Pages solo al ejecutarlo manualmente.
- `tests/check.mjs`: comprueba datos, marca, navegación, recursos, búsqueda y aislamiento del artefacto público.
- `.gitignore`: excluye datos, credenciales, entornos, copias y ZIP.
- `GUIA_GITHUB_PAGES.md`: creación del repositorio, publicación gratuita, actualizaciones y vuelta a textos anteriores para principiantes.
- `README.md`: instrucciones vigentes de HUB.
- `documentacion/PROCEDENCIA.md`: fuente, clasificación y único ajuste editorial.
- `documentacion/VALIDACION_FASE5.md`: resultados y límites de las comprobaciones.
- `documentacion/CAPTURAS.md` y `documentacion/capturas/`: vistas reales de escritorio y móvil.

## Retirado de la versión actual, conservado en el respaldo

Flask, SQLite, OAuth2, configuración Render, entorno Python, sesiones, usuarios autorizados, administración, votos, rondas, comentarios, respuestas, alternativas enviadas e historial de votación. Se retiraron sus páginas, rutas, formularios y dependencias. Las pruebas antiguas y las guías de publicación de pago se conservan únicamente con fase 4 para no confundirlas con HUB.

Los identificadores y el contenido de diseño útil permanecen. No se exportaron datos privados de participantes ni estados obtenidos mediante votaciones. La revisión queda pendiente para todo el catálogo.
