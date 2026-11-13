# Guía de uso y mantenimiento

Curso: **Gestión estratégica de experiencias y servicio en los procesos de atracción y selección de talento humano**
Herramienta E-learning académica · HTML5, CSS3 y JavaScript puro · sin dependencias.

---

## 1. Cómo ejecutar el curso

1. Descargue o clone la carpeta del proyecto.
2. Abra el archivo `index.html` con doble clic en cualquier navegador moderno (Chrome, Edge, Firefox, Safari).
3. No se requiere servidor, instalación ni conexión a internet.

El progreso se guarda en el almacenamiento local del navegador (`localStorage`). Si el participante cambia de equipo o de navegador, el avance no se transfiere. Desde la pantalla **Resultados y cierre** puede exportar un archivo JSON con todas las respuestas e imprimir la constancia.

Opcional: si prefiere servirlo por HTTP (por ejemplo, para publicarlo en un LMS o en un hosting estático), copie la carpeta completa tal cual; no hay pasos de compilación.

## 2. Organización del proyecto

```
index.html          Estructura de la página (barra superior, menú lateral, contenedor principal).
css/styles.css      Diseño: variables de color, componentes, responsive e impresión.
js/content.js       TODO el contenido del curso como datos (pantallas, módulos, lecciones,
                    actividades, casos, cuestionarios, encuesta, ponderación).
js/script.js        Motor: rutas, navegación, progreso, cuestionarios, escenarios,
                    calificación, almacenamiento local, exportación e impresión.
assets/             Logotipo y favicon (SVG propios).
docs/               Análisis documental, propuesta y esta guía.
```

Regla básica: **el contenido se edita en `js/content.js`; la lógica en `js/script.js`; el aspecto en `css/styles.css`.** Para cambiar textos, preguntas o añadir lecciones no es necesario tocar el motor.

## 3. Cómo modificar o "subir" material de aprendizaje

Todo el material está en `js/content.js` dentro del objeto `window.COURSE`. Después de editar, guarde el archivo y recargue el navegador.

### 3.1 Cambiar textos generales
- `meta`: título, empresa, departamento, duración, aviso académico.
- `objectives`: objetivo general, específicos, misión y visión.
- `orientation`: ruta de cinco días, tipos de contenido, reglas.
- `grading`: ponderaciones y nota mínima. Los pesos deben sumar 100.

### 3.2 Añadir una lección
Dentro del módulo correspondiente (`modules[n].items`) agregue un objeto:

```js
{ type: 'lesson', id: 'l4', title: 'Título de la lección', time: '15 min',
  blocks: [
    { type: 'p', text: 'Párrafo. Use **negritas** con dobles asteriscos.' },
    { type: 'h', text: 'Subtítulo' },
    { type: 'list', items: ['Punto uno', 'Punto dos'] },
    { type: 'callout', variant: 'key', title: 'Idea clave', text: '...' },   // variantes: key, example, tip
    { type: 'cards', items: [{ title: '...', text: '...' }] },
    { type: 'table', head: ['Col 1', 'Col 2'], rows: [['a', 'b']] },
    { type: 'steps', items: [{ title: 'Paso', text: '...' }] },
    { type: 'compare', left: { title: '...', items: [] }, right: { title: '...', items: [] } },
    { type: 'accordion', items: [{ title: '...', text: '...' }] }
  ] }
```

El `id` debe ser único dentro del módulo. El menú, el progreso y la navegación se actualizan solos.

### 3.3 Añadir o editar preguntas
Tipos admitidos en cuestionarios, casos, diagnóstico y evaluación final:

```js
// Opción única: una sola opción con correct: true. Cada opción lleva su retroalimentación.
{ id: 'q5-1', type: 'single', text: '¿...?', options: [
  { text: 'A', correct: false, feedback: 'Por qué no.' },
  { text: 'B', correct: true,  feedback: 'Por qué sí.' } ] }

// Verdadero / falso
{ id: 'q5-2', type: 'tf', text: 'Afirmación.', answer: false, feedback: 'Explicación.' }

// Opción múltiple: varias correctas; retroalimentación general. Se califica todo o nada.
{ id: 'q5-3', type: 'multi', text: '¿...?', options: [
  { text: 'A', correct: true }, { text: 'B', correct: false } ], feedback: '...' }

// Ordenar: escriba los elementos en el orden correcto; el motor los baraja.
{ id: 'q5-4', type: 'order', text: 'Ordene...', items: ['Primero', 'Segundo', 'Tercero'], feedback: '...' }
```

