# Fase 1 y 2 — Análisis documental y propuesta de estructura

Curso: **Gestión estratégica de experiencias y servicio en los procesos de atracción y selección de talento humano**
Contexto académico: UMG · Maestría en Gestión Estratégica del Talento Humano · Curso Gestión del Conocimiento
Público: Especialistas de Atracción y Selección · Modalidad 100 % virtual · 5 días hábiles · 8 h estimadas

---

## 1. Qué dice cada documento

| Documento | Qué aporta | Observación |
|---|---|---|
| **Curso E-Learning (docx)** | Propuesta académica completa (secciones I–XVIII): visión, alineación con misión/visión, tecnología, 6 objetivos específicos, canales, garantía de satisfacción, necesidad de aprendizaje, 5 modalidades (Reflexión, Retención, Adaptación, Investigación, Exploración), estrategias didácticas, 6 elementos de aprendizaje, metodologías, cronograma de 5 días, sistema de evaluación (20/25/15/40, mínimo 80), resultados esperados. | Es la fuente principal de contenido y estructura. |
| **Presentación (pdf, 13 láminas)** | Síntesis visual del docx. Añade el desglose temático por módulo (lámina 10), la carga horaria (3h teoría, 2h práctica, 2h casos, 1h evaluación) y la paleta visual (azul marino + dorado/naranja). | No contiene información nueva relevante que no esté en el docx, salvo el desglose de la lámina 10. |
| **Guía de Investigar Herramienta E-learning (pdf, 1 página)** | Objetivos: habilidades de orden superior y "elaboración de un blog en una herramienta digital". Instrucción: buscar una herramienta (gratuita o con licencia temporal) y **explicar cómo funciona y de qué forma se puede subir material de aprendizaje**. Presentación en clase de **máximo 5 minutos**. Ponderación: 5 puntos. | **No contiene criterios de evaluación del curso ni lista de elementos que deba incluir la herramienta.** |

## 2. Contradicciones e información faltante detectadas

1. **La guía adjunta no es la que describe el prompt.** El prompt dice que la guía "establece los elementos que debe incluir la herramienta E-learning". La guía real pide investigar una herramienta y demostrar en 5 minutos cómo funciona y cómo se sube material. El docx cita en su bibliografía otro documento, *"Guía de Creación de Curso o Capacitación E-learning"* (UMG), que probablemente es el que contiene los criterios (las 5 modalidades, los 6 elementos, etc.). **No fue adjuntado.** Mientras no lo tenga, usaré como lista de verificación las 18 secciones del docx, que evidentemente siguen esa guía.
2. **Implicación de diseño derivada de la guía real:** la herramienta debe poder explicarse en 5 minutos y debe demostrarse cómo se "sube" material. Por eso el contenido del curso vivirá en un archivo de datos separado (`js/content.js`) y habrá una guía breve de cómo añadir una lección o pregunta. Eso convierte el requisito en una demostración concreta.
3. **Objetivos específicos:** la lámina 4 muestra 4 y su nota habla de "5 metas"; el docx lista 6. Se usarán los **6 del docx**.
4. **Funciones que requieren servidor o LMS real** (foros, mensajería interna, correo, sesión sincrónica de cierre, videos): no pueden existir de forma genuina en un sitio estático. No se simularán. Se sustituyen por equivalentes locales etiquetados como tales (ver sección 5) y se mencionan en la orientación como parte del diseño del programa.
5. **Caso integrador (40 %) y participación en foros (15 %):** en el diseño original son calificados por un facilitador. Aquí la parte estructurada del caso se autocalifica; las partes escritas se exigen para completar, se guardan y se pueden imprimir/exportar para revisión del facilitador. Se declarará explícitamente en la pantalla de resultados.
6. **Videos educativos:** no existe material audiovisual en los documentos. No se incluirán reproductores vacíos.
7. **Información institucional:** los documentos no contienen políticas, procedimientos ni cifras de Banco Industrial. Todos los casos serán **hipotéticos y etiquetados como tales**. La identidad visual se inspira en la presentación (azul marino + acento dorado) con un aviso de "material académico, no plataforma oficial".

