# Cuadro de Mando - Emergencias Sanitarias con IA

Este es un Cuadro de Mando interactivo diseñado para centros educativos y deportivos en Andalucía, que proporciona protocolos claros de actuación ante emergencias sanitarias.

## Características

- 🚑 **Protocolos Detallados**: Basados en normativas de primeros auxilios.
- ✨ **Asistente de IA**: Integración con Google Gemini (vía Netlify Functions) para ayudar en la toma de decisiones, generación de informes y comunicados.
- 🎙️ **Comandos de Voz**: Soporte para descripción de incidentes mediante voz.
- 📄 **Exportación a PDF**: Generación de informes de incidentes en formato PDF.
- 📱 **Diseño Responsivo**: Optimizado para móviles y tablets con Tailwind CSS.

## Tecnologías Utilizadas

- **Frontend**: HTML5, Tailwind CSS, JavaScript.
- **IA**: Google Generative AI (Gemini 1.5 Flash).
- **Backend**: Netlify Functions (Node.js).
- **Librerías**: marked.js (Markdown), html2pdf.js (PDF).

## Despliegue en Vercel

Para que la función de IA funcione correctamente, es necesario:

1. Subir este repositorio a GitHub.
2. Conectar el repositorio a un nuevo proyecto en **Vercel**.
3. Configurar la variable de entorno `GEMINI_API_KEY` en los **Environment Variables** del proyecto en Vercel con una clave válida de [Google AI Studio](https://aistudio.google.com/).

---
Desarrollado por **Jorge García**
