# Curso E-learning · Experiencias y Servicio en Atracción y Selección

Herramienta E-learning desarrollada con HTML5, CSS3 y JavaScript puro para el curso **Gestión del Conocimiento** (Maestría en Gestión Estratégica del Talento Humano, UMG). Implementa el curso virtual de cinco días *"Gestión estratégica de experiencias y servicio en los procesos de atracción y selección de talento humano"*, dirigido a especialistas de Atracción y Selección.

> Material académico. No es una plataforma oficial de Banco Industrial. Los casos son hipotéticos.

## Ejecutar
Abra `index.html` en el navegador. Sin instalación, sin servidor, sin dependencias.

## Contenido
- Bienvenida, objetivos, orientación de uso y evaluación diagnóstica.
- 4 módulos (un día cada uno): 3 lecciones, 2 actividades y 1 cuestionario por módulo; casos prácticos en los módulos 2 y 3.
- Día 5: caso integrador en 4 pasos, evaluación final de 15 preguntas, encuesta de satisfacción y pantalla de resultados con constancia imprimible.
- Actividades de las cinco modalidades del diseño académico: reflexión, retención, adaptación, investigación y exploración.

## Funcionalidades
Navegación por módulos y lecciones, barra de progreso, seguimiento de completados, cuestionarios con validación y retroalimentación inmediata, escenarios de decisión con consecuencias, cálculo de nota según ponderación 20/25/15/40 (mínimo 80), desbloqueo progresivo, reinicio por actividad y total, persistencia en `localStorage`, exportación JSON e impresión.

## Estructura
```
index.html  css/styles.css  js/content.js  js/script.js  assets/  docs/
```
El contenido completo del curso está en `js/content.js`. Véase `docs/02-guia-de-uso-y-mantenimiento.md` para modificar o añadir material y para el guion de demostración de 5 minutos.
