# HUB

Catálogo estático de las mecánicas del proyecto. Es la evolución de la fase 4 existente: mantiene su contenido y la ilustración negra y verde, y retira las funciones de participación de la versión pública.

**13 categorías · 93 fichas · Todas pendientes de revisión por el equipo.**

76 fichas definidas (incluidas 10 referencias informativas), 9 propuestas y 8 pendientes de definir. «Definida» describe la fuente, no una aprobación colectiva. Los debates se realizan fuera de la web.

## Ver la web

Abre `site/index.html` en tu navegador. El contenido está escrito en HTML; el buscador funciona con JavaScript local. No se requieren Flask, Python, SQLite, Discord, cuentas, secretos ni servicios externos.

## Publicar gratis

Sigue [GUIA_GITHUB_PAGES.md](GUIA_GITHUB_PAGES.md). El proceso de GitHub Actions está preparado para ejecución **manual**. **No se ha publicado la web.** Solo `site/` se envía a Pages.

## Editar y comprobar

El texto está en `content/catalog.json`. Los recursos y estilos están en `assets/`. Con Node 22 o posterior, sin instalar dependencias:

```sh
node scripts/build.mjs
node tests/check.mjs
```

Las páginas generadas están en `site/`; no las edites directamente. Las rutas son relativas y cada ficha tiene su propio HTML, compatible con enlaces compartidos y recargas en GitHub Pages.

- [Procedencia y clasificación](documentacion/PROCEDENCIA.md)
- [Resultado de las comprobaciones](documentacion/VALIDACION_FASE5.md)
- [Capturas de escritorio y móvil](documentacion/CAPTURAS.md)
- [Cambios de fase 5](documentacion/CAMBIOS_FASE5.md)

## Respaldo anterior

Antes de retirar los sistemas se guardó una copia completa y privada de fase 4, fuera de esta carpeta: `../respaldo-privado-fase4-antes-de-fase5/`. Incluye datos locales y las instrucciones para recuperar la aplicación anterior. No forma parte de este ZIP ni del repositorio público. Conserva esa carpeta privada; el ZIP anterior de fase 4 excluía las bases y no sustituye el respaldo de datos.

El videojuego y su documento maestro no se han modificado.
