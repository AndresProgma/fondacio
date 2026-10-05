# Fondacio · Agenda

Un calendario sencillo, parecido a Google Calendar, con una bandeja de **pendientes de WhatsApp**. Hecho para la fundación Fondacio (Altos de Cazucá) dentro de un trabajo de formación en habilidades digitales e inteligencia artificial.

## Qué hace

1. Se guarda un mensaje de WhatsApp (o un chat completo exportado) como **pendiente**. La página lee la fecha, la hora, el lugar, quién escribe, de qué grupo y a quién buscan.
2. Se decide: **aceptar**, **preguntar** o **rechazar**, con una respuesta ya escrita para WhatsApp.
3. Solo al aceptar, la actividad entra al **calendario** (vista de mes y de semana).
4. Una IA ayuda a leer los mensajes, a redactar respuestas e invitaciones y a contestar preguntas sobre la agenda.

## Cómo usarla

Abre `fondacio.html` en el navegador. No necesita instalación ni servidor.

Para activar la IA, entra a **Ajustes IA**, elige un proveedor (Groq, Gemini y OpenRouter tienen capa gratis) y pega tu clave. También puedes copiar `clave.example.js` como `clave.js` con tu clave, y la página la carga sola. `clave.js` está excluido del repositorio.

## Datos

Se guardan en el navegador de cada persona. No se comparten entre dispositivos. Los mensajes y actividades de ejemplo no son reales.

## Estado

Beta. El mensaje o el chat se pega a mano: la lectura automática de WhatsApp es la siguiente fase.