Cada pregunta vale lo mismo; el puntaje es el porcentaje de aciertos.

### 3.4 Añadir actividades
- **Clasificación** (`kind: 'classify'`): `categories` con `id` y `label`; `items` con `text`, `cat` (id de la categoría correcta) y `feedback`.
- **Formulario de reflexión, investigación o plan** (`kind: 'form'`): `fields` con `id`, `label`, `min` (caracteres mínimos) y `rows`.
- **Escenario de decisiones** (`kind: 'scenario'`): `nodes`, cada uno con `text` y `options` (`text`, `quality: 'good' | 'mid' | 'bad'`, `feedback`); `endings` con un texto por nivel.

Todas las actividades cuentan para el componente de participación al completarse.

### 3.5 Caso integrador, evaluación final y encuesta
- `integrator.steps`: cuatro pasos, cada uno con `questions` y una respuesta escrita `written`.
- `finalExam.questions`: mismas reglas de pregunta; `mode: 'deferred'` muestra la retroalimentación al entregar.
- `survey.items`: afirmaciones de la escala 1 a 5.

### 3.6 Cambiar la identidad visual
En `css/styles.css`, al inicio, están las variables `--navy-800`, `--gold-500`, etc. Cambiar esos valores actualiza toda la interfaz. El logotipo está en `assets/logo.svg`.

## 4. Cómo se calcula la nota

| Componente | Peso | Cálculo |
|---|---|---|
| Cuestionarios de módulos | 20 % | Promedio de los 4 cuestionarios (70 %) + evaluación final (30 %). |
| Análisis de casos | 25 % | Promedio de las preguntas calificadas de los casos 1 y 2. |
| Participación | 15 % | Actividades completadas / total de actividades. |
| Caso integrador | 40 % | Promedio de las preguntas calificadas de los 4 pasos. |

Aprobación: 80/100. Los componentes pendientes cuentan como cero y se marcan "Pendiente" hasta completarse. Las respuestas escritas no se califican automáticamente; se guardan y se exportan para el facilitador.

## 5. Reglas de desbloqueo
- Cuestionario de módulo: requiere las lecciones de ese módulo completadas.
- Caso integrador y evaluación final: requieren los cuatro módulos completos.
- Encuesta: requiere caso integrador y evaluación final.
- La constancia imprimible se habilita al completar todos los elementos.

## 6. Guion de demostración en clase (5 minutos)

La guía académica pide explicar cómo funciona la herramienta y cómo se sube material. Secuencia sugerida:

| Min | Qué mostrar |
|---|---|
| 0:00 | Abrir `index.html`. Portada: contexto, aviso académico, nombre del participante, "Comenzar". |
| 0:45 | "Cómo usar el curso": ruta de 5 días, tipos de contenido, sistema de evaluación 20/25/15/40. |
| 1:30 | Módulo 1: una lección (bloques, ejemplo hipotético, "Completar y continuar"), la actividad de clasificación y el cuestionario con retroalimentación inmediata. Mostrar la barra de progreso y el menú lateral actualizándose. |
| 2:45 | Escenario de decisiones del Módulo 3 (consecuencias por opción) y el caso integrador bloqueado hasta completar los módulos. |
| 3:30 | **Cómo se sube material**: abrir `js/content.js`, mostrar una lección, añadir un bloque `p` o una pregunta, guardar, recargar y verla publicada. |
| 4:30 | Resultados: tabla por componente, comparación diagnóstica/final, exportar JSON e imprimir constancia. Cierre. |

## 7. Reiniciar
- Cada cuestionario, actividad y escenario tiene su botón de reinicio.
- "Reiniciar el curso" en Resultados borra todo el progreso del navegador.
- Manualmente: en la consola del navegador ejecute `localStorage.removeItem('curso-experiencias-seleccion-v1')`.

## 8. Compatibilidad y accesibilidad
- Navegadores modernos; no requiere complementos.
- Navegación completa por teclado, etiquetas ARIA en cuestionarios y menú, foco visible, contraste AA, respeto a `prefers-reduced-motion`.
- Responsive: escritorio, tableta y móvil (menú lateral deslizable en pantallas pequeñas).