## 3. Requisitos del producto final (lista de verificación)

Derivados del prompt, del docx y de la guía:

- [ ] HTML5 + CSS3 + JS vanilla, sin dependencias, abre con doble clic en `index.html`.
- [ ] Bienvenida · Objetivos · Cómo usar el curso · 4 módulos · Evaluación integradora · Finalización.
- [ ] Las 5 modalidades del docx presentes como actividades reales: Reflexión, Retención, Adaptación, Investigación, Exploración.
- [ ] Los 6 elementos de aprendizaje visibles en el diseño: Evaluación, Imaginación, Adaptación, Abstracción, Resolución de problemas, Contextualización.
- [ ] Sistema de evaluación 20/25/15/40 y criterio de aprobación 80/100 calculado realmente.
- [ ] Evaluación diagnóstica (entrada) y evaluación final (salida), como piden el docx (VI.2) y la lámina 12 (pre/post-test).
- [ ] Encuesta de satisfacción con los 5 criterios del docx (VI.1).
- [ ] Compromiso de "1 mejora al puesto" (docx VI.3, lámina 12).
- [ ] Progreso general, lecciones completadas, persistencia en LocalStorage, reinicio de actividades y del curso.
- [ ] Retroalimentación inmediata en cada pregunta.
- [ ] Responsive, accesible por teclado, sin elementos decorativos sin función.
- [ ] Demostrable en 5 minutos y con guía de cómo añadir material (guía real).

## 4. Estructura propuesta del curso

### Pantallas de marco
| Pantalla | Contenido |
|---|---|
| **Bienvenida** | Título, contexto (empresa, departamento, población, modalidad, duración), botón "Comenzar" o "Continuar donde lo dejé", aviso académico. |
| **Objetivos de aprendizaje** | Objetivo general + 6 específicos + resultado esperado (caso práctico). Conexión con misión y visión (lámina 2 / docx II). |
| **Cómo usar el curso** | Ruta de 5 días, tipos de actividad y su ícono, sistema de evaluación (20/25/15/40, mínimo 80), cómo se guarda el progreso, qué funciones requieren el LMS institucional (foros, sesión de cierre). |
| **Evaluación diagnóstica** | 8 preguntas. No pondera. Se guarda para comparar con la evaluación final (pre/post). |

### Módulo 1 · Día 1 · Cultura de servicio y experiencia del cliente (~1 h 40)
| Lección / actividad | Contenido | Modalidad / elemento |
|---|---|---|
| 1.1 Selección como servicio | Por qué seleccionar no es solo filtrar candidatos: dos clientes, dos experiencias. Visión e-learning. | Contextualización |
| 1.2 Clientes internos y externos | Jefes de agencia y candidatos: qué espera cada uno (acompañamiento, certidumbre, comunicación, trato, seguimiento). | Abstracción |
| 1.3 Del rol operativo al estratégico | Evolución del rol; impacto del servicio en eficiencia, percepción y atracción de talento. Alineación con misión y visión. | Abstracción |
| **Actividad: Clasificar expectativas** | Arrastrar/asignar 8 enunciados al cliente interno o externo, con retroalimentación. | **Retención** |
| **Actividad: Autorreflexión inicial** | Pregunta orientadora del docx IX.1 + 2 preguntas guía. Respuesta escrita (mínimo de caracteres), guardada. | **Reflexión** · cuenta para Participación |
| **Cuestionario M1** | 5 preguntas, retroalimentación inmediata, reintentable. | Evaluación · 20 % |

