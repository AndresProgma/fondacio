# Fondacio · Agenda

Un calendario con el aspecto de Google Calendar, hecho para la fundación Fondacio (Altos de Cazucá) dentro de un trabajo de formación en habilidades digitales e inteligencia artificial.

## Qué hace

1. Muestra las actividades en vistas de **día, semana, mes y agenda**, con mini calendario y un calendario de color por eje (Formación, Comunidad, Economía circular, Equipo).
2. Se crean, editan y borran actividades con el botón **Crear** o haciendo clic en un espacio libre del calendario.
3. Atajos de teclado: D, W, M y A cambian de vista; T va a hoy; J y K avanzan o retroceden; C crea una actividad.
4. **Cada persona del equipo tiene su calendario.** Al entrar se elige quién eres. Tu calendario muestra lo que es tuyo y la barra lateral muestra tus compromisos de las actas, con un botón para ponerlos en el calendario. El **calendario general** muestra todo. El equipo sale de la última acta y se puede editar.
5. Un **asistente con IA** contesta preguntas sobre la agenda y los compromisos, y puede crear o borrar actividades.

## Actas de los viernes

El equipo hace una reunión técnica cada viernes y deja un acta en Word. Muchas cosas que se dicen se quedan en el aire de un acta a otra. Esta parte de la página sirve para que eso no pase:

1. **Cargar actas (.docx)**: la página lee las actas en el navegador (no se suben a internet). Saca la fecha, quién modera, los éxitos y cosas por mejorar, y cada compromiso de la columna «Compromiso / tarea».
2. **Seguimiento de acta en acta**: cada compromiso guarda su recorrido: desde cuándo existe, en qué actas se mencionó y cuándo se cumplió. Si un acta dice «Ya se realizó…», el compromiso se cierra solo y deja de aparecer en las siguientes. Si nadie lo vuelve a mencionar, queda marcado como **«quedó en el aire»**. Para reconocer un compromiso de un acta a otra, la página compara las palabras importantes dentro del mismo tema. Si hay clave de IA, al cargar actas la IA revisa los que se escribieron distinto pero son el mismo, y una persona confirma cada pareja antes de unirla (también con el botón «Revisar repetidos con IA»).
3. **Acta automática cada viernes**: la página crea sola el acta de la reunión de la semana con todo lo que sigue abierto. En la reunión se marca lo cumplido, lo que se habló y lo nuevo.
4. **Al calendario**: las fechas que aparecen en las actas (talleres, reuniones, ensayos semanales, el concierto…) se proponen como actividades. Se revisan antes de agregarlas.
5. **Lo de la reunión**: se pega la transcripción de Google Meet (o las notas) y la IA propone qué se cumplió, de qué se habló y qué es nuevo. También se puede pasar un audio a texto con Groq (máx. 25 MB).
6. **Abrir en Google Docs**: copia el acta con el formato de Fondacio (lo nuevo en azul, lo que quedó en el aire en amarillo, lo cumplido tachado) y abre un documento nuevo para pegarla. También se puede descargar en Word (.docx, hoja horizontal).
7. **Plantilla e instructivo**: explica cómo llenar las actas nuevas para que la página las entienda (un compromiso por viñeta, el nombre de quien lo hace al inicio, fechas con día y mes, «Ya se hizo:» cuando algo se cumple) y trae las tablas listas. El acta que se lleva a Google Docs se puede volver a cargar: la página reconoce lo que venía de actas anteriores y lo que se habló.

Las actas tienen nombres de personas, incluidos niños. No se suben al repositorio: quedan solo en el navegador de quien las carga. Antes de enviar una transcripción a la IA, quita los datos personales.

## Cómo usarla

Abre `fondacio.html` en el navegador. No necesita instalación ni servidor.

Para activar la IA, entra a **Ajustes IA**, elige un proveedor (Groq, Gemini y OpenRouter tienen capa gratis) y pega tu clave. También puedes copiar `clave.example.js` como `clave.js` con tu clave, y la página la carga sola. `clave.js` está excluido del repositorio.

## Datos

Se guardan en el navegador de cada persona. No se comparten entre dispositivos. Las actividades de ejemplo no son reales.

## Estado

Beta.
