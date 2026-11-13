/* =====================================================================
   CONTENIDO DEL CURSO
   ---------------------------------------------------------------------
   Este archivo contiene TODO el material de aprendizaje: pantallas,
   módulos, lecciones, actividades, casos, cuestionarios y ponderación.
   Para modificar el curso basta con editar este archivo. El motor
   (js/script.js) lee esta estructura y construye la interfaz.

   Convenciones de texto: **negrita** se convierte en <strong>.
   Tipos de bloque de lección: p, h, list, callout, cards, table,
   compare, steps, accordion.
   Tipos de pregunta: single, multi, tf, order.
   ===================================================================== */

window.COURSE = {
  meta: {
    title: 'Gestión estratégica de experiencias y servicio en los procesos de atracción y selección de talento humano',
    shortTitle: 'Experiencias y Servicio en Atracción y Selección',
    company: 'Banco Industrial, S.A.',
    department: 'Atracción y Selección',
    audience: 'Especialistas de Atracción y Selección de Talento Humano',
    modality: 'E-learning (100 % virtual)',
    duration: '1 semana (5 días hábiles)',
    hours: '8 horas estimadas',
    university: 'Universidad Mariano Gálvez de Guatemala',
    faculty: 'Facultad de Ciencias de la Administración',
    program: 'Maestría en Gestión Estratégica del Talento Humano',
    academicCourse: 'Gestión del Conocimiento',
    disclaimer: 'Herramienta E-learning desarrollada con fines académicos para el curso Gestión del Conocimiento (UMG). No es una plataforma oficial de Banco Industrial ni representa sus políticas o procedimientos internos. Los casos presentados son hipotéticos.'
  },

  /* Sistema de evaluación (docx, sección XV) */
  grading: {
    passScore: 80,
    components: [
      { id: 'quizzes', label: 'Cuestionarios de los módulos', weight: 20,
        note: 'Promedio de los cuatro cuestionarios de módulo (70 %) y la evaluación final (30 %).' },
      { id: 'cases', label: 'Análisis de casos prácticos', weight: 25,
        note: 'Promedio de los casos prácticos de los módulos 2 y 3.' },
      { id: 'participation', label: 'Participación en actividades y foros', weight: 15,
        note: 'Porcentaje de actividades de participación completadas (reflexión, clasificación, investigación, escenarios y plan de mejora). En el LMS institucional este componente corresponde a los foros.' },
      { id: 'integrator', label: 'Resolución de caso integrador', weight: 40,
        note: 'Parte estructurada autocalificada. Las respuestas escritas se guardan para revisión del facilitador.' }
    ],
    quizSplit: { modules: 0.7, final: 0.3 }
  },

  /* Pantalla de bienvenida */
  welcome: {
    eyebrow: 'Programa formativo · 5 días hábiles · 100 % virtual',
    headline: 'Del rol operativo a la gestión estratégica de experiencias',
    intro: 'Los procesos de selección no consisten únicamente en identificar candidatos que cumplan requisitos. También implican gestionar experiencias satisfactorias para dos clientes: los **jefes de agencia** que necesitan cubrir una posición y los **candidatos** que esperan trato profesional, información clara y seguimiento.',
    highlights: [
      { icon: 'target', title: '4 módulos + evaluación integradora', text: 'Un módulo por día, con lecciones breves, actividades y un cuestionario.' },
      { icon: 'chat', title: 'Casos y escenarios hipotéticos', text: 'Situaciones de servicio con candidatos y jefes de agencia para practicar decisiones.' },
      { icon: 'chart', title: 'Progreso guardado', text: 'El avance se guarda en este navegador. Puede retomar el curso donde lo dejó.' }
    ]
  },

  /* Objetivos (docx, secciones II, IV y VIII) */
  objectives: {
    general: 'Fortalecer las competencias de servicio, comunicación y gestión estratégica de experiencias de los especialistas de Atracción y Selección de Banco Industrial, mediante una capacitación virtual que permita mejorar la atención brindada a los clientes internos y externos durante los procesos de adquisición de talento humano.',
    specific: [
      'Identificar la importancia de la experiencia del cliente interno y externo dentro de los procesos de atracción y selección.',
      'Desarrollar habilidades de comunicación efectiva, empatía y seguimiento oportuno.',
      'Aplicar estrategias para gestionar expectativas y necesidades de los jefes de agencia y candidatos.',
      'Identificar oportunidades de mejora en la experiencia de los participantes de los procesos de selección.',
      'Aplicar técnicas de resolución de problemas ante situaciones que puedan afectar la calidad del servicio.',
      'Comprender la importancia de los indicadores de satisfacción y eficiencia como herramientas para la mejora continua.'
    ],
    learningOutcome: 'Al finalizar el curso, los especialistas serán capaces de aplicar estrategias de comunicación, servicio, seguimiento y resolución de problemas para gestionar experiencias positivas con los clientes internos y externos, identificando oportunidades de mejora que contribuyan a la eficiencia y calidad de los procesos de adquisición de talento humano.',
    expectedResult: 'Cada participante demostrará, mediante un caso práctico, su capacidad para identificar una situación que afecte la experiencia del cliente, proponer una solución y establecer acciones de seguimiento para mejorar el servicio.',
    mission: [
      'Promover una cultura de servicio y atención profesional.',
      'Fortalecer la calidad de los procesos internos.',
      'Contribuir al cumplimiento de los objetivos organizacionales mediante una adecuada gestión del talento humano.',
      'Fomentar relaciones de confianza con los diferentes grupos de interés.'
    ],
    vision: [
      'Impulsar la mejora continua mediante el aprendizaje y la innovación.',
      'Desarrollar profesionales capaces de adaptarse a las necesidades cambiantes de la organización.',
      'Promover procesos de selección eficientes y orientados a la experiencia.',
      'Fortalecer el posicionamiento del departamento como un socio estratégico para las áreas del negocio.'
    ]
  },

  /* Orientación de uso */
  orientation: {
    route: [
      { day: 'Día 1', title: 'Cultura de servicio y experiencia del cliente', time: '1 h 40 min' },
      { day: 'Día 2', title: 'Experiencia del candidato (cliente externo)', time: '1 h 40 min' },
      { day: 'Día 3', title: 'Experiencia del cliente interno (jefes de agencia)', time: '1 h 40 min' },
      { day: 'Día 4', title: 'Resolución de problemas y mejora continua', time: '1 h 40 min' },
      { day: 'Día 5', title: 'Caso integrador, evaluación final y encuesta', time: '1 h 20 min' }
    ],
    activityTypes: [
      { kind: 'lesson', label: 'Lección', text: 'Contenido breve con ejemplos. Al terminar, pulse "Completar y continuar".' },
      { kind: 'activity', label: 'Actividad', text: 'Ejercicios de clasificación, reflexión, investigación, escenarios y plan de mejora. Cuentan para el componente de participación.' },
      { kind: 'case', label: 'Caso práctico', text: 'Situación hipotética con preguntas calificadas y una respuesta escrita.' },
      { kind: 'quiz', label: 'Cuestionario', text: 'Preguntas con retroalimentación inmediata. Se desbloquea al completar las lecciones del módulo y puede repetirse.' },
      { kind: 'integrator', label: 'Caso integrador', text: 'Evaluación del Día 5 en cuatro pasos. Se desbloquea al completar los cuatro módulos.' }
    ],
    rules: [
      'Las lecciones pueden recorrerse libremente. El cuestionario de cada módulo se habilita cuando sus lecciones están completadas.',
      'El caso integrador y la evaluación final se habilitan al completar los cuatro módulos.',
      'Los cuestionarios y actividades pueden reiniciarse. Se conserva el último resultado.',
      'El progreso se guarda automáticamente en este navegador (almacenamiento local). Si cambia de equipo o borra los datos del navegador, el avance no se conserva.',
      'Puede exportar e imprimir sus respuestas desde la pantalla de resultados para entregarlas al facilitador.'
    ],
    lmsNote: 'Este curso está diseñado para ejecutarse dentro del LMS institucional. Los foros de discusión, la mensajería interna, el correo institucional y la sesión virtual sincrónica de cierre del Día 5 son canales de ese entorno y no forman parte de esta herramienta. Las actividades de participación se registran aquí y pueden compartirse en el foro correspondiente.'
  },

  /* Evaluación diagnóstica (pre-test). No pondera. */
  diagnostic: {
    id: 'diagnostico',
    title: 'Evaluación diagnóstica',
    intro: 'Ocho preguntas para conocer su punto de partida. No afecta la calificación. Al finalizar el curso podrá comparar este resultado con la evaluación final.',
    mode: 'deferred',
    questions: [
      { id: 'd1', type: 'single', text: '¿Quiénes son los clientes internos del departamento de Atracción y Selección?',
        options: [
          { text: 'Los candidatos que participan en los procesos.', correct: false, feedback: 'Los candidatos son el cliente externo.' },
          { text: 'Los jefes de agencia y áreas que solicitan cubrir posiciones.', correct: true, feedback: 'Correcto. Son quienes requieren acompañamiento y soluciones oportunas.' },
          { text: 'Los proveedores de pruebas psicométricas.', correct: false, feedback: 'Son proveedores, no clientes del servicio de selección.' },
          { text: 'Únicamente la gerencia general.', correct: false, feedback: 'El cliente interno directo es quien solicita la posición.' }
        ] },
      { id: 'd2', type: 'tf', text: 'La experiencia que vive un candidato que no es seleccionado no tiene impacto en la percepción de la organización.',
        answer: false, feedback: 'Falso. Una experiencia inadecuada afecta la percepción incluso cuando el candidato no resulta seleccionado.' },
      { id: 'd3', type: 'single', text: 'Según el diagnóstico del curso, ¿dónde se ubica la brecha principal de aprendizaje?',
        options: [
          { text: 'En la evaluación técnica de perfiles.', correct: false, feedback: 'La parte técnica no es la brecha identificada.' },
          { text: 'En el manejo de relaciones y la comunicación continua con candidatos y jefes de agencia.', correct: true, feedback: 'Correcto.' },
          { text: 'En el dominio de la plataforma LMS.', correct: false, feedback: 'La plataforma es el medio, no la brecha.' },
          { text: 'En el conocimiento del marco legal laboral.', correct: false, feedback: 'No es la brecha identificada en los documentos del curso.' }
        ] },
      { id: 'd4', type: 'multi', text: 'Seleccione lo que un jefe de agencia espera del departamento durante un proceso de selección.',
        options: [
          { text: 'Acompañamiento cercano.', correct: true },
          { text: 'Certidumbre en los tiempos de cobertura.', correct: true },
          { text: 'Que se omitan etapas para acelerar la contratación.', correct: false },
          { text: 'Gestión proactiva de expectativas.', correct: true }
        ], feedback: 'Acompañamiento, certidumbre y gestión proactiva. Omitir etapas pone en riesgo la calidad de la contratación.' },
      { id: 'd5', type: 'single', text: 'Un candidato escribe porque no recibió respuesta tras una entrevista hace dos semanas. ¿Cuál es la mejor acción inmediata?',
        options: [
          { text: 'Esperar a tener la decisión final para responder.', correct: false, feedback: 'Prolonga el silencio y agrava la experiencia.' },
          { text: 'Responder de inmediato, reconocer la demora, informar el estado y dar una nueva fecha de aviso.', correct: true, feedback: 'Correcto. Cierra el vacío de información y restablece la confianza.' },
          { text: 'Indicarle que el proceso tiene sus tiempos.', correct: false, feedback: 'No reconoce la situación ni ofrece certidumbre.' },
          { text: 'Derivarlo con el jefe de agencia.', correct: false, feedback: 'La comunicación con el candidato es responsabilidad del especialista.' }
        ] },
      { id: 'd6', type: 'single', text: '¿Qué técnica permite identificar la causa raíz de un problema recurrente en el servicio?',
        options: [
          { text: 'Encuesta de clima.', correct: false, feedback: 'Mide percepción general, no causas de un problema concreto.' },
          { text: 'Los cinco porqués.', correct: true, feedback: 'Correcto. Pregunta sucesivamente "¿por qué?" hasta llegar a la causa de fondo.' },
          { text: 'Entrevista por competencias.', correct: false, feedback: 'Es una técnica de evaluación de candidatos.' },
          { text: 'Publicación de la vacante.', correct: false, feedback: 'Es una etapa del proceso, no una técnica de análisis.' }
        ] },
      { id: 'd7', type: 'tf', text: 'Gestionar expectativas significa prometer al jefe de agencia el plazo que solicita para mantener la relación.',
        answer: false, feedback: 'Falso. Gestionar expectativas es acordar plazos realistas, explicar las etapas y comunicar avances y desviaciones a tiempo.' },
      { id: 'd8', type: 'multi', text: '¿Cuáles de los siguientes son indicadores propuestos en el curso para dar seguimiento al aprendizaje y al servicio?',
        options: [
          { text: 'Porcentaje de finalización del curso.', correct: true },
          { text: 'Percepción de los jefes de agencia sobre la calidad de la atención.', correct: true },
          { text: 'Número de publicaciones en redes sociales.', correct: false },
          { text: 'Calificación promedio de las evaluaciones.', correct: true }
        ], feedback: 'Los indicadores del curso son finalización, calificación promedio, satisfacción, aplicación en el puesto y percepción de clientes internos y externos.' }
    ]
  },

  /* ================================================================
     MÓDULOS
     ================================================================ */
  modules: [
    /* ---------------- MÓDULO 1 ---------------- */
    {
      id: 'm1', day: 1,
      title: 'Cultura de servicio y experiencia del cliente',
      summary: 'Conceptos de servicio, identificación de clientes internos y externos y autodiagnóstico del propio rol.',
      time: '1 h 40 min',
      items: [
        { type: 'lesson', id: 'l1', title: 'La selección como servicio', time: '15 min',
          blocks: [
            { type: 'p', text: 'En las organizaciones actuales la gestión del talento humano es un elemento estratégico. Dentro de ella, el departamento de Atracción y Selección es uno de los principales **puntos de contacto** entre la organización, sus colaboradores y las personas interesadas en formar parte de ella.' },
            { type: 'callout', variant: 'key', title: 'Idea central', text: 'Seleccionar no consiste únicamente en identificar candidatos que cumplan los requisitos de una posición. Consiste también en gestionar experiencias satisfactorias para todos los involucrados.' },
            { type: 'h', text: 'Dos clientes, dos experiencias' },
            { type: 'cards', items: [
              { title: 'Cliente interno: jefes de agencia', text: 'Requieren acompañamiento, comunicación y soluciones oportunas para cubrir sus necesidades de personal.' },
              { title: 'Cliente externo: candidatos', text: 'Esperan un trato profesional, información clara y seguimiento durante su participación en el proceso.' }
            ] },
            { type: 'h', text: '¿Qué es una experiencia de servicio?' },
            { type: 'p', text: 'Es la suma de todas las interacciones que una persona tiene con el departamento a lo largo del proceso: una llamada, un correo, una entrevista, una espera. Cada contacto se percibe y se evalúa. **El silencio también comunica**: una semana sin noticias es, para el candidato o para el jefe de agencia, un mensaje.' },
            { type: 'callout', variant: 'example', title: 'Ejemplo hipotético', text: 'Dos especialistas cubren vacantes equivalentes en el mismo tiempo. La primera informa cada semana al jefe de agencia y a los candidatos sobre el avance. El segundo solo comunica el resultado al final. El resultado operativo es el mismo; la experiencia de servicio es completamente distinta, y también la confianza que cada uno genera.' },
            { type: 'accordion', items: [
              { title: 'Visión E-learning del departamento', text: 'Establecer un modelo de aprendizaje digital continuo que fortalezca las competencias de los especialistas, promoviendo una cultura de servicio, innovación, eficiencia y mejora continua en los procesos de adquisición de talento. La capacitación virtual se concibe como una herramienta estratégica, no como un repositorio pasivo de contenidos.' },
              { title: 'Por qué este curso dura cinco días', text: 'La carga estimada es de ocho horas distribuidas en la semana: tres de contenido, dos de práctica, dos de casos y una de evaluación. Esta distribución protege la operación diaria del área mientras se desarrolla la formación.' }
            ] }
          ] },
        { type: 'lesson', id: 'l2', title: 'Clientes internos y externos', time: '20 min',
          blocks: [
            { type: 'p', text: 'Reconocer a cada cliente, lo que espera y el riesgo de no atenderlo es el primer paso para diseñar una experiencia de servicio consistente.' },
            { type: 'table', head: ['Cliente', 'Quién es', 'Qué espera', 'Riesgo si falla'], rows: [
              ['Interno', 'Jefes de agencia y áreas que solicitan cubrir una posición.', 'Acompañamiento cercano, certidumbre en tiempos de cobertura y gestión proactiva de expectativas.', 'Pérdida de confianza en el departamento, escalamientos y presión por omitir etapas.'],
              ['Externo', 'Candidatos que participan en el proceso, sean o no seleccionados.', 'Comunicación oportuna, trato profesional y seguimiento transparente en todo el proceso.', 'Abandono del proceso, percepción negativa de la organización y menor capacidad de atraer talento.']
            ] },
            { type: 'callout', variant: 'key', title: 'Recuerde', text: 'Una experiencia inadecuada puede afectar la percepción que el candidato tiene de la organización, incluso cuando no resulta seleccionado.' },
            { type: 'h', text: 'Momentos de contacto en un proceso de selección' },
            { type: 'steps', items: [
              { title: 'Solicitud de la vacante', text: 'Primer contacto con el jefe de agencia. Aquí se fijan expectativas.' },
              { title: 'Levantamiento del perfil', text: 'Se acuerdan requisitos, etapas y tiempos.' },
              { title: 'Convocatoria y filtro', text: 'Primer contacto con los candidatos. Se define la impresión inicial.' },
              { title: 'Entrevistas y evaluaciones', text: 'Interacción directa con candidatos; el jefe de agencia espera avances.' },
              { title: 'Decisión y cierre', text: 'Oferta al seleccionado y cierre informado con los demás candidatos.' }
            ] },
            { type: 'compare',
              left: { title: 'Enfoque operativo', items: ['Recibe la solicitud y ejecuta tareas.', 'Informa cuando le preguntan.', 'Cierra el proceso con el seleccionado.', 'Mide vacantes cubiertas.'] },
              right: { title: 'Enfoque de servicio', items: ['Entiende la necesidad detrás de la solicitud.', 'Informa antes de que le pregunten.', 'Cierra el ciclo con todos los participantes.', 'Mide también la experiencia de ambos clientes.'] } }
          ] },
        { type: 'lesson', id: 'l3', title: 'Del rol operativo al rol estratégico', time: '20 min',
          blocks: [
            { type: 'p', text: 'El diagnóstico que origina este curso es claro: la brecha principal no está en la parte técnica de evaluar perfiles, sino en el **manejo de relaciones y la comunicación continua** con candidatos y jefes de agencia.' },
            { type: 'h', text: 'Tres niveles de actuación' },
            { type: 'steps', items: [
              { title: 'Operativo', text: 'Ejecutar tareas: publicar, filtrar, entrevistar, presentar ternas.' },
              { title: 'Relacional', text: 'Gestionar relaciones y expectativas: informar, acordar, anticipar, cerrar ciclos.' },
              { title: 'Estratégico', text: 'Generar valor: identificar oportunidades de mejora, proponer iniciativas y actuar como socio del negocio.' }
            ] },
            { type: 'p', text: 'El curso busca trascender la ejecución de tareas mecánicas hacia la **gestión integral de experiencias y valor del talento humano**. Esto no sustituye la calidad técnica; la complementa.' },
            { type: 'h', text: 'Conexión con la misión y la visión' },
            { type: 'cards', items: [
              { title: 'Con la misión', text: 'Cultura de servicio y atención profesional; calidad de los procesos internos; relaciones de confianza con los grupos de interés.' },
              { title: 'Con la visión', text: 'Mejora continua mediante aprendizaje e innovación; procesos de selección eficientes y orientados a la experiencia; departamento posicionado como socio estratégico.' }
            ] },
            { type: 'callout', variant: 'key', title: 'Impacto del servicio', text: 'La calidad del servicio del especialista influye en la eficiencia de los procesos de selección, en la percepción de la organización y en su capacidad de atraer talento.' }
          ] },
        { type: 'activity', kind: 'classify', id: 'a1', title: 'Actividad: ¿Quién lo espera?', time: '10 min',
          modality: 'Retención',
          intro: 'Asigne cada enunciado al cliente que normalmente lo expresa. Al comprobar recibirá retroalimentación por cada enunciado. Puede corregir y volver a comprobar.',
          categories: [ { id: 'int', label: 'Cliente interno (jefe de agencia)' }, { id: 'ext', label: 'Cliente externo (candidato)' } ],
          items: [
            { id: 'c1', text: '"Necesito saber en cuánto tiempo tendré cubierta la vacante."', cat: 'int', feedback: 'Certidumbre en tiempos de cobertura: expectativa del cliente interno.' },
            { id: 'c2', text: '"¿Pasé a la siguiente etapa? Nadie me ha escrito."', cat: 'ext', feedback: 'Comunicación oportuna: expectativa del candidato.' },
            { id: 'c3', text: '"Quiero que me ayuden a definir bien el perfil que necesito."', cat: 'int', feedback: 'Acompañamiento cercano en el levantamiento del perfil.' },
            { id: 'c4', text: '"Me gustaría recibir retroalimentación aunque no quede seleccionado."', cat: 'ext', feedback: 'Cierre del ciclo y trato profesional para el candidato.' },
            { id: 'c5', text: '"Necesito avances del proceso de mi agencia sin tener que preguntar."', cat: 'int', feedback: 'Gestión proactiva de expectativas hacia el jefe de agencia.' },
            { id: 'c6', text: '"Espero un trato respetuoso en cada entrevista."', cat: 'ext', feedback: 'Trato profesional: expectativa del candidato.' },
            { id: 'c7', text: '"La agencia no puede operar con esta posición vacante."', cat: 'int', feedback: 'La urgencia operativa es la vivencia del jefe de agencia.' },
            { id: 'c8', text: '"Quiero saber qué etapas y documentos siguen."', cat: 'ext', feedback: 'Seguimiento transparente del proceso para el candidato.' }
          ] },
        { type: 'activity', kind: 'form', id: 'a2', title: 'Actividad: Autorreflexión inicial', time: '15 min',
          modality: 'Reflexión',
          intro: 'Analice su experiencia profesional reciente. Escriba con honestidad: esta reflexión es el punto de partida del curso y se retomará en el plan de mejora del Día 4.',
          forumNote: 'En el LMS institucional, esta reflexión se comparte en el foro del Módulo 1.',
          fields: [
            { id: 'f1', label: '¿Qué experiencia reciente en un proceso de selección pudo haber sido mejor y qué acciones habrían permitido mejorarla?', min: 150, rows: 5 },
            { id: 'f2', label: '¿Cuál de sus dos clientes (jefes de agencia o candidatos) recibe hoy menos atención de su parte y por qué?', min: 80, rows: 3 },
            { id: 'f3', label: '¿Qué hábito concreto de comunicación o seguimiento cambiaría esta semana?', min: 60, rows: 3 }
          ] },
        { type: 'quiz', id: 'q1', title: 'Cuestionario del Módulo 1', time: '10 min', mode: 'immediate',
          intro: 'Cinco preguntas con retroalimentación inmediata. Puede repetir el cuestionario; se conserva el último resultado.',
          questions: [
            { id: 'q1-1', type: 'single', text: '¿Cuál enunciado describe mejor el propósito de un proceso de selección según el enfoque de este curso?',
              options: [
                { text: 'Identificar candidatos que cumplan con los requisitos de la posición.', correct: false, feedback: 'Es necesario, pero insuficiente: falta la gestión de la experiencia.' },
                { text: 'Cubrir la vacante en el menor tiempo posible.', correct: false, feedback: 'La rapidez sin gestión de expectativas no garantiza una buena experiencia.' },
                { text: 'Identificar candidatos idóneos y gestionar experiencias satisfactorias para todos los involucrados.', correct: true, feedback: 'Correcto. Resultado técnico y experiencia de servicio van juntos.' },
                { text: 'Reducir el costo de contratación.', correct: false, feedback: 'El costo es una variable, no el propósito del servicio.' }
              ] },
            { id: 'q1-2', type: 'single', text: '¿Quiénes son los clientes internos del departamento de Atracción y Selección?',
              options: [
                { text: 'Los candidatos.', correct: false, feedback: 'Los candidatos son el cliente externo.' },
                { text: 'Los jefes de agencia que solicitan cubrir posiciones.', correct: true, feedback: 'Correcto.' },
                { text: 'Los proveedores de evaluaciones.', correct: false, feedback: 'Son proveedores del proceso.' },
                { text: 'Los demás especialistas del departamento.', correct: false, feedback: 'Son colegas, no clientes del servicio.' }
              ] },
            { id: 'q1-3', type: 'tf', text: 'Un candidato que no es seleccionado no influye en la percepción de la organización.',
              answer: false, feedback: 'Falso. La experiencia de los no seleccionados también construye o deteriora la percepción de la organización.' },
            { id: 'q1-4', type: 'multi', text: 'Seleccione lo que esperan los jefes de agencia del departamento.',
              options: [
                { text: 'Acompañamiento cercano.', correct: true },
                { text: 'Certidumbre en los tiempos de cobertura.', correct: true },
                { text: 'Gestión proactiva de expectativas.', correct: true },
                { text: 'Que se omitan etapas del proceso para ir más rápido.', correct: false }
              ], feedback: 'Acompañamiento, certidumbre y proactividad. Omitir etapas compromete la calidad de la contratación y no es una expectativa legítima de servicio.' },
            { id: 'q1-5', type: 'single', text: 'Según el diagnóstico del curso, la brecha principal del equipo se ubica en:',
              options: [
                { text: 'La evaluación técnica de perfiles.', correct: false, feedback: 'La parte técnica no es la brecha identificada.' },
                { text: 'El manejo de relaciones y la comunicación continua con candidatos y jefes de agencia.', correct: true, feedback: 'Correcto.' },
                { text: 'El uso de tecnología.', correct: false, feedback: 'No es la brecha identificada.' },
                { text: 'El conocimiento de la normativa laboral.', correct: false, feedback: 'No es la brecha identificada.' }
              ] }
          ] }
      ]
    },

    /* ---------------- MÓDULO 2 ---------------- */
    {
      id: 'm2', day: 2,
      title: 'Experiencia del candidato (cliente externo)',
      summary: 'Comunicación, transparencia, retroalimentación y seguimiento a lo largo del recorrido del candidato.',
      time: '1 h 40 min',
      items: [
        { type: 'lesson', id: 'l1', title: 'El recorrido del candidato', time: '15 min',
          blocks: [
            { type: 'p', text: 'Para el candidato, el proceso de selección es una secuencia de **esperas e interacciones**. Comprender qué se pregunta en cada etapa permite anticipar sus necesidades de información.' },
            { type: 'table', head: ['Etapa', 'Lo que el candidato se pregunta', 'Lo que el especialista puede hacer'], rows: [
              ['Postulación', '¿Recibieron mi información? ¿Qué sigue?', 'Confirmar recepción e indicar las etapas y tiempos aproximados.'],
              ['Primer contacto', '¿Qué esperan de mí? ¿Cómo será la evaluación?', 'Explicar el proceso con claridad y resolver dudas.'],
              ['Evaluaciones y entrevistas', '¿Cómo me fue? ¿Cuándo sabré algo?', 'Dar una fecha concreta de siguiente aviso y cumplirla.'],
              ['Espera de decisión', '¿Se olvidaron de mí?', 'Informar avances, aunque no haya decisión. El silencio no es neutral.'],
              ['Cierre', '¿Por qué no fui seleccionado? ¿Puedo volver a participar?', 'Comunicar la decisión a todos, con retroalimentación respetuosa.']
            ] },
            { type: 'callout', variant: 'key', title: 'Momentos de verdad', text: 'Los momentos de mayor impacto en la experiencia suelen ser las esperas: entre la entrevista y la decisión, y después de la decisión. Son también los momentos en que más fácilmente se pierde el contacto.' },
            { type: 'callout', variant: 'example', title: 'Ejemplo hipotético', text: 'Un candidato que participó en tres entrevistas y nunca recibió una respuesta de cierre comenta su experiencia con conocidos. Aunque no fue seleccionado, su relato sobre la organización influye en otros potenciales candidatos. El costo de un correo de cierre es mínimo frente a ese efecto.' }
          ] },
        { type: 'lesson', id: 'l2', title: 'Comunicación efectiva y transparencia', time: '20 min',
          blocks: [
            { type: 'p', text: 'La comunicación efectiva con el candidato no depende de escribir más, sino de escribir **lo necesario, a tiempo y con coherencia**.' },
            { type: 'cards', items: [
              { title: 'Claridad', text: 'Qué etapa es, qué se espera del candidato, qué sigue y cuándo.' },
              { title: 'Oportunidad', text: 'Informar antes de que el candidato tenga que preguntar. Si un plazo no se cumplirá, avisar antes de que venza.' },
              { title: 'Coherencia', text: 'La misma información en todos los canales y por parte de todas las personas que intervienen.' },
              { title: 'Tono profesional y empático', text: 'Respetuoso, directo y consciente de que para el candidato el proceso es importante.' }
            ] },
            { type: 'h', text: 'Transparencia: decir lo que se puede decir' },
            { type: 'p', text: 'Ser transparente no significa compartir información confidencial del proceso. Significa no dejar al candidato sin información sobre su propia situación: en qué etapa está, si sigue o no en el proceso y cuándo tendrá noticias.' },
            { type: 'accordion', items: [
              { title: 'Ejemplo hipotético de redacción: confirmación de recepción', text: '"Gracias por su interés en la posición. Hemos recibido su información. El proceso consta de revisión de perfil, entrevista y evaluaciones. Le escribiremos a más tardar el [fecha] para informarle si avanza a la siguiente etapa."' },
              { title: 'Ejemplo hipotético de redacción: aviso de retraso', text: '"Le escribo para informarle que la decisión sobre la posición tomará más tiempo del previsto. Su candidatura sigue activa. Le confirmaré el estado del proceso el [fecha]. Agradezco su paciencia."' },
              { title: 'Ejemplo hipotético de redacción: siguiente etapa', text: '"Me complace informarle que avanza a la etapa de entrevista. La entrevista será el [fecha y hora], con [cargo del entrevistador], y tendrá una duración aproximada de [tiempo]. Si tiene alguna duda, puede escribirme a este correo."' }
            ] },
            { type: 'callout', variant: 'tip', title: 'Práctica recomendada', text: 'Cada mensaje al candidato debe terminar con una fecha o un siguiente paso. Un mensaje sin siguiente paso genera una nueva espera indefinida.' }
          ] },
        { type: 'lesson', id: 'l3', title: 'Retroalimentación y seguimiento', time: '20 min',
          blocks: [
            { type: 'p', text: 'El cierre del proceso es la última impresión que el candidato se lleva de la organización. Cerrar el ciclo con **todos** los participantes, no solo con el seleccionado, es parte del servicio.' },
            { type: 'h', text: 'Retroalimentación respetuosa' },
            { type: 'list', items: [
              '**Específica y útil**: se refiere al ajuste entre el perfil y la posición, no a la persona.',
              '**Respetuosa**: reconoce el tiempo y el esfuerzo invertidos.',
              '**Prudente**: no compara con otros candidatos ni revela información confidencial.',
              '**Orientada al futuro**: indica si puede participar en procesos posteriores.'
            ] },
            { type: 'h', text: 'Seguimiento: la disciplina detrás de la empatía' },
            { type: 'p', text: 'La empatía se demuestra con acciones: recordar lo acordado y cumplirlo. Un seguimiento efectivo requiere registrar cada contacto, la fecha del próximo aviso y el estado del candidato.' },
            { type: 'steps', items: [
              { title: 'Registrar', text: 'Fecha, canal y contenido de cada contacto.' },
              { title: 'Agendar', text: 'La fecha del próximo aviso, aunque no haya novedades.' },
              { title: 'Cumplir', text: 'Escribir en la fecha prometida, incluso para decir que no hay decisión aún.' },
              { title: 'Cerrar', text: 'Comunicar el resultado a todos los participantes.' }
            ] },
            { type: 'callout', variant: 'key', title: 'Empatía operativa', text: 'Empatía no es solo tono. Es comprender la situación del otro y actuar en consecuencia: el candidato que espera una respuesta puede estar decidiendo entre ofertas, y el silencio le obliga a decidir sin información.' }
          ] },
        { type: 'case', id: 'c1', title: 'Caso práctico 1: El candidato en espera', time: '20 min',
          hypothetical: true,
          context: [
            'Luis participó en una entrevista para una posición en agencia hace diez días. Al finalizar, el especialista le indicó que recibiría noticias "en una semana".',
            'El jefe de agencia pospuso la decisión porque está evaluando reorganizar el equipo, pero no se lo comunicó al especialista hasta ayer. El especialista no escribió a Luis porque no tenía una respuesta definitiva.',
            'Hoy Luis envía un correo: "Buen día, quisiera saber si sigo en el proceso. Me indicaron que me escribirían la semana pasada y no he recibido ninguna información."'
          ],
          questions: [
            { id: 'c1-1', type: 'single', text: '¿Cuál es el problema central de la situación?',
              options: [
                { text: 'Luis es impaciente y no comprende los tiempos de una organización.', correct: false, feedback: 'Luis reaccionó a un plazo incumplido. La responsabilidad de gestionar el plazo es del especialista.' },
                { text: 'El jefe de agencia tardó en decidir.', correct: false, feedback: 'Es una causa contribuyente, pero el problema de servicio es no haber informado el cambio al candidato.' },
                { text: 'No se gestionó la expectativa de tiempo del candidato ni se le informó el cambio en el plazo.', correct: true, feedback: 'Correcto. El problema es de comunicación oportuna, independientemente de la decisión final.' },
                { text: 'Se le dio un plazo al candidato; nunca debe darse un plazo.', correct: false, feedback: 'Dar un plazo es una buena práctica. El error fue no gestionarlo cuando cambió.' }
              ] },
            { id: 'c1-2', type: 'single', text: '¿Cuál es la mejor respuesta inmediata al correo de Luis?',
              options: [
                { text: 'Esperar a que el jefe de agencia decida para responder con información completa.', correct: false, feedback: 'Prolonga el silencio y confirma la percepción de abandono.' },
                { text: 'Responder hoy: agradecer el mensaje, reconocer la demora, informar que la decisión sigue en revisión, dar una nueva fecha concreta de aviso y cumplirla.', correct: true, feedback: 'Correcto. Reconoce, informa lo que se puede informar y restablece una expectativa verificable.' },
                { text: 'Responder que los procesos de la organización tienen sus propios tiempos.', correct: false, feedback: 'No reconoce el incumplimiento ni ofrece certidumbre.' },
                { text: 'Pedirle al jefe de agencia que responda directamente a Luis.', correct: false, feedback: 'La relación con el candidato la gestiona el especialista.' }
              ] },
            { id: 'c1-3', type: 'multi', text: '¿Qué acciones habrían prevenido la situación? Seleccione todas las que correspondan.',
              options: [
                { text: 'Registrar la fecha del próximo aviso a Luis y escribirle antes de que venciera, aunque no hubiera decisión.', correct: true },
                { text: 'Acordar con el jefe de agencia una fecha de decisión al presentar la terna.', correct: true },
                { text: 'No dar plazos a los candidatos para evitar incumplirlos.', correct: false },
                { text: 'Consultar al jefe de agencia el estado de la decisión antes de que venciera el plazo dado al candidato.', correct: true }
              ], feedback: 'Registrar el plazo, acordar la fecha de decisión con el jefe y hacer seguimiento interno antes de que venza el plazo. Eliminar los plazos no resuelve el problema; elimina la certidumbre.' },
            { id: 'c1-4', type: 'single', text: '¿Qué principio de comunicación se incumplió principalmente?',
              options: [
                { text: 'Claridad.', correct: false, feedback: 'El mensaje inicial fue claro; el problema vino después.' },
                { text: 'Oportunidad.', correct: true, feedback: 'Correcto. No se informó antes de que venciera el plazo.' },
                { text: 'Coherencia.', correct: false, feedback: 'No hubo mensajes contradictorios; hubo ausencia de mensaje.' },
                { text: 'Tono profesional.', correct: false, feedback: 'No consta un problema de tono.' }
              ] }
          ],
          written: { id: 'c1-w', label: 'Redacte la respuesta que enviaría hoy a Luis. Debe reconocer la demora, informar el estado y fijar una nueva fecha de aviso.', min: 200, rows: 6 } },
        { type: 'activity', kind: 'form', id: 'a1', title: 'Actividad: Investigación de buenas prácticas', time: '20 min',
          modality: 'Investigación',
          intro: 'Investigue en fuentes confiables (publicaciones especializadas en gestión del talento, estudios sobre experiencia del candidato o servicio al cliente interno) tres buenas prácticas aplicables a los procesos de selección. Registre la fuente de cada una y proponga una acción para su entorno.',
          forumNote: 'En el LMS institucional, los hallazgos se comparten en el foro del Módulo 2 para intercambiar mejores prácticas entre especialistas.',
          fields: [
            { id: 'r1', label: 'Buena práctica 1 (fuente y descripción breve)', min: 80, rows: 3 },
            { id: 'r2', label: 'Buena práctica 2 (fuente y descripción breve)', min: 80, rows: 3 },
            { id: 'r3', label: 'Buena práctica 3 (fuente y descripción breve)', min: 80, rows: 3 },
            { id: 'r4', label: 'Acción concreta que podría aplicar en su entorno de trabajo a partir de lo investigado', min: 100, rows: 4 }
          ] },
        { type: 'quiz', id: 'q2', title: 'Cuestionario del Módulo 2', time: '10 min', mode: 'immediate',
          intro: 'Cinco preguntas con retroalimentación inmediata.',
          questions: [
            { id: 'q2-1', type: 'single', text: '¿En qué momentos del proceso suele tener mayor impacto la experiencia del candidato?',
              options: [
                { text: 'En la publicación de la vacante.', correct: false, feedback: 'Es relevante para la atracción, pero no es el momento crítico de la experiencia.' },
                { text: 'En las esperas entre etapas y después de la decisión.', correct: true, feedback: 'Correcto. Las esperas sin información son los momentos de verdad.' },
                { text: 'Al firmar el contrato.', correct: false, feedback: 'Solo aplica al seleccionado.' },
                { text: 'Durante las pruebas psicométricas.', correct: false, feedback: 'Es una interacción más, no el momento crítico.' }
              ] },
            { id: 'q2-2', type: 'multi', text: 'Seleccione los principios de comunicación efectiva con el candidato presentados en el módulo.',
              options: [
                { text: 'Claridad.', correct: true },
                { text: 'Oportunidad.', correct: true },
                { text: 'Extensión: cuanto más detallado el mensaje, mejor.', correct: false },
                { text: 'Coherencia.', correct: true }
              ], feedback: 'Claridad, oportunidad, coherencia y tono profesional y empático. La extensión no es un principio; la pertinencia sí.' },
            { id: 'q2-3', type: 'tf', text: 'Ser transparente con el candidato implica compartirle toda la información del proceso, incluida la de otros candidatos.',
              answer: false, feedback: 'Falso. Transparencia es no dejarlo sin información sobre su propia situación, respetando la confidencialidad del proceso.' },
            { id: 'q2-4', type: 'single', text: '¿Con qué debe terminar cada mensaje dirigido a un candidato?',
              options: [
                { text: 'Con una disculpa.', correct: false, feedback: 'Solo cuando corresponda.' },
                { text: 'Con una fecha o un siguiente paso concreto.', correct: true, feedback: 'Correcto. Evita generar una nueva espera indefinida.' },
                { text: 'Con los datos del jefe de agencia.', correct: false, feedback: 'La comunicación la centraliza el especialista.' },
                { text: 'Con un resumen de la organización.', correct: false, feedback: 'No aporta al seguimiento.' }
              ] },
            { id: 'q2-5', type: 'single', text: 'Una retroalimentación respetuosa a un candidato no seleccionado debe:',
              options: [
                { text: 'Explicar por qué los otros candidatos fueron mejores.', correct: false, feedback: 'Compara y revela información que no corresponde.' },
                { text: 'Referirse al ajuste entre el perfil y la posición, reconocer el esfuerzo e indicar si puede participar en futuros procesos.', correct: true, feedback: 'Correcto.' },
                { text: 'Evitarse para no generar conflicto.', correct: false, feedback: 'El silencio deteriora la experiencia.' },
                { text: 'Enviarse únicamente si el candidato la solicita.', correct: false, feedback: 'El cierre del ciclo debe ser proactivo.' }
              ] }
          ] }
      ]
    },

    /* ---------------- MÓDULO 3 ---------------- */
    {
      id: 'm3', day: 3,
      title: 'Experiencia del cliente interno (jefes de agencia)',
      summary: 'Atención a jefes de agencia, levantamiento de perfil y alineación de tiempos y expectativas.',
      time: '1 h 40 min',
      items: [
        { type: 'lesson', id: 'l1', title: 'Qué espera un jefe de agencia', time: '15 min',
          blocks: [
            { type: 'p', text: 'Para el jefe de agencia, una posición vacante no es un trámite: es **una operación afectada**. Comprender esa urgencia es la base para atenderlo bien, sin sacrificar la calidad del proceso.' },
            { type: 'cards', items: [
              { title: 'Acompañamiento cercano', text: 'Sentir que el especialista entiende su necesidad y está presente durante todo el proceso, no solo al inicio y al final.' },
              { title: 'Certidumbre en tiempos de cobertura', text: 'Saber cuánto tardará el proceso, en qué etapa está y cuándo recibirá candidatos.' },
              { title: 'Gestión proactiva de expectativas', text: 'Recibir información antes de tener que pedirla, incluidas las malas noticias.' }
            ] },
            { type: 'h', text: 'Cómo se ve en la práctica' },
            { type: 'table', head: ['Expectativa', 'Conducta que la satisface', 'Conducta que la frustra'], rows: [
              ['Acompañamiento', 'Reunión de levantamiento de perfil y contacto periódico acordado.', 'Recibir la solicitud por correo y reaparecer con la terna semanas después.'],
              ['Certidumbre', 'Cronograma con etapas y fechas estimadas, actualizado cuando cambia.', 'Respuestas como "estamos en eso" sin fechas.'],
              ['Proactividad', 'Avisar de un retraso el día que se detecta, con alternativas.', 'Esperar a que el jefe pregunte o escale.']
            ] },
            { type: 'callout', variant: 'key', title: 'Idea central', text: 'La confianza del cliente interno no se construye con la rapidez de un proceso, sino con la previsibilidad: saber qué va a pasar y cuándo.' }
          ] },
        { type: 'lesson', id: 'l2', title: 'Levantamiento de perfil y necesidades', time: '20 min',
          blocks: [
            { type: 'p', text: 'El levantamiento del perfil es el momento en que se define el éxito del proceso. Un perfil mal entendido produce ternas rechazadas, retrabajos y pérdida de confianza.' },
            { type: 'h', text: 'Preguntas clave para comprender la necesidad real' },
            { type: 'list', items: [
              '¿Qué funciones críticas debe cubrir la persona en los primeros meses?',
              '¿Qué competencias son **indispensables** y cuáles son **deseables**?',
              '¿Cómo es el equipo y el contexto de la agencia en el que se integrará?',
              '¿Cuál es la urgencia real y qué la origina?',
              '¿Qué no funcionó en contrataciones anteriores para esta posición?'
            ] },
            { type: 'h', text: 'Acuerdos iniciales: responsabilidades compartidas' },
            { type: 'table', head: ['Acuerdo', 'Compromiso del especialista', 'Compromiso del jefe de agencia'], rows: [
              ['Etapas y tiempos', 'Presentar el cronograma del proceso y sus hitos.', 'Conocer y aceptar las etapas requeridas.'],
              ['Comunicación', 'Informar avances en la frecuencia acordada.', 'Responder consultas sobre el perfil con oportunidad.'],
              ['Entrevistas', 'Coordinar agenda con los candidatos.', 'Disponer tiempo para entrevistar en las fechas acordadas.'],
              ['Decisión', 'Presentar la terna con información comparable.', 'Decidir dentro del plazo acordado o avisar si cambia.']
            ] },
            { type: 'callout', variant: 'example', title: 'Ejemplo hipotético', text: 'Un jefe de agencia solicita "un ejecutivo con experiencia". En el levantamiento, el especialista descubre que la necesidad real es alguien que atienda cartera de clientes con alta rotación y tolere presión por metas. Sin esa conversación, la terna habría cumplido el requisito escrito y fallado en la necesidad.' }
          ] },
        { type: 'lesson', id: 'l3', title: 'Alinear tiempos y expectativas', time: '20 min',
          blocks: [
            { type: 'p', text: 'La tensión más frecuente con el cliente interno es la **urgencia frente a las etapas del proceso**. El jefe necesita cubrir la posición ya; el proceso requiere completar etapas que protegen la calidad de la contratación.' },
            { type: 'h', text: 'Por qué las etapas no se omiten' },
            { type: 'p', text: 'Cada etapa reduce el riesgo de una contratación inadecuada, que cuesta más tiempo y recursos que el proceso completo. Omitir etapas bajo presión traslada el problema al futuro y lo amplifica.' },
            { type: 'h', text: 'Qué sí se puede hacer ante la urgencia' },
            { type: 'list', items: [
              'Explicar las etapas y el valor de cada una, con tiempos estimados realistas.',
              'Priorizar el proceso dentro de la carga del equipo y comunicarlo.',
              'Ampliar o acelerar las fuentes de candidatos sin saltarse filtros.',
              'Acordar hitos intermedios de información, no solo la entrega final.',
              'Anticipar retrasos con alternativas, el mismo día en que se detectan.'
            ] },
            { type: 'h', text: 'Cómo comunicar un retraso' },
            { type: 'steps', items: [
              { title: 'Informar de inmediato', text: 'No esperar a tener la solución completa.' },
              { title: 'Explicar la causa', text: 'De forma concreta y sin culpar a terceros.' },
              { title: 'Proponer alternativas', text: 'Qué se hará distinto y qué impacto tiene en la fecha.' },
              { title: 'Acordar la nueva fecha', text: 'Y registrarla para el siguiente aviso.' }
            ] },
            { type: 'callout', variant: 'tip', title: 'Adaptación', text: 'Ajuste la estrategia de comunicación al perfil del cliente interno: hay jefes que requieren un resumen semanal y otros que necesitan aviso en cada hito. Pregúntelo en el levantamiento del perfil.' }
          ] },
        { type: 'activity', kind: 'scenario', id: 'a1', title: 'Escenario: La vacante urgente', time: '15 min',
          modality: 'Adaptación · Exploración',
          hypothetical: true,
          intro: 'Tome decisiones ante un jefe de agencia con una necesidad urgente. Cada opción muestra sus consecuencias. Al final verá un resumen de sus decisiones. Puede repetir el escenario para explorar otras alternativas.',
          nodes: [
            { id: 'n1', text: 'Marta, jefa de agencia, le llama: "Se fue mi ejecutivo de servicio y necesito a alguien el lunes. No puedo esperar un proceso largo." El proceso completo toma, de forma realista, tres semanas.',
              options: [
                { text: 'Prometer que el lunes tendrá a alguien para calmar la situación.', quality: 'bad', feedback: 'Compromete un plazo imposible. Cuando no se cumpla, la confianza se perderá por completo y Marta sentirá que fue engañada.' },
                { text: 'Reconocer la urgencia, explicar las etapas necesarias y proponer un cronograma realista con hitos de información y algunas acciones para acelerar.', quality: 'good', feedback: 'Reconoce la urgencia sin falsas promesas. Marta sabe qué esperar y cuándo, y percibe que el proceso se priorizará.' },
                { text: 'Indicar que el proceso tiene tiempos establecidos y que no es posible acortarlos.', quality: 'mid', feedback: 'Es honesto, pero no reconoce la situación de Marta ni ofrece alternativas. Ella escalará la solicitud.' }
              ] },
            { id: 'n2', text: 'Una semana después, el candidato más sólido de la terna preliminar se retira del proceso porque aceptó otra oferta. Esto puede retrasar la entrega en cuatro días.',
              options: [
                { text: 'No informar a Marta hasta tener un reemplazo, para no preocuparla.', quality: 'bad', feedback: 'Marta se enterará del retraso cuando venza la fecha, sin aviso previo. La proactividad perdida pesa más que la mala noticia.' },
                { text: 'Informar hoy mismo, explicar la causa, indicar qué se hará para compensar y acordar la nueva fecha.', quality: 'good', feedback: 'Correcto. La mala noticia a tiempo y con alternativas mantiene la confianza.' },
                { text: 'Informar solo que "hubo un contratiempo" sin fecha nueva.', quality: 'mid', feedback: 'Avisa, pero sin certidumbre. Marta tendrá que preguntar y volverá la sensación de incertidumbre.' }
              ] },
            { id: 'n3', text: 'Marta propone: "Conozco a alguien que podría servir. Contrátalo directamente y nos saltamos las evaluaciones, yo respondo por él."',
              options: [
                { text: 'Aceptar para resolver la urgencia y conservar la relación.', quality: 'bad', feedback: 'Omitir etapas traslada el riesgo al futuro: si la contratación falla, el costo será mayor y la responsabilidad recaerá en el departamento.' },
                { text: 'Agradecer la referencia, incorporar al candidato al proceso con prioridad y explicar que las evaluaciones protegen a la agencia de una contratación fallida.', quality: 'good', feedback: 'Aprovecha la referencia, mantiene la integridad del proceso y explica el valor de las etapas en términos del interés de Marta.' },
                { text: 'Rechazar la referencia porque no vino por los canales habituales.', quality: 'mid', feedback: 'Pierde una fuente válida de candidatos y transmite rigidez. La referencia puede entrar al proceso como cualquier otro candidato.' }
              ] },
            { id: 'n4', text: 'El proceso cierra con una contratación en la fecha acordada. Marta le pregunta: "¿Y la próxima vez, cómo lo hacemos para que no se repita la urgencia?"',
              options: [
                { text: 'Responder que la rotación no depende del departamento.', quality: 'bad', feedback: 'Cierra la puerta a una conversación estratégica y devuelve el problema a la agencia.' },
                { text: 'Proponer revisar juntos las causas de la salida, anticipar posiciones críticas y acordar un canal de alerta temprana.', quality: 'good', feedback: 'Convierte el servicio en una relación estratégica: el departamento deja de reaccionar y empieza a anticipar.' },
                { text: 'Sugerir que avise con más tiempo la próxima vez.', quality: 'mid', feedback: 'Es razonable, pero traslada toda la responsabilidad al cliente y no propone nada desde el departamento.' }
              ] }
          ],
          endings: {
            good: 'Excelente gestión. Reconoció la urgencia sin comprometer el proceso, informó de forma proactiva y cerró con una propuesta estratégica. Esa es la evolución del rol operativo al estratégico.',
            mid: 'Gestión aceptable con oportunidades claras. Revise las decisiones marcadas: en varias de ellas la alternativa correcta combinaba honestidad con alternativas concretas.',
            bad: 'La relación con el cliente interno quedó debilitada. Las promesas imposibles, el silencio ante los retrasos y la omisión de etapas resuelven el momento pero deterioran la confianza y la calidad.'
          } },
        { type: 'case', id: 'c1', title: 'Caso práctico 2: Tres semanas sin noticias', time: '20 min',
          hypothetical: true,
          context: [
            'Roberto, jefe de agencia, solicitó cubrir una posición de atención al cliente hace tres semanas. En la reunión inicial el especialista le indicó que el proceso tomaría "alrededor de tres semanas" y no se acordó ninguna comunicación intermedia.',
            'El proceso avanzó con normalidad: se publicó la vacante, se filtraron candidatos y se realizaron las entrevistas iniciales. La terna estará lista en cuatro días.',
            'Hoy Roberto escaló una queja a la gerencia: "Hace tres semanas pedí cubrir una posición y no he recibido ni una sola actualización. No sé si el proceso siquiera inició."'
          ],
          questions: [
            { id: 'c2-1', type: 'single', text: '¿Cuál es el problema central?',
              options: [
                { text: 'El proceso está retrasado.', correct: false, feedback: 'El proceso avanza en el tiempo previsto. El problema no es operativo.' },
                { text: 'Roberto no entiende cómo funcionan los procesos de selección.', correct: false, feedback: 'Responsabilizar al cliente no resuelve el problema de servicio.' },
                { text: 'No se acordaron hitos de comunicación y Roberto no recibió información durante tres semanas, aunque el proceso avanzaba.', correct: true, feedback: 'Correcto. Un proceso que avanza bien pero no se comunica se percibe como un proceso que no existe.' },
                { text: 'El plazo de tres semanas fue demasiado corto.', correct: false, feedback: 'El plazo era realista; faltó comunicación intermedia.' }
              ] },
            { id: 'c2-2', type: 'single', text: '¿Qué debió acordarse en la reunión inicial para evitar la situación?',
              options: [
                { text: 'Un plazo más largo.', correct: false, feedback: 'El plazo no era el problema.' },
                { text: 'Hitos de información periódica y el canal para comunicarlos.', correct: true, feedback: 'Correcto. La certidumbre se construye con información durante el proceso, no solo al final.' },
                { text: 'Que Roberto consultara el estado cuando lo necesitara.', correct: false, feedback: 'Traslada al cliente la responsabilidad de informarse. La proactividad es del especialista.' },
                { text: 'Nada; el proceso se cumplió en tiempo.', correct: false, feedback: 'El resultado operativo no compensa la falta de comunicación.' }
              ] },
            { id: 'c2-3', type: 'single', text: '¿Cuál es la mejor respuesta inmediata ante el escalamiento?',
              options: [
                { text: 'Explicar a la gerencia que el proceso va en tiempo y que la queja es infundada.', correct: false, feedback: 'Defiende el proceso pero ignora la experiencia del cliente, que es real.' },
                { text: 'Contactar a Roberto hoy, reconocer la falta de comunicación, informar el avance real, la fecha de entrega de la terna y acordar la frecuencia de avisos de aquí en adelante.', correct: true, feedback: 'Correcto. Reconoce, informa, da certidumbre y corrige la causa hacia adelante.' },
                { text: 'Enviar la terna cuanto antes, aunque esté incompleta.', correct: false, feedback: 'Sacrifica la calidad para compensar un problema que era de comunicación.' },
                { text: 'Esperar a tener la terna completa en cuatro días y entregarla sin más comentarios.', correct: false, feedback: 'Prolonga la percepción de abandono cuatro días más.' }
              ] },
            { id: 'c2-4', type: 'multi', text: '¿Qué acciones de mejora deberían incorporarse al proceso? Seleccione todas las que correspondan.',
              options: [
                { text: 'Acordar en el levantamiento de perfil la frecuencia y el canal de avances.', correct: true },
                { text: 'Enviar un aviso al cumplirse cada hito del proceso (publicación, filtro, entrevistas, terna).', correct: true },
                { text: 'Reducir las etapas del proceso para terminar antes.', correct: false },
                { text: 'Preguntar al jefe de agencia qué nivel de detalle y frecuencia de información prefiere.', correct: true }
              ], feedback: 'Acordar frecuencia y canal, avisar por hitos y adaptar el nivel de información al cliente. Reducir etapas no responde al problema identificado.' }
          ],
          written: { id: 'c2-w', label: 'Redacte el mensaje que enviaría hoy a Roberto. Debe reconocer la falta de comunicación, informar el estado real del proceso, indicar la fecha de entrega de la terna y proponer la frecuencia de avisos.', min: 200, rows: 6 } },
        { type: 'quiz', id: 'q3', title: 'Cuestionario del Módulo 3', time: '10 min', mode: 'immediate',
          intro: 'Cinco preguntas con retroalimentación inmediata.',
          questions: [
            { id: 'q3-1', type: 'single', text: 'Según el módulo, la confianza del cliente interno se construye principalmente con:',
              options: [
                { text: 'Rapidez en la cobertura de vacantes.', correct: false, feedback: 'La rapidez ayuda, pero sin previsibilidad no construye confianza.' },
                { text: 'Previsibilidad: saber qué va a pasar y cuándo.', correct: true, feedback: 'Correcto.' },
                { text: 'Aceptar todas las solicitudes del jefe de agencia.', correct: false, feedback: 'Complacer no es servir.' },
                { text: 'Enviar ternas numerosas.', correct: false, feedback: 'La cantidad no sustituye la pertinencia ni la comunicación.' }
              ] },
            { id: 'q3-2', type: 'multi', text: 'Seleccione las preguntas clave de un buen levantamiento de perfil.',
              options: [
                { text: '¿Qué funciones críticas debe cubrir la persona en los primeros meses?', correct: true },
                { text: '¿Qué competencias son indispensables y cuáles deseables?', correct: true },
                { text: '¿Cuál es la urgencia real y qué la origina?', correct: true },
                { text: '¿Cuántos candidatos quiere entrevistar el jefe para sentirse satisfecho?', correct: false }
              ], feedback: 'Funciones críticas, competencias indispensables y deseables, contexto del equipo, urgencia real y aprendizajes de contrataciones anteriores.' },
            { id: 'q3-3', type: 'tf', text: 'Ante una urgencia justificada del jefe de agencia, es aceptable omitir etapas de evaluación si él asume la responsabilidad.',
              answer: false, feedback: 'Falso. Las etapas protegen la calidad de la contratación. Se puede priorizar y acelerar dentro de ellas, no omitirlas.' },
            { id: 'q3-4', type: 'single', text: '¿Cuál es el primer paso para comunicar un retraso al cliente interno?',
              options: [
                { text: 'Esperar a tener la solución completa.', correct: false, feedback: 'Retrasa el aviso y elimina la proactividad.' },
                { text: 'Informar de inmediato.', correct: true, feedback: 'Correcto. Después se explica la causa, se proponen alternativas y se acuerda la nueva fecha.' },
                { text: 'Consultar con la gerencia.', correct: false, feedback: 'No es el primer paso frente al cliente.' },
                { text: 'Reducir el alcance del perfil.', correct: false, feedback: 'No es una forma de comunicar un retraso.' }
              ] },
            { id: 'q3-5', type: 'single', text: 'En el caso práctico, el proceso avanzaba en tiempo pero el jefe de agencia escaló una queja. ¿Qué enseña esa situación?',
              options: [
                { text: 'Que los clientes internos son impredecibles.', correct: false, feedback: 'La reacción fue predecible ante tres semanas de silencio.' },
                { text: 'Que un proceso que avanza pero no se comunica se percibe como un proceso que no existe.', correct: true, feedback: 'Correcto.' },
                { text: 'Que los plazos deben ser más largos.', correct: false, feedback: 'El plazo no fue el problema.' },
                { text: 'Que la gerencia no debe recibir quejas.', correct: false, feedback: 'La lección es sobre comunicación, no sobre el canal de la queja.' }
              ] }
          ] }
      ]
    },

    /* ---------------- MÓDULO 4 ---------------- */
    {
      id: 'm4', day: 4,
      title: 'Resolución de problemas y mejora continua',
      summary: 'Manejo de objeciones, análisis de causa raíz, indicadores e iniciativas de mejora.',
      time: '1 h 40 min',
      items: [
        { type: 'lesson', id: 'l1', title: 'Manejo de objeciones y situaciones difíciles', time: '20 min',
          blocks: [
            { type: 'p', text: 'Las objeciones y reclamos son parte del servicio. Lo que distingue a un especialista estratégico no es evitarlas, sino **responderlas con una estructura** que resuelva y preserve la relación.' },
            { type: 'h', text: 'Estructura de cuatro pasos' },
            { type: 'steps', items: [
              { title: 'Escuchar', text: 'Sin interrumpir ni justificarse. Entender el hecho y la emoción detrás.' },
              { title: 'Reconocer', text: 'Validar la situación: "Entiendo que tres semanas sin información es inaceptable." Reconocer no es admitir culpa en todo; es mostrar que se comprendió.' },
              { title: 'Informar', text: 'Con hechos: estado real, causas, lo que ya se hizo y las opciones disponibles.' },
              { title: 'Acordar', text: 'Siguiente paso concreto, responsable y fecha. Registrarlo y cumplirlo.' }
            ] },
            { type: 'h', text: 'Objeciones frecuentes' },
            { type: 'table', head: ['Objeción', 'Qué hay detrás', 'Enfoque de respuesta'], rows: [
              ['"Llevan mucho tiempo."', 'Falta de certidumbre, más que lentitud real.', 'Informar el estado por etapas y acordar hitos de aviso.'],
              ['"El candidato no era lo que pedí."', 'Perfil mal entendido o necesidad no explicitada.', 'Volver al levantamiento: qué funciones críticas no cubre y ajustar el perfil por escrito.'],
              ['"¿Por qué no me seleccionaron?" (candidato)', 'Necesidad de cierre y de aprendizaje.', 'Retroalimentación específica sobre el ajuste al perfil, respetuosa y orientada al futuro.'],
              ['"Contrátalo directo, yo respondo."', 'Urgencia operativa.', 'Incorporar la referencia al proceso con prioridad y explicar el valor de las etapas.']
            ] },
            { type: 'callout', variant: 'tip', title: 'Lenguaje que ayuda', text: 'Sustituya "no se puede" por "lo que sí podemos hacer es". Sustituya "eso no depende de mí" por "voy a verificarlo y le escribo el [fecha]".' }
          ] },
        { type: 'lesson', id: 'l2', title: 'Análisis de causa raíz', time: '20 min',
          blocks: [
            { type: 'p', text: 'Resolver el mismo problema varias veces indica que se está atendiendo el **síntoma** y no la **causa**. El análisis de causa raíz permite pasar de la reacción a la prevención.' },
            { type: 'h', text: 'Técnica de los cinco porqués' },
            { type: 'p', text: 'Consiste en preguntar sucesivamente "¿por qué ocurre esto?" hasta llegar a una causa sobre la que se puede actuar. No siempre son exactamente cinco; se detiene cuando la respuesta señala algo controlable por el equipo.' },
            { type: 'callout', variant: 'example', title: 'Ejemplo hipotético', text: '**Problema:** varios candidatos finalistas abandonan el proceso. **¿Por qué?** Aceptan otras ofertas mientras esperan. **¿Por qué esperan?** La decisión del jefe de agencia tarda más de dos semanas. **¿Por qué tarda?** El jefe recibe la terna sin fecha límite para decidir. **¿Por qué no hay fecha?** No se acuerda en el levantamiento de perfil. **Causa raíz:** el proceso de levantamiento no incluye el acuerdo de fecha de decisión. **Acción:** incorporar ese acuerdo como paso obligatorio.' },
            { type: 'h', text: 'Categorías para ordenar las causas' },
            { type: 'cards', items: [
              { title: 'Personas', text: 'Habilidades, carga de trabajo, claridad de roles.' },
              { title: 'Proceso', text: 'Etapas, acuerdos, tiempos, responsables.' },
              { title: 'Comunicación', text: 'Frecuencia, canales, registro de contactos.' },
              { title: 'Herramientas', text: 'Registros, plantillas, recordatorios, sistemas.' }
            ] },
            { type: 'callout', variant: 'key', title: 'Síntoma frente a causa', text: 'Una queja escalada, un candidato que abandona o una terna rechazada son síntomas. Si la solución propuesta solo evita que vuelva a ocurrir ese caso particular, probablemente no se llegó a la causa.' }
          ] },
        { type: 'lesson', id: 'l3', title: 'Indicadores y mejora continua', time: '20 min',
          blocks: [
            { type: 'p', text: 'Lo que no se mide no se puede mejorar de forma sistemática. Los indicadores convierten la percepción de servicio en información sobre la que se puede actuar.' },
            { type: 'h', text: 'Indicadores de seguimiento propuestos en este programa' },
            { type: 'list', items: [
              'Porcentaje de finalización del curso.',
              'Calificación promedio de las evaluaciones.',
              'Nivel de satisfacción de los participantes (encuesta final).',
              'Aplicación de los conocimientos en situaciones laborales (plan de una mejora al puesto).',
              'Percepción de los clientes internos y externos sobre la calidad de la atención.'
            ] },
            { type: 'h', text: 'Ejemplos de indicadores de servicio que un equipo podría definir' },
            { type: 'p', text: 'Los siguientes son ejemplos ilustrativos, no indicadores institucionales. Cada equipo debe definir los propios según su contexto.' },
            { type: 'table', head: ['Indicador', 'Qué mide', 'Cliente'], rows: [
              ['Porcentaje de candidatos con cierre informado', 'Si se comunica el resultado a todos los participantes.', 'Externo'],
              ['Cumplimiento de fechas de aviso prometidas', 'Si se escribe en la fecha comprometida.', 'Ambos'],
              ['Procesos con hitos de comunicación acordados', 'Si el levantamiento incluye frecuencia y canal de avances.', 'Interno'],
              ['Satisfacción del jefe de agencia al cierre', 'Percepción del servicio recibido en el proceso.', 'Interno']
            ] },
            { type: 'h', text: 'Ciclo de mejora continua' },
            { type: 'steps', items: [
              { title: 'Medir', text: 'Elegir un indicador y registrar su valor actual.' },
              { title: 'Analizar', text: 'Identificar la causa raíz de la brecha.' },
              { title: 'Actuar', text: 'Implementar una mejora concreta y acotada.' },
              { title: 'Verificar', text: 'Volver a medir y ajustar.' }
            ] },
            { type: 'callout', variant: 'key', title: 'Mejora continua en la práctica', text: 'Una iniciativa de mejora no necesita ser grande. Necesita ser concreta, tener un responsable, un indicador y una fecha de verificación. El plan de una mejora que elaborará en este módulo sigue exactamente esa lógica.' }
          ] },
        { type: 'activity', kind: 'scenario', id: 'a1', title: 'Simulación: Dos clientes, una misma semana', time: '15 min',
          modality: 'Exploración · Imaginación',
          hypothetical: true,
          intro: 'En esta simulación debe atender al mismo tiempo a un jefe de agencia y a un candidato. Cada decisión tiene consecuencias para uno o para ambos. Puede repetirla para explorar otros caminos.',
          nodes: [
            { id: 's1', text: 'Lunes. Daniel, jefe de agencia, escribe molesto: la terna que recibió no le convence y "no era lo que pidió". El mismo día, Sofía, candidata finalista de otro proceso, pregunta si hay novedades: lleva nueve días esperando la decisión de su jefe de agencia.',
              options: [
                { text: 'Atender primero a Daniel por ser cliente interno y dejar a Sofía para cuando haya una decisión.', quality: 'bad', feedback: 'Prioriza por jerarquía y deja a la candidata sin respuesta. Sofía podría aceptar otra oferta mientras espera.' },
                { text: 'Responder a ambos hoy: a Sofía con el estado real y una fecha de aviso; a Daniel proponiendo una reunión breve para revisar el perfil.', quality: 'good', feedback: 'Ninguno de los dos clientes queda sin respuesta. Cada uno recibe lo que necesita: certidumbre y acompañamiento.' },
                { text: 'Responder a Sofía y explicar a Daniel por correo que la terna cumple el perfil solicitado.', quality: 'mid', feedback: 'Sofía queda atendida, pero la respuesta a Daniel es defensiva y no busca entender la causa de su insatisfacción.' }
              ] },
            { id: 's2', text: 'En la reunión, Daniel explica que necesitaba a alguien con experiencia en cartera, algo que no quedó registrado en el perfil original.',
              options: [
                { text: 'Señalar que esa información no se dio al inicio y que el proceso debe reiniciarse.', quality: 'bad', feedback: 'Correcto en los hechos, pero culpa al cliente y no ofrece una salida. La relación se deteriora.' },
                { text: 'Reconocer la brecha en el levantamiento, ajustar el perfil por escrito con Daniel y acordar un plan: revisar si alguien de la terna cumple y ampliar la búsqueda con fecha concreta.', quality: 'good', feedback: 'Convierte la objeción en un acuerdo. Daniel sabe qué pasará y cuándo.' },
                { text: 'Aceptar buscar de nuevo sin registrar el nuevo criterio.', quality: 'mid', feedback: 'Resuelve el momento, pero sin registrar el ajuste es probable que el problema se repita.' }
              ] },
            { id: 's3', text: 'Miércoles. El jefe de agencia de Sofía sigue sin decidir. Sofía escribe de nuevo: tiene otra oferta y debe responder el viernes.',
              options: [
                { text: 'Decirle a Sofía que acepte la otra oferta si lo prefiere.', quality: 'bad', feedback: 'Abandona a la candidata y a la agencia. Se pierde una finalista sin intentar resolver.' },
                { text: 'Informar al jefe de agencia hoy mismo del riesgo concreto de perder a la finalista y acordar una decisión antes del viernes; informar a Sofía la fecha en que tendrá respuesta.', quality: 'good', feedback: 'Gestiona a ambos clientes con la misma información. El jefe decide con datos; Sofía recibe certidumbre.' },
                { text: 'Pedirle a Sofía que espere unos días más sin consultar al jefe de agencia.', quality: 'mid', feedback: 'Pide paciencia sin hacer nada para resolver la causa. El riesgo de perderla se mantiene.' }
              ] },
            { id: 's4', text: 'Viernes. Ambas situaciones se resolvieron. Al cerrar la semana, revisa lo ocurrido.',
              options: [
                { text: 'Pasar a la siguiente semana; los problemas ya se resolvieron.', quality: 'bad', feedback: 'Se atendieron los síntomas. Sin análisis, el perfil incompleto y la decisión demorada volverán a ocurrir.' },
                { text: 'Aplicar los cinco porqués a los dos casos y proponer una mejora al proceso: fecha de decisión acordada al entregar la terna y validación escrita del perfil.', quality: 'good', feedback: 'De la reacción a la prevención. Es el comportamiento estratégico que el curso busca desarrollar.' },
                { text: 'Anotar que hay que "comunicar más" sin definir una acción concreta.', quality: 'mid', feedback: 'La intención es correcta, pero sin una acción concreta, un responsable y una fecha no habrá mejora.' }
              ] }
          ],
          endings: {
            good: 'Gestión sobresaliente. Atendió a ambos clientes sin sacrificar a ninguno, convirtió las objeciones en acuerdos y cerró la semana con una mejora al proceso.',
            mid: 'Gestión razonable con oportunidades. Observe en qué decisiones eligió resolver el momento sin atacar la causa o sin dar certidumbre a uno de los clientes.',
            bad: 'La semana se resolvió a costa de la experiencia de los clientes. Revise las decisiones: priorizar por jerarquía, culpar al cliente o no analizar las causas son patrones del enfoque operativo.'
          } },
        { type: 'activity', kind: 'form', id: 'a2', title: 'Actividad: Mi plan de una mejora', time: '15 min',
          modality: 'Transferencia al puesto',
          intro: 'Retome la autorreflexión del Día 1 y elabore un plan para implementar al menos una mejora en sus procesos de atención y seguimiento. Este plan es el instrumento de transferencia del aprendizaje al puesto de trabajo. Se incluirá en el resumen final y puede imprimirse.',
          forumNote: 'En el LMS institucional, el plan se comparte en el foro del Módulo 4 para recibir comentarios de otros especialistas.',
          fields: [
            { id: 'p1', label: 'Situación actual que afecta la experiencia de un cliente interno o externo', min: 80, rows: 3 },
            { id: 'p2', label: 'Causa raíz identificada (aplique los cinco porqués)', min: 80, rows: 3 },
            { id: 'p3', label: 'Mejora concreta que implementará', min: 80, rows: 3 },
            { id: 'p4', label: 'Indicador con el que verificará la mejora', min: 40, rows: 2 },
            { id: 'p5', label: 'Fecha de inicio, fecha de verificación y personas involucradas', min: 40, rows: 2 }
          ] },
        { type: 'quiz', id: 'q4', title: 'Cuestionario del Módulo 4', time: '10 min', mode: 'immediate',
          intro: 'Cinco preguntas con retroalimentación inmediata.',
          questions: [
            { id: 'q4-1', type: 'order', text: 'Ordene los pasos de la estructura para responder a una objeción.',
              items: ['Escuchar', 'Reconocer', 'Informar', 'Acordar'],
              feedback: 'Escuchar, reconocer, informar y acordar. Reconocer antes de informar evita que la respuesta se perciba como una justificación.' },
            { id: 'q4-2', type: 'single', text: '¿Cuándo se detiene la técnica de los cinco porqués?',
              options: [
                { text: 'Exactamente en la quinta pregunta.', correct: false, feedback: 'El número es orientativo.' },
                { text: 'Cuando la respuesta señala una causa sobre la que el equipo puede actuar.', correct: true, feedback: 'Correcto.' },
                { text: 'Cuando se identifica al responsable del error.', correct: false, feedback: 'La técnica busca causas, no culpables.' },
                { text: 'Cuando el cliente deja de quejarse.', correct: false, feedback: 'Eso indica que se atendió el síntoma, no necesariamente la causa.' }
              ] },
            { id: 'q4-3', type: 'tf', text: 'Una queja escalada por un jefe de agencia es, en sí misma, la causa raíz del problema de servicio.',
              answer: false, feedback: 'Falso. La queja es un síntoma. La causa raíz está en el proceso, la comunicación, las personas o las herramientas.' },
            { id: 'q4-4', type: 'multi', text: '¿Cuáles son indicadores de seguimiento propuestos en este programa?',
              options: [
                { text: 'Porcentaje de finalización del curso.', correct: true },
                { text: 'Percepción de los clientes internos y externos sobre la calidad de la atención.', correct: true },
                { text: 'Número de vacantes publicadas en el mes.', correct: false },
                { text: 'Aplicación de los conocimientos en situaciones laborales.', correct: true }
              ], feedback: 'Finalización, calificación promedio, satisfacción, aplicación en el puesto y percepción de los clientes.' },
            { id: 'q4-5', type: 'single', text: 'Una iniciativa de mejora continua debe tener, como mínimo:',
              options: [
                { text: 'Aprobación de la gerencia general y presupuesto.', correct: false, feedback: 'No es un requisito mínimo; muchas mejoras son de proceso y no requieren presupuesto.' },
                { text: 'Una acción concreta, un responsable, un indicador y una fecha de verificación.', correct: true, feedback: 'Correcto.' },
                { text: 'Un alcance amplio que abarque todo el departamento.', correct: false, feedback: 'Las mejoras acotadas son más fáciles de implementar y verificar.' },
                { text: 'Un cambio en la plataforma tecnológica.', correct: false, feedback: 'La tecnología es una de las posibles categorías, no un requisito.' }
              ] }
          ] }
      ]
    }
  ],

  /* ================================================================
     DÍA 5 · CASO INTEGRADOR
     ================================================================ */
  integrator: {
    id: 'integrador',
    title: 'Caso integrador: Agencia Norte y la candidata Ana',
    time: '40 min',
    hypothetical: true,
    intro: 'Resuelva en cuatro pasos una situación que involucra a un jefe de agencia y a una candidata. Cada paso tiene preguntas calificadas y una respuesta escrita obligatoria. La parte estructurada se califica automáticamente; las respuestas escritas se guardan para revisión del facilitador y pueden exportarse desde la pantalla de resultados.',
    context: [
      'Hace cuatro semanas, Carlos, jefe de la Agencia Norte, solicitó cubrir dos posiciones de ejecutivo de servicio. En la reunión inicial se definió el perfil, pero no se acordó una fecha de decisión ni la frecuencia de avances.',
      'El especialista avanzó el proceso y hace dos semanas presentó una terna por correo. Ana, la candidata mejor evaluada, fue informada de que "pronto" tendría noticias. Carlos no respondió al correo de la terna: estaba atendiendo una auditoría y asumió que el especialista le recordaría.',
      'Ayer Ana aceptó una oferta en otra organización. Hoy Carlos escaló una queja a la gerencia: "Llevo un mes esperando y Selección perdió a la mejor candidata". El especialista debe responder a la gerencia, a Carlos y cerrar el ciclo con Ana.'
    ],
    steps: [
      { id: 's1', title: 'Paso 1: Identificar el problema',
        instructions: 'Distinga el problema central de los síntomas que lo revelan.',
        questions: [
          { id: 'i1-1', type: 'single', text: '¿Cuál es el problema central de la situación?',
            options: [
              { text: 'Carlos no respondió al correo de la terna.', correct: false, feedback: 'Es una causa contribuyente. El problema de servicio es más amplio.' },
              { text: 'Ana fue poco paciente.', correct: false, feedback: 'Ana actuó con la información que tenía: ninguna.' },
              { text: 'No se gestionaron las expectativas ni la comunicación con ninguno de los dos clientes: sin fecha de decisión acordada, sin avances a Carlos y sin fecha de aviso a Ana.', correct: true, feedback: 'Correcto. El problema es de gestión de expectativas y comunicación con ambos clientes.' },
              { text: 'El perfil estaba mal definido.', correct: false, feedback: 'El perfil se definió; no consta un problema de perfil.' }
            ] },
          { id: 'i1-2', type: 'multi', text: '¿Cuáles de los siguientes son síntomas y no el problema de fondo? Seleccione todos los que correspondan.',
            options: [
              { text: 'La queja escalada por Carlos.', correct: true },
              { text: 'La pérdida de la candidata Ana.', correct: true },
              { text: 'La ausencia de acuerdos de comunicación en la reunión inicial.', correct: false },
              { text: 'La terna enviada por correo sin fecha límite de respuesta.', correct: false }
            ], feedback: 'La queja y la pérdida de Ana son síntomas. La falta de acuerdos iniciales y la terna sin fecha límite son causas.' }
        ],
        written: { id: 'i1-w', label: 'Describa el problema central con sus palabras, indicando cómo afecta a cada uno de los dos clientes.', min: 150, rows: 4 } },
      { id: 's2', title: 'Paso 2: Analizar las causas',
        instructions: 'Aplique el análisis de causa raíz.',
        questions: [
          { id: 'i2-1', type: 'order', text: 'Ordene la cadena de los cinco porqués desde el síntoma hasta la causa raíz.',
            items: [
              'Ana aceptó otra oferta.',
              'Ana no recibió información durante dos semanas.',
              'El especialista no tenía fecha de decisión de Carlos para informarle.',
              'La terna se envió sin acordar fecha límite de respuesta.',
              'El levantamiento de perfil no incluye acuerdos de fechas ni de comunicación.'
            ],
            feedback: 'Del síntoma (Ana aceptó otra oferta) a la causa raíz (el levantamiento no incluye acuerdos de fechas y comunicación).' },
          { id: 'i2-2', type: 'multi', text: '¿En qué categorías se ubican las causas identificadas? Seleccione todas las que correspondan.',
            options: [
              { text: 'Proceso: falta de acuerdos de fecha de decisión.', correct: true },
              { text: 'Comunicación: ausencia de avances y de fechas de aviso.', correct: true },
              { text: 'Herramientas: falta de un registro de fechas comprometidas y recordatorios.', correct: true },
              { text: 'Personas: Ana no tenía las competencias requeridas.', correct: false }
            ], feedback: 'Proceso, comunicación y herramientas. No hay evidencia de un problema de competencias de la candidata.' }
        ],
        written: { id: 'i2-w', label: 'Explique cuál considera la causa raíz principal y por qué actuar sobre ella evitaría que la situación se repita.', min: 150, rows: 4 } },
      { id: 's3', title: 'Paso 3: Proponer la solución',
        instructions: 'Defina qué hará hoy y qué cambiará en el proceso.',
        questions: [
          { id: 'i3-1', type: 'single', text: '¿Cuál es la mejor respuesta inmediata ante la queja de Carlos?',
            options: [
              { text: 'Explicar a la gerencia que Carlos no respondió al correo de la terna.', correct: false, feedback: 'Es un hecho, pero culpar al cliente ante la gerencia deteriora la relación y no resuelve nada.' },
              { text: 'Contactar hoy a Carlos: reconocer la falta de seguimiento, informar el estado real de la terna, acordar una reunión para decidir sobre los candidatos restantes y fijar fecha para reforzar la búsqueda.', correct: true, feedback: 'Correcto. Reconoce, informa, acuerda y da certidumbre.' },
              { text: 'Reiniciar el proceso desde cero.', correct: false, feedback: 'Desperdicia el avance y prolonga la vacante.' },
              { text: 'Esperar a que Carlos termine la auditoría para no presionarlo.', correct: false, feedback: 'Prolonga el silencio que causó el problema.' }
            ] },
          { id: 'i3-2', type: 'multi', text: '¿Qué componentes debe incluir la solución completa? Seleccione todos los que correspondan.',
            options: [
              { text: 'Cerrar el ciclo con Ana: agradecer su participación, reconocer la falta de información y dejar abierta la puerta a procesos futuros.', correct: true },
              { text: 'Acordar con Carlos la fecha de decisión sobre los candidatos restantes y la frecuencia de avances.', correct: true },
              { text: 'Incorporar al proceso del departamento el acuerdo de fecha de decisión y de hitos de comunicación en el levantamiento de perfil.', correct: true },
              { text: 'Omitir las evaluaciones de los próximos candidatos para recuperar el tiempo perdido.', correct: false }
            ], feedback: 'Cierre con Ana, acuerdos con Carlos y mejora del proceso. Omitir evaluaciones no forma parte de una solución de calidad.' }
        ],
        written: { id: 'i3-w', label: 'Redacte su propuesta de solución: qué hará hoy con Carlos, con la gerencia y con Ana, y qué cambio incorporará al proceso.', min: 300, rows: 7 } },
      { id: 's4', title: 'Paso 4: Definir el seguimiento',
        instructions: 'Establezca cómo verificará que la mejora funciona.',
        questions: [
          { id: 'i4-1', type: 'multi', text: '¿Qué indicadores permitirían verificar la mejora en este caso? Seleccione todos los que correspondan.',
            options: [
              { text: 'Porcentaje de ternas entregadas con fecha de decisión acordada.', correct: true },
              { text: 'Cumplimiento de las fechas de aviso comprometidas con candidatos.', correct: true },
              { text: 'Número de candidatos finalistas que abandonan el proceso.', correct: true },
              { text: 'Cantidad de correos enviados por semana.', correct: false }
            ], feedback: 'Los tres primeros miden la causa raíz y su efecto. La cantidad de correos no mide calidad ni oportunidad.' },
          { id: 'i4-2', type: 'single', text: '¿Cuál es la frecuencia de seguimiento más adecuada para el acuerdo con Carlos?',
            options: [
              { text: 'Solo cuando haya una terna lista.', correct: false, feedback: 'Repite el patrón que causó el problema.' },
              { text: 'La acordada con él en función de su preferencia, con un mínimo de un aviso por hito del proceso.', correct: true, feedback: 'Correcto. Adaptada al cliente y con un mínimo garantizado.' },
              { text: 'Diaria, para evitar cualquier queja.', correct: false, feedback: 'Es desproporcionada y no sostenible.' },
              { text: 'Cuando Carlos lo solicite.', correct: false, feedback: 'Traslada la proactividad al cliente.' }
            ] }
        ],
        written: { id: 'i4-w', label: 'Describa sus acciones de seguimiento: qué medirá, cada cuánto, quién es responsable y en qué fecha verificará los resultados.', min: 150, rows: 5 } }
    ]
  },

  /* ================================================================
     EVALUACIÓN FINAL
     ================================================================ */
  finalExam: {
    id: 'final',
    title: 'Evaluación final',
    time: '20 min',
    intro: 'Quince preguntas que cubren los cuatro módulos. La retroalimentación se muestra al entregar. Puede repetir la evaluación; se conserva el último resultado. Al finalizar podrá comparar el resultado con la evaluación diagnóstica.',
    mode: 'deferred',
    questions: [
      { id: 'f1', type: 'single', text: 'El propósito de un proceso de selección, según el enfoque del curso, es:',
        options: [
          { text: 'Cubrir vacantes en el menor tiempo.', correct: false, feedback: 'Insuficiente: falta la gestión de la experiencia.' },
          { text: 'Identificar candidatos idóneos y gestionar experiencias satisfactorias para todos los involucrados.', correct: true, feedback: 'Correcto.' },
          { text: 'Aplicar evaluaciones técnicas.', correct: false, feedback: 'Es una etapa, no el propósito.' },
          { text: 'Reducir la rotación.', correct: false, feedback: 'Puede ser un efecto, no el propósito del servicio.' }
        ] },
      { id: 'f2', type: 'multi', text: 'Seleccione los dos clientes del departamento de Atracción y Selección identificados en el curso.',
        options: [
          { text: 'Jefes de agencia (cliente interno).', correct: true },
          { text: 'Candidatos (cliente externo).', correct: true },
          { text: 'Proveedores de evaluaciones.', correct: false },
          { text: 'Entidades reguladoras.', correct: false }
        ], feedback: 'Jefes de agencia y candidatos.' },
      { id: 'f3', type: 'tf', text: 'La brecha principal identificada en el equipo está en el manejo de relaciones y la comunicación continua, no en la evaluación técnica de perfiles.',
        answer: true, feedback: 'Verdadero.' },
      { id: 'f4', type: 'single', text: 'Un jefe de agencia espera, principalmente:',
        options: [
          { text: 'Ternas numerosas.', correct: false, feedback: 'La cantidad no es la expectativa central.' },
          { text: 'Acompañamiento cercano, certidumbre en tiempos y gestión proactiva de expectativas.', correct: true, feedback: 'Correcto.' },
          { text: 'Que se omitan etapas.', correct: false, feedback: 'No es una expectativa legítima de servicio.' },
          { text: 'Decidir sin participar en el proceso.', correct: false, feedback: 'El jefe participa en entrevistas y decisión.' }
        ] },
      { id: 'f5', type: 'single', text: 'Los momentos de mayor impacto en la experiencia del candidato son:',
        options: [
          { text: 'Las esperas entre etapas y después de la decisión.', correct: true, feedback: 'Correcto.' },
          { text: 'La publicación de la vacante.', correct: false, feedback: 'No es el momento crítico.' },
          { text: 'La firma del contrato.', correct: false, feedback: 'Solo aplica al seleccionado.' },
          { text: 'Las pruebas psicométricas.', correct: false, feedback: 'Es una interacción más.' }
        ] },
      { id: 'f6', type: 'multi', text: 'Principios de comunicación efectiva con el candidato:',
        options: [
          { text: 'Claridad.', correct: true },
          { text: 'Oportunidad.', correct: true },
          { text: 'Coherencia.', correct: true },
          { text: 'Extensión máxima del mensaje.', correct: false }
        ], feedback: 'Claridad, oportunidad, coherencia y tono profesional y empático.' },
      { id: 'f7', type: 'tf', text: 'Cada mensaje a un candidato debe terminar con una fecha o un siguiente paso concreto.',
        answer: true, feedback: 'Verdadero. Evita generar una espera indefinida.' },
      { id: 'f8', type: 'single', text: 'Una retroalimentación respetuosa a un candidato no seleccionado:',
        options: [
          { text: 'Compara su desempeño con el de otros candidatos.', correct: false, feedback: 'Revela información que no corresponde.' },
          { text: 'Se refiere al ajuste entre el perfil y la posición, reconoce el esfuerzo y orienta al futuro.', correct: true, feedback: 'Correcto.' },
          { text: 'Se omite para evitar conflictos.', correct: false, feedback: 'El silencio deteriora la experiencia.' },
          { text: 'Solo se da si el candidato la pide.', correct: false, feedback: 'El cierre debe ser proactivo.' }
        ] },
      { id: 'f9', type: 'single', text: 'La confianza del cliente interno se construye principalmente con:',
        options: [
          { text: 'Rapidez.', correct: false, feedback: 'Sin previsibilidad, la rapidez no construye confianza.' },
          { text: 'Previsibilidad: saber qué va a pasar y cuándo.', correct: true, feedback: 'Correcto.' },
          { text: 'Aceptar todas sus solicitudes.', correct: false, feedback: 'Complacer no es servir.' },
          { text: 'Enviar correos frecuentes sin contenido.', correct: false, feedback: 'La frecuencia sin información no aporta certidumbre.' }
        ] },
      { id: 'f10', type: 'tf', text: 'Ante una urgencia del jefe de agencia es aceptable omitir etapas de evaluación si él asume la responsabilidad.',
        answer: false, feedback: 'Falso. Se prioriza y se acelera dentro de las etapas; no se omiten.' },
      { id: 'f11', type: 'order', text: 'Ordene los pasos para comunicar un retraso al cliente interno.',
        items: ['Informar de inmediato', 'Explicar la causa', 'Proponer alternativas', 'Acordar la nueva fecha'],
        feedback: 'Informar, explicar, proponer alternativas y acordar la nueva fecha.' },
      { id: 'f12', type: 'order', text: 'Ordene la estructura de respuesta a una objeción.',
        items: ['Escuchar', 'Reconocer', 'Informar', 'Acordar'],
        feedback: 'Escuchar, reconocer, informar y acordar.' },
      { id: 'f13', type: 'single', text: 'La técnica de los cinco porqués se detiene cuando:',
        options: [
          { text: 'Se hacen exactamente cinco preguntas.', correct: false, feedback: 'El número es orientativo.' },
          { text: 'La respuesta señala una causa sobre la que el equipo puede actuar.', correct: true, feedback: 'Correcto.' },
          { text: 'Se identifica un culpable.', correct: false, feedback: 'Busca causas, no culpables.' },
          { text: 'El cliente deja de quejarse.', correct: false, feedback: 'Indica alivio del síntoma, no causa identificada.' }
        ] },
      { id: 'f14', type: 'multi', text: 'Indicadores de seguimiento propuestos en este programa:',
        options: [
          { text: 'Porcentaje de finalización del curso.', correct: true },
          { text: 'Calificación promedio de las evaluaciones.', correct: true },
          { text: 'Percepción de los clientes internos y externos sobre la atención.', correct: true },
          { text: 'Número de vacantes publicadas.', correct: false }
        ], feedback: 'Finalización, calificación promedio, satisfacción, aplicación en el puesto y percepción de los clientes.' },
      { id: 'f15', type: 'single', text: 'Una iniciativa de mejora continua requiere como mínimo:',
        options: [
          { text: 'Presupuesto aprobado.', correct: false, feedback: 'No es un requisito mínimo.' },
          { text: 'Acción concreta, responsable, indicador y fecha de verificación.', correct: true, feedback: 'Correcto.' },
          { text: 'Un alcance que abarque todo el departamento.', correct: false, feedback: 'Las mejoras acotadas son más verificables.' },
          { text: 'Un cambio tecnológico.', correct: false, feedback: 'Es una categoría posible, no un requisito.' }
        ] }
    ]
  },

  /* Encuesta de satisfacción (docx, sección VI.1) */
  survey: {
    id: 'encuesta',
    title: 'Encuesta de satisfacción',
    intro: 'Su opinión permite mejorar el curso. Califique cada aspecto de 1 (muy en desacuerdo) a 5 (muy de acuerdo). La encuesta no afecta su calificación.',
    scale: ['1', '2', '3', '4', '5'],
    items: [
      { id: 'e1', text: 'Los contenidos fueron claros y de calidad.' },
      { id: 'e2', text: 'La plataforma fue fácil de usar.' },
      { id: 'e3', text: 'Los conocimientos son aplicables a mi trabajo.' },
      { id: 'e4', text: 'Las actividades fueron de calidad y pertinentes.' },
      { id: 'e5', text: 'Se cumplieron los objetivos de aprendizaje.' }
    ],
    comment: { id: 'e-comentario', label: 'Comentarios y sugerencias (opcional)', rows: 4 }
  },

  /* Resultados esperados (docx, sección XVI) para la pantalla de cierre */
  expectedResults: [
    'Mayor conciencia sobre la importancia de la experiencia del cliente interno y externo.',
    'Mejora en las habilidades de comunicación y seguimiento.',
    'Mayor capacidad para gestionar expectativas y resolver situaciones difíciles.',
    'Mayor orientación hacia la calidad del servicio.',
    'Identificación de oportunidades de mejora en los procesos de selección.',
    'Fortalecimiento del papel estratégico del departamento de Atracción y Selección.'
  ]
};