### Módulo 2 · Día 2 · Experiencia del candidato (cliente externo) (~1 h 40)
| Lección / actividad | Contenido | Modalidad / elemento |
|---|---|---|
| 2.1 El recorrido del candidato | Etapas del proceso desde la óptica del candidato y "momentos de verdad". Consecuencias de una mala experiencia aunque no sea seleccionado (docx VII.2). | Contextualización |
| 2.2 Comunicación efectiva y transparencia | Claridad, oportunidad, tono profesional, información sobre etapas y tiempos. Ejemplos de mensajes (hipotéticos). | Abstracción |
| 2.3 Retroalimentación y seguimiento | Cierre del proceso con todos los candidatos, retroalimentación respetuosa, seguimiento. | Adaptación |
| **Caso práctico 1** (hipotético) | Candidato sin respuesta tras entrevista. Identificar problema, causas y mejor curso de acción (preguntas calificadas) + justificación breve. | **ABP / casos** · 25 % |
| **Actividad: Investigación guiada** | Registrar 3 buenas prácticas de experiencia del candidato investigadas por el participante y 1 acción aplicable a su entorno. | **Investigación** · Participación |
| **Cuestionario M2** | 5 preguntas. | 20 % |

### Módulo 3 · Día 3 · Experiencia del cliente interno (jefes de agencia) (~1 h 40)
| Lección / actividad | Contenido | Modalidad / elemento |
|---|---|---|
| 3.1 Qué espera un jefe de agencia | Acompañamiento cercano, certidumbre en tiempos de cobertura, gestión proactiva de expectativas (lámina 3). | Contextualización |
| 3.2 Levantamiento de perfil y necesidades | Preguntas clave para entender la necesidad real de la agencia; acuerdos iniciales. | Abstracción |
| 3.3 Alinear tiempos y expectativas | Urgencia vs. etapas obligatorias del proceso; comunicar avances; qué hacer cuando no se cumple un plazo. | Adaptación |
| **Actividad: Escenario adaptativo** | El ejemplo del docx IX.3: jefe con vacante urgente vs. proceso con etapas. Elegir respuesta en 3 momentos; cada opción muestra consecuencia. | **Adaptación / Exploración** · Participación |
| **Caso práctico 2** (hipotético) | Expectativas de tiempo no gestionadas. Preguntas calificadas + propuesta breve. | 25 % |
| **Cuestionario M3** | 5 preguntas. | 20 % |

### Módulo 4 · Día 4 · Resolución de problemas y mejora continua (~1 h 40)
| Lección / actividad | Contenido | Modalidad / elemento |
|---|---|---|
| 4.1 Manejo de objeciones y situaciones difíciles | Estructura para responder a reclamos de jefes y candidatos; escuchar, reconocer, informar, acordar. | Resolución de problemas |
| 4.2 Análisis de causa raíz | Técnica de los 5 porqués aplicada a un cuello de botella de selección (ejemplo hipotético). | Resolución de problemas |
| 4.3 Indicadores y mejora continua | Los indicadores del docx VI.4 y lámina 12: % finalización, calificación promedio, satisfacción, aplicación, percepción de jefes. Cómo convertir un indicador en una iniciativa. | Evaluación continua |
| **Actividad: Simulación de decisiones** | Escenario ramificado con candidato y jefe de agencia a la vez; 4 decisiones; resultado según el camino. | **Exploración / Imaginación** · Participación |
| **Actividad: Mi plan de 1 mejora** | Formulario estructurado: situación, causa, mejora, indicador, fecha. Guardado e imprimible (docx VI.3). | Transferencia · Participación |
| **Cuestionario M4** | 5 preguntas. | 20 % |

