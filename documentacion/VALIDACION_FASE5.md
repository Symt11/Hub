# Validación de HUB — fase 5

## Resultado

Conversión local terminada. **Sin publicación ni repositorio remoto creado.** Las comprobaciones automáticas y la revisión en navegador fueron satisfactorias.

| Comprobación | Resultado |
| --- | --- |
| Categorías e IDs | 13 conservadas y accesibles |
| Fichas e IDs | 93 conservadas y accesibles |
| Clasificación | 76 definidas, 9 propuestas y 8 pendientes; 10 de las definidas son referencias informativas |
| Revisión del equipo | Las 93 fichas muestran el mismo aviso pendiente; sin resultados automáticos |
| HTML generado | 108 páginas: portada, buscador, 13 categorías y 93 fichas |
| Enlaces internos y recursos | 2.397 referencias verificadas, sin rutas absolutas que pierdan el prefijo `/HUB/` |
| Peticiones HTTP reales locales | Las 108 páginas respondieron 200 con contenido HTML |
| Buscador real en navegador | Sharingan, Taijutsu, Clanes, Chakra, Economía y Jutsus encuentran resultados |
| Búsqueda adicional | Sin tildes y sin distinguir mayúsculas; incluye evolución de tomoes al buscar Sharingan |
| Filtros y resultados | Categoría, tipo, combinación, consulta vacía, sin coincidencias y ver más: correctos |
| URL de búsqueda | Conserva filtros al recargar y compartir |
| Navegación real | Categoría → ficha → siguiente → anterior → categoría; recarga directa de ficha correcta |
| Móvil | Portada y ficha a 390 × 844; buscador también comprobado a 320 × 720, sin desbordamiento horizontal |
| Escritorio | Portada y ficha a 1280 × 900 |
| Consola del navegador | Sin errores ni advertencias durante la revisión final |
| Funciones retiradas | Sin enlaces de acceso, administración, votos, comentarios o alternativas; solo formulario de búsqueda local |
| Dependencias de ejecución | Ninguna en servidor; solo HTML/CSS/JS/SVG y `.nojekyll` |
| Privacidad del paquete | Sin SQLite, Python, `.env`, sesiones, usuarios, copias ni secretos |
| Workflow | YAML válido, disparador manual, generación y comprobaciones antes de publicar solo `site/` |
| Respaldo anterior | Copia completa privada, integridad y relaciones SQLite correctas; sus 64 pruebas originales pasan |

`node tests/check.mjs` finalizó con **9.066 comprobaciones correctas**. Son verificaciones de páginas, enlaces, datos y búsqueda, no 9.066 pruebas independientes. Se ejecutó usando el entorno Node integrado disponible; los comandos reproducibles y el workflow usan herramientas estándar sin dependencias npm. Node 22 está configurado para la futura ejecución en GitHub.

## Conservación de contenido

Se compararon títulos, resúmenes, cuerpos, ejemplos, preguntas, categorías, fuentes y notas de diseño con la base privada de fase 4. Todo coincide salvo el ajuste explícito de la ficha 32 que retira una referencia a votos, documentado en PROCEDENCIA.md. La ilustración original coincide byte a byte. Se añade una pregunta editorial de aclaración al presentar fichas que solo tenían una; no se añade ninguna mecánica ni ejemplo nuevo.

La clasificación se obtiene del estado de diseño original, no de votos. Sharingan mantiene sus seis fichas y su procedencia de fase 3. Byakugan y detección de chakra permanecen pendientes. Percepción conserva su formato mixto. El repositorio del videojuego está sin cambios y el documento maestro no se ha editado.

## Capturas

Las cuatro imágenes de `capturas/` son capturas reales de la revisión local. Véase CAPTURAS.md. El servidor usado para la revisión solo servía archivos estáticos, sin ejecutar la aplicación Flask, y se detuvo al finalizar.

## Pendiente

No se ha ejecutado el workflow en GitHub ni comprobado un dominio `github.io` real: eso publicaría la web y requiere autorización. La compatibilidad de archivos, enlaces y prefijo de repositorio sí se ha comprobado localmente. Al publicar, verifica el proceso verde y repite una búsqueda y una recarga de ficha en el enlace público.
