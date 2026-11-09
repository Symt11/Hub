# Publicar HUB gratis en GitHub Pages

HUB está preparado, pero **todavía no está publicado**. No hemos creado un repositorio remoto ni activado ningún alojamiento. Sigue estos pasos únicamente cuando hayas revisado la web y quieras hacerla pública.

## 1. Qué necesitas y cuánto cuesta

Una cuenta gratuita de GitHub y un repositorio **público**. GitHub Pages admite HTML, CSS y JavaScript estáticos; con GitHub Free está disponible para repositorios públicos. Esta configuración no necesita servicios externos, bases de datos, Discord, contraseñas de producción ni un ordenador encendido. [Qué es GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages).

Tanto el código del repositorio público como el contenido de la web podrán consultarse por Internet. Solo debes subir esta entrega de HUB: **nunca el respaldo privado de la fase 4**, archivos `.env`, copias SQLite ni datos personales del equipo. El acceso privado de la fase anterior se ha retirado porque esta versión es pública y de consulta.

El coste previsto es **0 €**, usando el subdominio gratuito de GitHub y los límites del servicio. No compres un dominio ni un plan de pago para seguir esta guía. Los ejecutores estándar de Actions son gratuitos en repositorios públicos. [Crear un sitio y disponibilidad gratuita](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

## 2. Revisar la carpeta antes de subirla

Descomprime `HUB-fase5.zip` en tu ordenador. Dentro de la carpeta `HUB` encontrarás:

| Ruta | Para qué sirve |
| --- | --- |
| `site/` | La web ya generada: HTML, estilos, JavaScript e ilustración |
| `content/catalog.json` | El texto editable de las 93 fichas y las 13 categorías |
| `assets/` | Los estilos, el buscador y la ilustración originales de esta versión |
| `scripts/build.mjs` | Genera las páginas; GitHub lo ejecutará por ti |
| `tests/check.mjs` | Comprueba páginas, búsqueda y enlaces |
| `.github/workflows/pages.yml` | Instrucciones para publicar manualmente con Actions |
| `documentacion/` | Procedencia, comprobaciones y capturas |

En macOS, los nombres que empiezan por punto pueden estar ocultos. Puedes mostrarlos con **Comando + Mayúsculas + punto**. No elimines `.github`: contiene el proceso de publicación. El ZIP no contiene una base de datos ni secretos.

Puedes abrir `site/index.html` con doble clic para revisar la web sin instalar Flask ni ejecutar Python. El buscador utiliza archivos JavaScript locales, no peticiones a un servidor. La vista previa HTTP usada durante la revisión también sirve únicamente esos archivos.

## 3. Crear el repositorio y subir los archivos

La forma recomendada para principiantes es [GitHub Desktop](https://desktop.github.com/), la aplicación oficial gratuita. Permite subir carpetas, incluidos sus archivos ocultos, sin escribir comandos.

1. Instala GitHub Desktop e inicia sesión tú mismo en tu cuenta de GitHub. No compartas tu contraseña ni tokens en un chat.
2. Elige **File → Add Local Repository** y selecciona la carpeta `HUB` descomprimida. Si indica que todavía no es un repositorio, utiliza el enlace **create a repository here**. Elige el nombre **HUB** y comprueba que la ubicación corresponde a esa carpeta; no uses la del videojuego ni el respaldo de fase 4.
3. Revisa la lista **Changes**. Deben aparecer `content`, `assets`, `scripts`, `tests`, `site`, la guía y `.github/workflows/pages.yml`. No deben aparecer bases, copias privadas, `.env`, `.venv` ni el código Flask antiguo.
4. Si hay cambios pendientes de guardar, escribe en **Summary** algo como `HUB estático, fase 5` y pulsa **Commit to main**. Un commit es una versión guardada del código.
5. Pulsa **Publish repository**. El nombre será **HUB**. Desmarca **Keep this code private** para que sea público y compatible con Pages en el plan gratuito. Revisa los archivos antes de confirmar. Este es el momento en que el código sale de tu ordenador y queda público.
6. Pulsa **View on GitHub** y comprueba que ves las carpetas en la raíz. Debes ver `content/catalog.json`, no otra carpeta HUB envolviendo todo el contenido.

Si trabajas directamente sobre la carpeta local ya utilizada por el agente, puedes añadirla a Desktop en lugar del ZIP. Es la misma aplicación evolucionada; su nombre local antiguo no cambia la marca de la web. Revisa igualmente los archivos antes de publicar.

No hace falta crear además otro repositorio desde la web: **Publish repository** ya lo crea. Si ya creaste uno vacío en GitHub, clónalo desde Desktop y copia dentro el contenido de la carpeta HUB, incluidos `.github` y `.gitignore`, antes de guardar y enviar los cambios. No copies metadatos `.git` de otro repositorio.

## 4. Activar GitHub Pages

1. En el repositorio público **HUB**, entra en **Settings**.
2. En el menú lateral, abre **Pages**.
3. En **Build and deployment → Source**, elige **GitHub Actions**. No es necesario contratar ningún plan.
4. Abre la pestaña **Actions** del repositorio.
5. En la izquierda selecciona **Publicar HUB en GitHub Pages**.
6. Pulsa **Run workflow**, selecciona la rama que contiene los archivos —normalmente `main`— y confirma **Run workflow**.

Este botón es una orden real de publicación. El archivo preparado **no publica al subir archivos ni al guardar cambios**: solo cuando tú ejecutas el proceso manualmente.

GitHub genera las páginas con Node, ejecuta las comprobaciones y publica únicamente `site/`. Node es una herramienta de preparación: los visitantes reciben HTML, CSS, imágenes y JavaScript. No se ejecuta Python, no existe servidor propio y tu ordenador puede estar apagado.

Actions usa los permisos automáticos de GitHub para Pages. **No tienes que crear tokens, secretos ni variables privadas**. [Configurar la fuente de publicación](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## 5. Obtener y compartir el enlace

1. Espera a que el proceso de Actions termine con una marca verde.
2. Abre el proceso: el paso **Publicar** y el entorno **github-pages** muestran el enlace real. También lo encontrarás en **Settings → Pages → Visit site**.
3. Habitualmente tendrá esta forma: `https://TU_USUARIO.github.io/HUB/`. `TU_USUARIO` es un marcador: sustitúyelo por tu nombre real de GitHub. No es un sitio ya creado.
4. Abre el enlace y revisa la portada, una categoría, una ficha y una búsqueda. Comparte una URL de ficha y recárgala para comprobar el acceso directo.

Las rutas son relativas. Por eso funcionan tanto debajo de `/HUB/` como si eliges otro nombre de repositorio; no necesitas cambiar todos los enlaces. Las fichas tienen páginas físicas, por ejemplo `mecanicas/87/index.html`, y no necesitan trucos de redirección.

## 6. Actualizar el texto de una mecánica

No edites los HTML de `site/`: se generan de nuevo y esos cambios se perderían. Edita el contenido original:

1. En GitHub, abre `content/catalog.json`.
2. Pulsa el lápiz **Edit this file**. Busca el título de la ficha mediante el buscador del navegador, por ejemplo `Despertar del Sharingan`.
3. Cambia solo el texto que hayas acordado. Los campos son:
   - `title`: nombre de la ficha.
   - `summary`: explicación breve.
   - `body`: cómo funcionaría; `\n\n` separa los párrafos.
   - `example`: ejemplo opcional; déjalo como `""` si no procede.
   - `questions`: preguntas para la conversación.
   - `type`: `defined`, `proposal` o `pending`, según el estado documentado del diseño.
4. Conserva `id`, `categoryId` y `key`: identifican la ficha y mantienen los enlaces compartidos.
5. Mantén las comillas y las comas del formato JSON. Para escribir comillas dentro de un texto se usa `\"`. No añadas comentarios dentro del archivo. Usa **Preview** o revisa la diferencia antes de guardar.
6. Pulsa **Commit changes** y escribe un resumen claro. Esto guarda la modificación, pero todavía no la publica en Pages.
7. Ve a **Actions → Publicar HUB en GitHub Pages → Run workflow**. El proceso comprobará el contenido antes de publicarlo. Si falla la generación o las pruebas, no se ejecuta la publicación de esa versión.
8. Abre la web al terminar y comprueba la ficha. Si ves el texto antiguo, recarga la página; el sitio no instala cachés persistentes ni un service worker.

Las 93 fichas siguen pendientes de revisión por el equipo. Cambiar `type` no significa que todos hayan aprobado una regla. No cambies preguntas o propuestas por decisiones confirmadas sin acuerdo. El documento maestro y el videojuego se mantienen fuera de esta web.

Esta entrega incluye comprobaciones para conservar 13 categorías y 93 fichas. Añadir o eliminar fichas exige revisar también esas comprobaciones y la estructura; no borres identificadores para reorganizar textos. Para corregir o ampliar la explicación de una ficha existente no hace falta cambiar el código.

## 7. Publicar nuevas versiones y volver atrás

El ciclo habitual es: **editar → guardar cambios → revisar → Run workflow → comprobar el enlace**. No hay bases que migrar ni votos que conservar en esta versión.

GitHub guarda el historial de archivos. Antes de un cambio grande, descarga una copia mediante **Code → Download ZIP**. Para recuperar el texto anterior de una ficha, entra en su **History**, consulta la versión anterior, restaura el texto en `content/catalog.json`, guarda el cambio y vuelve a ejecutar el proceso manual. No hace falta eliminar el repositorio ni volver a contratar nada.

`site/` del repositorio es la copia generada entregada para revisión local. Actions la vuelve a generar con el contenido actual en cada publicación; no guarda esos HTML nuevos como otro commit. Si descargas el código tras editar contenido y quieres verlo actualizado localmente, genera las páginas con Node o descarga el artefacto del proceso. La web publicada sí utiliza el contenido actualizado.

## 8. Comprobación local opcional

No es necesaria para publicar: GitHub ya la ejecuta. Si tienes [Node.js](https://nodejs.org/) 22 o posterior instalado, abre Terminal dentro de la carpeta HUB y ejecuta:

```sh
node scripts/build.mjs
node tests/check.mjs
```

No hay dependencias que instalar con npm. Después abre `site/index.html`. Mantén el respaldo privado de la fase 4 fuera de esta carpeta.

## 9. Si algo falla

- **No aparece el proceso:** comprueba que `.github/workflows/pages.yml` llegó al repositorio y está en su rama predeterminada.
- **No aparece Pages:** revisa que el repositorio sea público y que tu cuenta tenga permisos para administrarlo. No contrates un plan para esta configuración.
- **El proceso está rojo:** abre Actions y el paso fallido. Si indica JSON inválido, revisa la última coma o comilla modificada. No publiques saltándote las pruebas.
- **404 al abrir la web:** utiliza el enlace real de Pages, espera al proceso verde y comprueba Source = GitHub Actions. No uses el enlace del repositorio como si fuera la web.
- **Cambiaste texto pero no se ve:** comprueba que ejecutaste Run workflow después del último cambio y revisa que finalizó correctamente.
- **No funciona el buscador:** permite JavaScript en el navegador. Las fichas y categorías se pueden leer sin él; la búsqueda lo necesita.

La creación remota, la activación de Pages y su primer despliegue siguen pendientes de tu autorización. Las pruebas realizadas hasta ahora son locales, incluidas las rutas bajo `/HUB/`.