### Día 5 · Evaluación integradora (~1 h 20)
| Componente | Contenido | Peso |
|---|---|---|
| **Caso integrador** (hipotético) | Situación que involucra a un jefe de agencia y a un candidato. 4 pasos guiados: identificar el problema, analizar causas, elegir y justificar solución, definir seguimiento. Pasos estructurados autocalificados; redacciones obligatorias guardadas para el facilitador. Se desbloquea al completar los 4 módulos. | 40 % |
| **Evaluación final** | 15 preguntas que cubren los 4 módulos. Nota inmediata, revisión de respuestas, comparación con la diagnóstica. | Componente de "Cuestionarios" junto con los 4 de módulo |
| **Encuesta de satisfacción** | 5 ítems del docx VI.1 en escala 1–5 + comentario. Sin peso. | — |
| **Finalización** | Nota global sobre 100 por componente (20/25/15/40), estado Aprobado/No aprobado (≥ 80), comparación pre/post, resumen del plan de mejora, constancia imprimible de uso académico, exportar/imprimir respuestas, reiniciar curso. | — |

**Nota sobre el componente "Cuestionarios de módulos" (20 %):** se calculará como promedio de los 4 cuestionarios de módulo (70 %) y la evaluación final (30 %) dentro de ese 20 %. Alternativa: tratar la evaluación final como parte del caso integrador. Es una decisión a confirmar.

## 5. Equivalentes locales de funciones que requieren LMS

| En el diseño original | En esta herramienta | Etiqueta en pantalla |
|---|---|---|
| Foros de discusión | "Bitácora de participación": reflexión, investigación, escenarios y plan de mejora, guardados localmente y exportables. | "En el LMS institucional esta actividad se comparte en el foro del módulo." |
| Mensajería interna / correo | No se simula. Se describe en "Cómo usar el curso". | — |
| Sesión virtual de cierre (Día 5) | No se simula. Se menciona en la ruta del Día 5. | — |
| Videos | No se incluyen. Las lecciones son texto estructurado + componentes interactivos. | — |

## 6. Funcionalidades técnicas

- Aplicación de una sola página con rutas por `hash` (`#/modulo/2/leccion/1`), navegación lateral con estado por lección (pendiente / en curso / completada) y botones anterior/siguiente.
- Barra de progreso general (porcentaje de ítems completados) y progreso por módulo.
- Secuencia flexible: las lecciones son libres; cada cuestionario requiere haber abierto las lecciones de su módulo; el caso integrador y la evaluación final requieren los 4 módulos completados.
- Motor de cuestionarios reutilizable: opción única, opción múltiple, verdadero/falso, ordenar, clasificar. Validación, retroalimentación por opción, puntaje, reintento.
- Motor de escenarios ramificados reutilizable (datos declarativos).
- Persistencia en `localStorage` con versión de esquema; reinicio por actividad y reinicio total con confirmación.
- Cálculo de nota según ponderación configurable en `content.js`.
- Impresión de constancia y resumen (hoja de estilos de impresión).
- Accesibilidad: navegación por teclado, roles ARIA en cuestionarios y navegación, contraste AA, `prefers-reduced-motion`.
- Responsive: menú lateral colapsable en móvil, tipografía fluida.

## 7. Organización del proyecto

```
index.html                 Estructura y plantillas
css/styles.css             Diseño (variables, componentes, responsive, impresión)
js/content.js              TODO el contenido del curso como datos (lecciones, actividades, preguntas, ponderación)
js/script.js               Motor: rutas, render, cuestionarios, escenarios, progreso, calificación, almacenamiento
assets/                    Logo/ilustraciones SVG propias e iconos
docs/                      Este análisis, guía de uso y guía para modificar contenidos
```

## 8. Decisiones a confirmar antes de programar

1. ¿Existe la *"Guía de Creación de Curso o Capacitación E-learning"* citada en el docx? Si sí, adjuntarla cambia la lista de verificación. Si no, se procede con el docx como referencia.
2. ¿Aceptas el tratamiento del caso integrador (parte autocalificada + redacciones exportables para el facilitador)?
3. ¿Aceptas que la evaluación final se integre al componente "Cuestionarios" (20 %) como se describe en la sección 4?
4. ¿Idioma de la interfaz: español neutro formal (propuesto)?
