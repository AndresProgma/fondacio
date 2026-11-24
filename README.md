# Fondacio · Agenda

Un calendario con el aspecto de Google Calendar, hecho para la fundación Fondacio (Altos de Cazucá) dentro de un trabajo de formación en habilidades digitales e inteligencia artificial.

## Qué hace

1. Muestra las actividades en vistas de **día, semana, mes y agenda**, con mini calendario y un calendario de color por eje (Formación, Comunidad, Economía circular, Equipo).
2. Se crean, editan y borran actividades con el botón **Crear** o haciendo clic en un espacio libre del calendario.
3. Atajos de teclado: D, W, M y A cambian de vista; B abre el tablero; R las actas; T va a hoy; J y K avanzan o retroceden; C crea una actividad.
4. **Cada persona del equipo tiene su calendario.** Al entrar se elige quién eres. Tu calendario muestra lo que es tuyo y la barra lateral muestra tus compromisos de las actas, con un botón para ponerlos en el calendario. El **calendario general** muestra todo. El equipo sale de la última acta y se puede editar.
5. **Tablero de cada persona** (botón de columnas a la derecha, o tecla B): tres columnas, **Por hacer**, **Haciendo** y **Hecho**, con los compromisos de las actas y las tareas que se agreguen ahí. Se pasan de una columna a otra con los botones o arrastrándolas. «Todo el equipo» muestra cuánto lleva cada persona.
6. Un **asistente con IA** contesta preguntas sobre la agenda y los compromisos, y puede crear o borrar actividades.

## Compartir con el equipo (Google Drive)

Todo el equipo ve lo mismo desde cualquier computador o celular abriendo **el link del equipo**. No hay que instalar nada.

- Los datos quedan en la carpeta **Agenda Fondacio** del Google Drive de Fondacio. Los guarda un programa pequeño de Google Apps Script ([servidor-drive.gs](servidor-drive.gs)), y cada computador escribe su propio archivo `agenda-datos-….json`.
- La página junta los cambios de todos: gana el cambio más reciente de cada actividad, acta o compromiso. Lo que alguien borra también desaparece en los demás.
- Si ponen un acta (Word o Google Docs con «acta» en el nombre) en esa carpeta, la página avisa para cargarla.
- **Para crear el link (una sola vez):** en la página, en **Compartir con el equipo**, están los pasos para pegar el programa en script.google.com con la cuenta de Fondacio y publicarlo como aplicación web.
- El link del equipo funciona como una contraseña: quien lo tenga puede ver y cambiar la agenda.
- La clave de la IA no se comparte: se queda en cada computador.

## Actas de los viernes

El equipo hace una reunión técnica cada viernes y deja un acta en Word. Muchas cosas que se dicen se quedan en el aire de un acta a otra. Esta parte de la página sirve para que eso no pase:

1. **Cargar actas (.docx)**: la página lee las actas en el navegador (no se suben a internet). Saca la fecha, quién modera, los éxitos y cosas por mejorar, y cada compromiso de la columna «Compromiso / tarea».
2. **Seguimiento de acta en acta**: cada compromiso guarda su recorrido: desde cuándo existe, en qué actas se mencionó y cuándo se cumplió. Si un acta dice «Ya se realizó…», el compromiso se cierra solo y deja de aparecer en las siguientes. Si nadie lo vuelve a mencionar, queda marcado como **«quedó en el aire»**. Para reconocer un compromiso de un acta a otra, la página compara las palabras importantes dentro del mismo tema. Si hay clave de IA, al cargar actas la IA revisa los que se escribieron distinto pero son el mismo, y una persona confirma cada pareja antes de unirla (también con el botón «Revisar repetidos con IA»).
3. **Acta automática cada viernes**: la página crea sola el acta de la reunión de la semana con todo lo que sigue abierto. En la reunión se marca lo cumplido, lo que se habló y lo nuevo.
4. **Al calendario**: las fechas que aparecen en las actas (talleres, reuniones, ensayos semanales, el concierto…) se proponen como actividades. Se revisan antes de agregarlas.
5. **Lo de la reunión**: se pega la transcripción de Google Meet (o las notas) y la IA propone qué se cumplió, de qué se habló y qué es nuevo. También se puede **grabar la reunión de Meet desde la página** (Chrome graba el sonido de la pestaña de Meet y el micrófono) o subir un audio. El paso a texto es gratis, sin clave y en el mismo computador: usa Whisper dentro de Chrome (la primera vez descarga unos 250 MB).
6. **Abrir en Google Docs**: copia el acta con el formato de Fondacio (lo nuevo en azul, lo que quedó en el aire en amarillo, lo cumplido tachado) y abre un documento nuevo para pegarla. También se puede descargar en Word (.docx, hoja horizontal).
7. **Plantilla e instructivo**: explica cómo llenar las actas nuevas para que la página las entienda (un compromiso por viñeta, el nombre de quien lo hace al inicio, fechas con día y mes, «Ya se hizo:» cuando algo se cumple) y trae las tablas listas. El acta que se lleva a Google Docs se puede volver a cargar: la página reconoce lo que venía de actas anteriores y lo que se habló.
8. **Lo que tal vez faltó en el acta**: si la reunión se grabó (o se pegó la transcripción), al cargar el acta que escribió el equipo la página compara las dos. Busca lo que se dijo con señales de compromiso, fecha, persona o decisión y que no quedó escrito, o quedó sin la fecha o la cantidad que se dijo. La lista aparece al final del acta en la página, en Word y en Google Docs, y cada cosa se puede **agregar como compromiso** o **quitar**. Funciona gratis y sin clave; con clave de IA está el botón «Revisar mejor con IA».
9. **Historial**: «Juntar actas en un Word» arma un solo documento con las últimas N actas (por defecto las 2 últimas), una por página. También se abre en Google Docs o se guarda en Drive.
10. **Borrar un acta**: cualquier acta se puede borrar (pregunta antes y deja deshacer). Con el link del equipo, el Word de cada acta queda guardado en la carpeta de Drive (subcarpeta «actas»), así que nunca se pierde.

Las actas tienen nombres de personas, incluidos niños. No se suben al repositorio: quedan solo en el navegador de quien las carga. Antes de enviar una transcripción a la IA, quita los datos personales.

## Cómo usarla

Abre `fondacio.html` en el navegador. No necesita instalación ni servidor.

Para activar la IA, entra a **Ajustes IA**, elige un proveedor (Groq, Gemini y OpenRouter tienen capa gratis) y pega tu clave. También puedes copiar `clave.example.js` como `clave.js` con tu clave, y la página la carga sola. `clave.js` está excluido del repositorio.

## Datos

Se guardan en el navegador de cada persona. No se comparten entre dispositivos. Las actividades de ejemplo no son reales.

## Estado

Beta.
