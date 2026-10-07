/* =========================================================
   Metis for Canvas — static prototype
   Vanilla JS. No backend, no API calls. All AI is simulated.
   ========================================================= */

/* ---------------- I18N ---------------- */
const I18N = {
en: {
  'nav.account':'Account','nav.dashboard':'Dashboard','nav.courses':'Courses','nav.calendar':'Calendar','nav.inbox':'Inbox','nav.help':'Help','nav.lang':'Language',
  'tray.account':'Account','tray.courses':'Courses','tray.help':'Help',
  'acct.title':'Account','acct.role':'Teacher','acct.language':'Language','acct.languageDesc':'Applies to the whole interface immediately.',
  'acct.profile':'Profile','acct.settingsPage':'Account settings','acct.logout':'Log Out',
  'promo.title':'New: build assessments with Metis AI',
  'promo.body':'Describe what you want to assess — Metis drafts questions, options and answer keys you can drop into any module.',
  'promo.btn':'Generate with AI',
  'dash.title':'Dashboard','dash.todo':'To Do','dash.feedback':'Recent Feedback',
  'card.assignments':'Assignments','card.announcements':'Announcements','card.files':'Files',
  'cnav.home':'Home','cnav.announcements':'Announcements','cnav.assignments':'Assignments','cnav.discussions':'Discussions','cnav.grades':'Grades','cnav.people':'People','cnav.quizzes':'Quizzes','cnav.modules':'Modules','cnav.settings':'Settings','cnav.collapse':'Collapse',
  'gen.ai':'Generate with AI','gen.assignment':'Assignment','gen.quiz':'Quiz',
  'tbl.name':'Name','tbl.due':'Due','tbl.points':'Points','tbl.status':'Status','tbl.questions':'Questions',
  'st.published':'Published','st.unpublished':'Unpublished',
  'menu.duplicate':'Duplicate','menu.delete':'Delete',
  'mod.collapseAll':'Collapse All','mod.module':'Module','mod.pts':'pts','mod.new':'New module','mod.items':'{n} items',
  'type.page':'Page','type.assignment':'Assignment','type.quiz':'Quiz','type.file':'File','type.subheader':'SubHeader',
  'c.bio':'Biology 101','c.hist':'World History','c.alg':'Algebra II','c.span':'Spanish Literature',
  'term.fall':'Fall 2026',
  'todo1.t':'Grade Quiz 1: Cell structure','todo1.m':'Biology 101 · 12 submissions',
  'todo2.t':'Finish Unit 2 materials','todo2.m':'Biology 101 · due Oct 15',
  'todo3.t':'Reply to 3 discussion posts','todo3.m':'World History · due Oct 9',
  'fb1.t':'Quiz 1 graded: 18/20','fb1.m':'Biology 101',
  'fb2.t':'Comment on HW 1: “Great diagram labeling!”','fb2.m':'Biology 101',
  'fb3.t':'Your discussion post was liked by 12 students','fb3.m':'World History',
  'ch.stream':'Course activity','ch.comingUp':'Coming up','ch.viewModules':'View Modules',
  'hs1.t':'Announcement: Quiz 2 moved to Friday','hs1.m':'Posted on Oct 6',
  'hs2.t':'New study guide published in Unit 2','hs2.m':'Posted on Oct 5',
  'cu1.t':'Quiz 1: Cell structure','cu1.m':'Due Oct 8 · 20 pts',
  'cu2.t':'HW 1: Label the cell','cu2.m':'Due Oct 10 · 10 pts',
  'm1.name':'Unit 1: The Cell','m2.name':'Unit 2: Energy in the Cell',
  'mi.p1':'Cell theory: an overview','mi.q1':'Quiz 1: Cell structure','mi.a1':'HW 1: Label the cell',
  'mi.p2':'Photosynthesis vs. respiration','mi.q2':'Quiz 2: Photosynthesis','mi.f1':'Study guide — Unit 2.pdf','mi.s1':'Extra practice',
  'as1':'HW 1: Label the cell','as2':'Essay: Energy in ecosystems','as3':'Worksheet: Osmosis practice',
  'due.a1':'Oct 10, 11:59 PM','due.a2':'Oct 17, 11:59 PM','due.a3':'Oct 20, 11:59 PM',
  'qz1':'Quiz 1: Cell structure','qz2':'Quiz 2: Photosynthesis',
  'qd.due':'Due','qd.points':'Points','qd.questions':'Questions','qd.time':'Time limit','qd.min':'{n} minutes','qd.attempts':'Allowed attempts','qd.take':'Take the Quiz','qd.instructions':'Instructions',
  'qd.instr1':'This quiz covers cell structure and transport. Read each question carefully. You can flag questions and return to them before submitting. Metis, your study assistant, can give you hints — but never the answers.',
  'qd.instr2':'This quiz covers photosynthesis and cellular respiration. One attempt only.',
  'qt.timeRunning':'Time Running','qt.questions':'Questions','qt.submit':'Submit Quiz','qt.q':'Question','qt.pts':'pts',
  'qt.flag':'Flag this question','qt.true':'True','qt.false':'False','qt.essayPh':'Type your answer here…',
  'qt.savedAt':'Quiz saved at {t}',
  'qt.confirmT':'Submit quiz?','qt.confirmB':'You have answered {a} of {n} questions. You can’t change your answers after submitting.',
  'qt.cancel':'Cancel','qt.confirm':'Submit Quiz',
  'sub.title':'Quiz submitted!','sub.body':'Your responses have been recorded. Your teacher can see them in the gradebook.',
  'sub.score':'You scored {x} out of {total} on auto-graded questions.','sub.pending':'The essay question (6 pts) is pending teacher review.',
  'sub.back':'Back to Quizzes',
  'q1.t':'Which structure controls the exchange of substances between the cell and its environment?',
  'q1.a':'Nucleus','q1.b':'Plasma membrane','q1.c':'Mitochondrion','q1.d':'Ribosome',
  'q2.t':'What is the main function of the mitochondrion?',
  'q2.a':'Synthesize proteins','q2.b':'Produce energy (ATP)','q2.c':'Store genetic information','q2.d':'Digest waste',
  'q3.t':'Briefly explain the difference between mitosis and meiosis.',
  'q4.t':'DNA is found exclusively in the nucleus of the cell.',
  'q5.t':'In which organelle does photosynthesis take place?',
  'q5.a':'Mitochondrion','q5.b':'Ribosome','q5.c':'Chloroplast','q5.d':'Golgi apparatus',
  'gb.legend':'Legend','gb.late':'Late','gb.missing':'Missing','gb.resub':'Resubmitted',
  'gb.student':'Student','gb.total':'Total','gb.out':'out of {n}',
  'gbcol.quiz1':'Quiz 1','gbcol.hw1':'HW 1','gbcol.quiz2':'Quiz 2','gbcol.essay':'Essay',
  'ppl.name':'Name','ppl.role':'Role','ppl.section':'Section',
  'role.teacher':'Teacher','role.ta':'Teaching Assistant','role.student':'Student','sec.a':'Section A','sec.b':'Section B',
  'set1.t':'Metis AI study assistant','set1.d':'Let students ask Metis for hints during quizzes. Metis never reveals answers.',
  'set2.t':'Show correct answers after submission','set2.d':'Students see the answer key once their attempt is graded.',
  'set3.t':'Enforce quiz time limits','set3.d':'Auto-submit the attempt when the timer reaches zero.',
  'set4.t':'Allow late submissions','set4.d':'Accept submissions after the due date, marked as late.',
  'cal.today':'Today','cal.upcoming':'Upcoming events',
  'ev.quiz1':'Quiz 1 due — Biology 101','ev.meeting':'Faculty meeting','ev.hw1':'HW 1 due — Biology 101','ev.quiz2':'Quiz 2 due — Biology 101','ev.unit2':'Unit 2 materials due','ev.midterm':'Midterm — Algebra II',
  'inbox.compose':'Compose','inbox.empty':'Select a conversation to read it here.',
  'inbox.newMsg':'New message','inbox.to':'To','inbox.subject':'Subject','inbox.message':'Message','inbox.send':'Send','inbox.sent':'Just now','inbox.toWhom':'Course: Biology 101',
  'ib1.s':'Question about Quiz 2','ib1.p':'Hi Professor, will the quiz cover photosynthesis and respiration, or only…','ib1.b':'Hi Professor, will the quiz cover photosynthesis and respiration, or only photosynthesis? Also, will the diagrams from the Unit 2 study guide appear? Thanks!',
  'ib2.s':'Homework extension request','ib2.p':'Good afternoon, could I have one extra day for HW 1? I was absent…','ib2.b':'Good afternoon, could I have one extra day for HW 1? I was absent on Monday and missed the labeling workshop. I can turn it in on Saturday morning.',
  'ib3.s':'Essay draft feedback','ib3.p':'Hello, I uploaded a draft of my energy ecosystems essay. Could you…','ib3.b':'Hello, I uploaded a draft of my essay on energy in ecosystems. Could you tell me if the outline is on the right track before Friday?',
  'an1.t':'Quiz 2 moved to Friday','an1.m':'Elena Torres · Oct 6','an1.b':'To give you more time with the study guide, Quiz 2: Photosynthesis moves to Friday, Oct 12. The timer and format stay the same. Office hours on Thursday if you want to review.',
  'an2.t':'New study guide in Unit 2','an2.m':'Elena Torres · Oct 5','an2.b':'I’ve uploaded a new study guide (PDF) under Unit 2 → Files. It summarizes photosynthesis vs. respiration with the exact diagrams you’ll see in class.',
  'd1.t':'Cell city analogy project','d1.m':'Elena Torres · Oct 2','d1.c':'replies',
  'd2.t':'Debate: are viruses alive?','d2.m':'Elena Torres · Sep 28',
  'dp1.n':'Sara Kim','dp1.x':'I compared the nucleus to city hall because it stores the “blueprints”. Does that work for the project?',
  'dp2.n':'Diego Fernández','dp2.x':'Yes! And mitochondria are obviously the power plants. What would ribosomes be — factories?',
  'dp3.n':'Mei Chen','dp3.x':'Viruses have genetic material but no metabolism, so I’d argue they are not alive.',
  'dp4.n':'Pablo Ortega','dp4.x':'But they evolve and replicate with a host… isn’t that a gray area?',
  'ai.sub':'Course content generator','ai.placeholder':'Describe the quiz or assignment you need…',
  'ai.welcome':'Hi! I’m Metis. Tell me what you want to assess and I’ll draft questions, options and answer keys you can drop straight into a module.',
  'ai.sugQuiz':'Generate a quiz on photosynthesis','ai.sugHw':'Generate homework on the water cycle',
  'ai.doneQuiz':'Here’s a draft — 4 questions with answer keys. Review it and add it to a module when you’re happy:',
  'ai.doneHw':'Here’s a homework draft with instructions and a rubric:',
  'ai.addToModule':'Add to Module','ai.viewModules':'View Modules','ai.added':'Added to Modules',
  'ai.type.mc':'Multiple choice','ai.type.essay':'Essay','ai.essayHint':'Students write a free-text answer','ai.qcount':'{n} questions · {p} pts','ai.hwmeta':'{p} pts · rubric included',
  'aq.title':'Quiz: Photosynthesis',
  'aq.q1.t':'What is the main purpose of photosynthesis?',
  'aq.q1.a':'Release carbon dioxide into the air','aq.q1.b':'Convert light energy into chemical energy','aq.q1.c':'Absorb water from the soil','aq.q1.d':'Cool the plant’s leaves',
  'aq.q2.t':'Which pigment captures sunlight in plants?',
  'aq.q2.a':'Chlorophyll','aq.q2.b':'Hemoglobin','aq.q2.c':'Keratin','aq.q2.d':'Melanin',
  'aq.q3.t':'Where in the cell does photosynthesis take place?',
  'aq.q3.a':'Mitochondrion','aq.q3.b':'Nucleus','aq.q3.c':'Chloroplast','aq.q3.d':'Ribosome',
  'aq.q4.t':'Explain why photosynthesis matters for almost all life on Earth.',
  'ah.title':'Homework: The Water Cycle',
  'ah.instr':'Write a one-page explanation of the water cycle in your own words, including a hand-drawn or digital diagram. Cite the stages in order and give one real-world example of human impact on the cycle.',
  'ah.r1':'Explains evaporation and condensation — 8 pts','ah.r2':'Describes precipitation and collection — 8 pts','ah.r3':'Clear structure and spelling — 4 pts',
  'stu.btn':'Metis — study assistant','stu.sub':'Your study assistant','stu.placeholder':'Ask for a hint…',
  'stu.disclaimer':'Metis guides your reasoning with hints and questions — it never gives away the answer.',
  'stu.welcomeT':'Hi! I’m Metis','stu.welcomeP':'Stuck on a question? Ask me for a hint. I’ll help you think it through, step by step.',
  'toast.files':'Files are managed inside Modules in this demo',
  'toast.preview':'Preview isn’t available in this prototype',
  'toast.logout':'Logged out (demo)',
  'toast.moduleAdded':'Module added',
  'toast.itemAdded':'Row added (unpublished)',
  'toast.deleted':'Deleted',
  'toast.sent':'Message sent (demo)',
  'help.q1':'How does Metis generate quizzes?','help.a1':'Open Metis AI from the sparkle icon, describe your topic, and Metis drafts questions with answer keys. You review everything before publishing.',
  'help.q2':'Does Metis give students the answers?','help.a2':'No. In quizzes, Metis only offers hints and guiding questions. It will refuse to reveal the final answer.',
  'help.q3':'How do I add AI content to my course?','help.a3':'In the Metis tray, click “Add to Module” on any generated outline. It appears unpublished in the Modules page so you stay in control.'
},
es: {
  'nav.account':'Cuenta','nav.dashboard':'Panel','nav.courses':'Cursos','nav.calendar':'Calendario','nav.inbox':'Mensajes','nav.help':'Ayuda','nav.lang':'Idioma',
  'tray.account':'Cuenta','tray.courses':'Cursos','tray.help':'Ayuda',
  'acct.title':'Cuenta','acct.role':'Docente','acct.language':'Idioma','acct.languageDesc':'Se aplica a toda la interfaz al instante.',
  'acct.profile':'Perfil','acct.settingsPage':'Configuración de la cuenta','acct.logout':'Cerrar sesión',
  'promo.title':'Novedad: crea evaluaciones con Metis AI',
  'promo.body':'Describe lo que quieres evaluar: Metis redacta preguntas, opciones y respuestas que puedes añadir a cualquier módulo.',
  'promo.btn':'Generar con IA',
  'dash.title':'Panel','dash.todo':'Por hacer','dash.feedback':'Comentarios recientes',
  'card.assignments':'Tareas','card.announcements':'Anuncios','card.files':'Archivos',
  'cnav.home':'Inicio','cnav.announcements':'Anuncios','cnav.assignments':'Tareas','cnav.discussions':'Foros','cnav.grades':'Calificaciones','cnav.people':'Personas','cnav.quizzes':'Exámenes','cnav.modules':'Módulos','cnav.settings':'Configuración','cnav.collapse':'Contraer',
  'gen.ai':'Generar con IA','gen.assignment':'Tarea','gen.quiz':'Examen',
  'tbl.name':'Nombre','tbl.due':'Entrega','tbl.points':'Puntos','tbl.status':'Estado','tbl.questions':'Preguntas',
  'st.published':'Publicado','st.unpublished':'Sin publicar',
  'menu.duplicate':'Duplicar','menu.delete':'Eliminar',
  'mod.collapseAll':'Contraer todo','mod.module':'Módulo','mod.pts':'pts','mod.new':'Nuevo módulo','mod.items':'{n} elementos',
  'type.page':'Página','type.assignment':'Tarea','type.quiz':'Examen','type.file':'Archivo','type.subheader':'Subtítulo',
  'c.bio':'Biología 101','c.hist':'Historia universal','c.alg':'Álgebra II','c.span':'Literatura española',
  'term.fall':'Otoño 2026',
  'todo1.t':'Calificar Examen 1: La célula','todo1.m':'Biología 101 · 12 entregas',
  'todo2.t':'Terminar materiales de la Unidad 2','todo2.m':'Biología 101 · vence el 15 oct',
  'todo3.t':'Responder 3 publicaciones del foro','todo3.m':'Historia universal · vence el 9 oct',
  'fb1.t':'Examen 1 calificado: 18/20','fb1.m':'Biología 101',
  'fb2.t':'Comentario en Tarea 1: «¡Buen rotulado del diagrama!»','fb2.m':'Biología 101',
  'fb3.t':'A 12 estudiantes les gustó tu publicación','fb3.m':'Historia universal',
  'ch.stream':'Actividad del curso','ch.comingUp':'Próximamente','ch.viewModules':'Ver módulos',
  'hs1.t':'Anuncio: el Examen 2 pasa al viernes','hs1.m':'Publicado el 6 oct',
  'hs2.t':'Nueva guía de estudio en la Unidad 2','hs2.m':'Publicado el 5 oct',
  'cu1.t':'Examen 1: La célula','cu1.m':'Vence el 8 oct · 20 pts',
  'cu2.t':'Tarea 1: Rotula la célula','cu2.m':'Vence el 10 oct · 10 pts',
  'm1.name':'Unidad 1: La célula','m2.name':'Unidad 2: La energía en la célula',
  'mi.p1':'La teoría celular: resumen','mi.q1':'Examen 1: Estructura celular','mi.a1':'Tarea 1: Rotula la célula',
  'mi.p2':'Fotosíntesis vs. respiración','mi.q2':'Examen 2: Fotosíntesis','mi.f1':'Guía de estudio — Unidad 2.pdf','mi.s1':'Práctica extra',
  'as1':'Tarea 1: Rotula la célula','as2':'Ensayo: La energía en los ecosistemas','as3':'Ficha: Práctica de ósmosis',
  'due.a1':'10 oct, 23:59','due.a2':'17 oct, 23:59','due.a3':'20 oct, 23:59',
  'qz1':'Examen 1: Estructura celular','qz2':'Examen 2: Fotosíntesis',
  'qd.due':'Entrega','qd.points':'Puntos','qd.questions':'Preguntas','qd.time':'Límite de tiempo','qd.min':'{n} minutos','qd.attempts':'Intentos permitidos','qd.take':'Presentar examen','qd.instructions':'Instrucciones',
  'qd.instr1':'Este examen cubre la estructura celular y el transporte. Lee cada pregunta con atención. Puedes marcar preguntas y volver a ellas antes de entregar. Metis, tu asistente de estudio, puede darte pistas, pero nunca las respuestas.',
  'qd.instr2':'Este examen cubre la fotosíntesis y la respiración celular. Solo un intento.',
  'qt.timeRunning':'Tiempo restante','qt.questions':'Preguntas','qt.submit':'Entregar examen','qt.q':'Pregunta','qt.pts':'pts',
  'qt.flag':'Marcar esta pregunta','qt.true':'Verdadero','qt.false':'Falso','qt.essayPh':'Escribe tu respuesta aquí…',
  'qt.savedAt':'Examen guardado a las {t}',
  'qt.confirmT':'¿Entregar examen?','qt.confirmB':'Has respondido {a} de {n} preguntas. No podrás cambiar tus respuestas después de entregar.',
  'qt.cancel':'Cancelar','qt.confirm':'Entregar examen',
  'sub.title':'¡Examen entregado!','sub.body':'Tus respuestas se han registrado. Tu docente puede verlas en el libro de calificaciones.',
  'sub.score':'Obtuviste {x} de {total} en las preguntas de calificación automática.','sub.pending':'La pregunta de ensayo (6 pts) está pendiente de revisión.',
  'sub.back':'Volver a Exámenes',
  'q1.t':'¿Qué estructura controla el intercambio de sustancias entre la célula y su entorno?',
  'q1.a':'Núcleo','q1.b':'Membrana plasmática','q1.c':'Mitocondria','q1.d':'Ribosoma',
  'q2.t':'¿Cuál es la función principal de la mitocondria?',
  'q2.a':'Sintetizar proteínas','q2.b':'Producir energía (ATP)','q2.c':'Almacenar información genética','q2.d':'Digerir desechos',
  'q3.t':'Explica brevemente la diferencia entre mitosis y meiosis.',
  'q4.t':'El ADN se encuentra exclusivamente en el núcleo de la célula.',
  'q5.t':'¿En qué orgánulo se realiza la fotosíntesis?',
  'q5.a':'Mitocondria','q5.b':'Ribosoma','q5.c':'Cloroplasto','q5.d':'Aparato de Golgi',
  'gb.legend':'Leyenda','gb.late':'Tarde','gb.missing':'Faltante','gb.resub':'Reenviado',
  'gb.student':'Estudiante','gb.total':'Total','gb.out':'de {n}',
  'gbcol.quiz1':'Examen 1','gbcol.hw1':'Tarea 1','gbcol.quiz2':'Examen 2','gbcol.essay':'Ensayo',
  'ppl.name':'Nombre','ppl.role':'Rol','ppl.section':'Sección',
  'role.teacher':'Docente','role.ta':'Asistente','role.student':'Estudiante','sec.a':'Sección A','sec.b':'Sección B',
  'set1.t':'Asistente de estudio Metis AI','set1.d':'Permite que los estudiantes pidan pistas a Metis durante los exámenes. Metis nunca revela las respuestas.',
  'set2.t':'Mostrar respuestas correctas tras la entrega','set2.d':'Los estudiantes ven la clave de respuestas una vez calificado el intento.',
  'set3.t':'Aplicar límites de tiempo','set3.d':'Entregar automáticamente el intento cuando el temporizador llegue a cero.',
  'set4.t':'Permitir entregas tardías','set4.d':'Aceptar entregas después de la fecha límite, marcadas como tardías.',
  'cal.today':'Hoy','cal.upcoming':'Próximos eventos',
  'ev.quiz1':'Entrega Examen 1 — Biología 101','ev.meeting':'Reunión de docentes','ev.hw1':'Entrega Tarea 1 — Biología 101','ev.quiz2':'Entrega Examen 2 — Biología 101','ev.unit2':'Materiales de la Unidad 2','ev.midterm':'Parcial — Álgebra II',
  'inbox.compose':'Redactar','inbox.empty':'Selecciona una conversación para leerla aquí.',
  'inbox.newMsg':'Nuevo mensaje','inbox.to':'Para','inbox.subject':'Asunto','inbox.message':'Mensaje','inbox.send':'Enviar','inbox.sent':'Ahora mismo','inbox.toWhom':'Curso: Biología 101',
  'ib1.s':'Duda sobre el Examen 2','ib1.p':'Hola, profesora: ¿el examen cubre fotosíntesis y respiración, o solo…','ib1.b':'Hola, profesora: ¿el examen cubre fotosíntesis y respiración, o solo fotosíntesis? Además, ¿aparecerán los diagramas de la guía de la Unidad 2? ¡Gracias!',
  'ib2.s':'Solicitud de prórroga','ib2.p':'Buenas tardes, ¿podría tener un día más para la Tarea 1? Falté…','ib2.b':'Buenas tardes, ¿podría tener un día más para la Tarea 1? Falté el lunes y me perdí el taller de rotulado. Puedo entregarla el sábado por la mañana.',
  'ib3.s':'Comentarios sobre mi ensayo','ib3.p':'Hola, subí un borrador de mi ensayo sobre la energía en los ecosistemas…','ib3.b':'Hola, subí un borrador de mi ensayo sobre la energía en los ecosistemas. ¿Podría decirme si el esquema va por buen camino antes del viernes?',
  'an1.t':'El Examen 2 pasa al viernes','an1.m':'Elena Torres · 6 oct','an1.b':'Para darles más tiempo con la guía de estudio, el Examen 2: Fotosíntesis pasa al viernes 12 de octubre. El tiempo y el formato no cambian. El jueves habrá horario de consulta para repasar.',
  'an2.t':'Nueva guía de estudio en la Unidad 2','an2.m':'Elena Torres · 5 oct','an2.b':'He subido una nueva guía de estudio (PDF) en Unidad 2 → Archivos. Resume la fotosíntesis frente a la respiración con los mismos diagramas que verán en clase.',
  'd1.t':'Proyecto: la célula como una ciudad','d1.m':'Elena Torres · 2 oct','d1.c':'respuestas',
  'd2.t':'Debate: ¿están vivos los virus?','d2.m':'Elena Torres · 28 sep',
  'dp1.n':'Sara Kim','dp1.x':'Comparé el núcleo con el ayuntamiento porque guarda los «planos». ¿Funciona para el proyecto?',
  'dp2.n':'Diego Fernández','dp2.x':'¡Sí! Y las mitocondrias son obviamente las centrales eléctricas. ¿Los ribosomas serían fábricas?',
  'dp3.n':'Mei Chen','dp3.x':'Los virus tienen material genético pero no metabolismo, así que yo diría que no están vivos.',
  'dp4.n':'Pablo Ortega','dp4.x':'Pero evolucionan y se replican con un hospedador… ¿no es una zona gris?',
  'ai.sub':'Generador de contenido del curso','ai.placeholder':'Describe el examen o la tarea que necesitas…',
  'ai.welcome':'¡Hola! Soy Metis. Dime qué quieres evaluar y redactaré preguntas, opciones y respuestas listas para añadir a un módulo.',
  'ai.sugQuiz':'Generar un examen sobre fotosíntesis','ai.sugHw':'Generar una tarea sobre el ciclo del agua',
  'ai.doneQuiz':'Aquí tienes un borrador: 4 preguntas con clave de respuestas. Revísalo y añádelo a un módulo cuando quieras:',
  'ai.doneHw':'Aquí tienes un borrador de tarea con instrucciones y rúbrica:',
  'ai.addToModule':'Añadir al módulo','ai.viewModules':'Ver módulos','ai.added':'Añadido a Módulos',
  'ai.type.mc':'Opción múltiple','ai.type.essay':'Ensayo','ai.essayHint':'Los estudiantes escriben una respuesta libre','ai.qcount':'{n} preguntas · {p} pts','ai.hwmeta':'{p} pts · rúbrica incluida',
  'aq.title':'Examen: Fotosíntesis',
  'aq.q1.t':'¿Cuál es el propósito principal de la fotosíntesis?',
  'aq.q1.a':'Liberar dióxido de carbono al aire','aq.q1.b':'Convertir la energía lumínica en energía química','aq.q1.c':'Absorber agua del suelo','aq.q1.d':'Enfriar las hojas de la planta',
  'aq.q2.t':'¿Qué pigmento captura la luz solar en las plantas?',
  'aq.q2.a':'Clorofila','aq.q2.b':'Hemoglobina','aq.q2.c':'Queratina','aq.q2.d':'Melanina',
  'aq.q3.t':'¿En qué parte de la célula ocurre la fotosíntesis?',
  'aq.q3.a':'Mitocondria','aq.q3.b':'Núcleo','aq.q3.c':'Cloroplasto','aq.q3.d':'Ribosoma',
  'aq.q4.t':'Explica por qué la fotosíntesis es importante para casi toda la vida en la Tierra.',
  'ah.title':'Tarea: El ciclo del agua',
  'ah.instr':'Escribe una explicación de una página sobre el ciclo del agua con tus propias palabras, incluyendo un diagrama a mano o digital. Cita las etapas en orden y da un ejemplo real del impacto humano en el ciclo.',
  'ah.r1':'Explica evaporación y condensación — 8 pts','ah.r2':'Describe precipitación y recolección — 8 pts','ah.r3':'Estructura clara y ortografía — 4 pts',
  'stu.btn':'Metis — asistente de estudio','stu.sub':'Tu asistente de estudio','stu.placeholder':'Pide una pista…',
  'stu.disclaimer':'Metis guía tu razonamiento con pistas y preguntas: nunca revela la respuesta.',
  'stu.welcomeT':'¡Hola! Soy Metis','stu.welcomeP':'¿Atascado en una pregunta? Pídeme una pista. Te ayudaré a razonarla paso a paso.',
  'toast.files':'Los archivos se gestionan dentro de Módulos en esta demo',
  'toast.preview':'La vista previa no está disponible en este prototipo',
  'toast.logout':'Sesión cerrada (demo)',
  'toast.moduleAdded':'Módulo añadido',
  'toast.itemAdded':'Fila añadida (sin publicar)',
  'toast.deleted':'Eliminado',
  'toast.sent':'Mensaje enviado (demo)',
  'help.q1':'¿Cómo genera exámenes Metis?','help.a1':'Abre Metis AI desde el icono de la estrella, describe tu tema y Metis redactará preguntas con clave de respuestas. Tú revisas todo antes de publicar.',
  'help.q2':'¿Metis da las respuestas a los estudiantes?','help.a2':'No. En los exámenes, Metis solo ofrece pistas y preguntas guía. Se negará a revelar la respuesta final.',
  'help.q3':'¿Cómo añado contenido de IA a mi curso?','help.a3':'En el panel de Metis, pulsa «Añadir al módulo» en cualquier esquema generado. Aparecerá sin publicar en la página de Módulos para que mantengas el control.'
},
zh: {
  'nav.account':'账户','nav.dashboard':'仪表盘','nav.courses':'课程','nav.calendar':'日历','nav.inbox':'收件箱','nav.help':'帮助','nav.lang':'语言',
  'tray.account':'账户','tray.courses':'课程','tray.help':'帮助',
  'acct.title':'账户','acct.role':'教师','acct.language':'语言','acct.languageDesc':'立即应用于整个界面。',
  'acct.profile':'个人资料','acct.settingsPage':'账户设置','acct.logout':'退出登录',
  'promo.title':'新功能：用 Metis AI 创建测评',
  'promo.body':'描述你想考核的内容，Metis 会为你起草题目、选项和答案，可直接加入任意单元模块。',
  'promo.btn':'用 AI 生成',
  'dash.title':'仪表盘','dash.todo':'待办事项','dash.feedback':'最近反馈',
  'card.assignments':'作业','card.announcements':'公告','card.files':'文件',
  'cnav.home':'首页','cnav.announcements':'公告','cnav.assignments':'作业','cnav.discussions':'讨论','cnav.grades':'成绩','cnav.people':'人员','cnav.quizzes':'测验','cnav.modules':'单元','cnav.settings':'设置','cnav.collapse':'收起',
  'gen.ai':'用 AI 生成','gen.assignment':'作业','gen.quiz':'测验',
  'tbl.name':'名称','tbl.due':'截止','tbl.points':'分值','tbl.status':'状态','tbl.questions':'题目数',
  'st.published':'已发布','st.unpublished':'未发布',
  'menu.duplicate':'复制','menu.delete':'删除',
  'mod.collapseAll':'全部折叠','mod.module':'单元','mod.pts':'分','mod.new':'新单元','mod.items':'{n} 个项目',
  'type.page':'页面','type.assignment':'作业','type.quiz':'测验','type.file':'文件','type.subheader':'小标题',
  'c.bio':'生物学 101','c.hist':'世界历史','c.alg':'代数 II','c.span':'西班牙文学',
  'term.fall':'2026 年秋季',
  'todo1.t':'批改测验 1：细胞结构','todo1.m':'生物学 101 · 12 份提交',
  'todo2.t':'完成第二单元的材料','todo2.m':'生物学 101 · 10 月 15 日截止',
  'todo3.t':'回复 3 条讨论帖','todo3.m':'世界历史 · 10 月 9 日截止',
  'fb1.t':'测验 1 已批改：18/20','fb1.m':'生物学 101',
  'fb2.t':'作业 1 的评语：“图表标注很棒！”','fb2.m':'生物学 101',
  'fb3.t':'你的讨论帖获得了 12 名学生的点赞','fb3.m':'世界历史',
  'ch.stream':'课程动态','ch.comingUp':'即将到来','ch.viewModules':'查看单元',
  'hs1.t':'公告：测验 2 改到周五','hs1.m':'发布于 10 月 6 日',
  'hs2.t':'第二单元新增学习指南','hs2.m':'发布于 10 月 5 日',
  'cu1.t':'测验 1：细胞结构','cu1.m':'10 月 8 日截止 · 20 分',
  'cu2.t':'作业 1：标注细胞','cu2.m':'10 月 10 日截止 · 10 分',
  'm1.name':'第一单元：细胞','m2.name':'第二单元：细胞中的能量',
  'mi.p1':'细胞学说概述','mi.q1':'测验 1：细胞结构','mi.a1':'作业 1：标注细胞',
  'mi.p2':'光合作用与呼吸作用','mi.q2':'测验 2：光合作用','mi.f1':'学习指南 — 第二单元.pdf','mi.s1':'补充练习',
  'as1':'作业 1：标注细胞','as2':'论文：生态系统中的能量','as3':'练习单：渗透作用练习',
  'due.a1':'10 月 10 日 23:59','due.a2':'10 月 17 日 23:59','due.a3':'10 月 20 日 23:59',
  'qz1':'测验 1：细胞结构','qz2':'测验 2：光合作用',
  'qd.due':'截止时间','qd.points':'分值','qd.questions':'题目数','qd.time':'时间限制','qd.min':'{n} 分钟','qd.attempts':'允许尝试次数','qd.take':'开始测验','qd.instructions':'说明',
  'qd.instr1':'本次测验涵盖细胞结构与物质运输。请仔细阅读每道题。提交前可以标记题目并返回检查。你的学习助手 Metis 可以给你提示，但绝不会直接给出答案。',
  'qd.instr2':'本次测验涵盖光合作用与细胞呼吸。仅可尝试一次。',
  'qt.timeRunning':'剩余时间','qt.questions':'题目','qt.submit':'提交测验','qt.q':'第 {n} 题','qt.pts':'分',
  'qt.flag':'标记此题','qt.true':'正确','qt.false':'错误','qt.essayPh':'在此输入你的答案…',
  'qt.savedAt':'测验已于 {t} 保存',
  'qt.confirmT':'提交测验？','qt.confirmB':'你已作答 {a}/{n} 题。提交后将无法修改答案。',
  'qt.cancel':'取消','qt.confirm':'提交测验',
  'sub.title':'测验已提交！','sub.body':'你的答案已记录，教师可以在成绩册中查看。',
  'sub.score':'自动评分题目得分：{x}/{total}。','sub.pending':'论述题（6 分）等待教师批改。',
  'sub.back':'返回测验列表',
  'q1.t':'哪种结构控制细胞与外界环境之间的物质交换？',
  'q1.a':'细胞核','q1.b':'细胞膜','q1.c':'线粒体','q1.d':'核糖体',
  'q2.t':'线粒体的主要功能是什么？',
  'q2.a':'合成蛋白质','q2.b':'产生能量（ATP）','q2.c':'储存遗传信息','q2.d':'分解废物',
  'q3.t':'请简要说明有丝分裂和减数分裂的区别。',
  'q4.t':'DNA 只存在于细胞核中。',
  'q5.t':'光合作用在哪种细胞器中进行？',
  'q5.a':'线粒体','q5.b':'核糖体','q5.c':'叶绿体','q5.d':'高尔基体',
  'gb.legend':'图例','gb.late':'迟交','gb.missing':'未交','gb.resub':'重新提交',
  'gb.student':'学生','gb.total':'总分','gb.out':'满分 {n}',
  'gbcol.quiz1':'测验 1','gbcol.hw1':'作业 1','gbcol.quiz2':'测验 2','gbcol.essay':'论文',
  'ppl.name':'姓名','ppl.role':'角色','ppl.section':'班级',
  'role.teacher':'教师','role.ta':'助教','role.student':'学生','sec.a':'A 班','sec.b':'B 班',
  'set1.t':'Metis AI 学习助手','set1.d':'允许学生在测验中向 Metis 寻求提示。Metis 绝不会透露答案。',
  'set2.t':'提交后显示正确答案','set2.d':'学生的作答批改后可查看答案解析。',
  'set3.t':'强制执行测验时间限制','set3.d':'计时器归零时自动提交作答。',
  'set4.t':'允许迟交','set4.d':'接受截止日期之后的提交，并标记为迟交。',
  'cal.today':'今天','cal.upcoming':'即将到来的事件',
  'ev.quiz1':'测验 1 截止 — 生物学 101','ev.meeting':'教职工会议','ev.hw1':'作业 1 截止 — 生物学 101','ev.quiz2':'测验 2 截止 — 生物学 101','ev.unit2':'第二单元材料截止','ev.midterm':'期中考试 — 代数 II',
  'inbox.compose':'写消息','inbox.empty':'选择一个会话在此阅读。',
  'inbox.newMsg':'新消息','inbox.to':'收件人','inbox.subject':'主题','inbox.message':'内容','inbox.send':'发送','inbox.sent':'刚刚','inbox.toWhom':'课程：生物学 101',
  'ib1.s':'关于测验 2 的问题','ib1.p':'老师您好，请问测验会考光合作用和呼吸作用，还是只考…','ib1.b':'老师您好，请问这次测验会同时考光合作用和呼吸作用，还是只考光合作用？另外，第二单元学习指南里的图会出现在试题中吗？谢谢！',
  'ib2.s':'申请作业延期','ib2.p':'老师下午好，作业 1 可以延期一天吗？我周一缺课了…','ib2.b':'老师下午好，作业 1 可以延期一天吗？我周一缺课，错过了标注练习课。我可以在周六上午交。',
  'ib3.s':'论文初稿反馈','ib3.p':'老师好，我上传了生态系统能量论文的初稿，您能否…','ib3.b':'老师好，我上传了关于生态系统能量的论文初稿。您能否在周五前告诉我大纲方向是否正确？',
  'an1.t':'测验 2 改到周五','an1.m':'Elena Torres · 10 月 6 日','an1.b':'为了让大家有更充足的时间使用学习指南，测验 2：光合作用 改到 10 月 12 日周五进行。时间和题型不变。周四有答疑时间，欢迎来复习。',
  'an2.t':'第二单元新增学习指南','an2.m':'Elena Torres · 10 月 5 日','an2.b':'我在 第二单元 → 文件 中上传了新的学习指南（PDF），总结了光合作用与呼吸作用的对比，并附有课堂上会使用的图表。',
  'd1.t':'项目：把细胞比作一座城市','d1.m':'Elena Torres · 10 月 2 日','d1.c':'条回复',
  'd2.t':'辩论：病毒是活的吗？','d2.m':'Elena Torres · 9 月 28 日',
  'dp1.n':'Sara Kim','dp1.x':'我把细胞核比作市政厅，因为它保存着“蓝图”。这样写可以吗？',
  'dp2.n':'Diego Fernández','dp2.x':'可以！线粒体显然就是发电厂。那核糖体算什么——工厂？',
  'dp3.n':'Mei Chen','dp3.x':'病毒有遗传物质但没有新陈代谢，所以我认为病毒不是活的。',
  'dp4.n':'Pablo Ortega','dp4.x':'但病毒会进化，还能借助宿主复制……这算不算灰色地带？',
  'ai.sub':'课程内容生成器','ai.placeholder':'描述你需要的测验或作业…',
  'ai.welcome':'你好！我是 Metis。告诉我你想考核的内容，我会起草题目、选项和答案，可直接加入单元模块。',
  'ai.sugQuiz':'生成一份光合作用测验','ai.sugHw':'生成一份水循环作业',
  'ai.doneQuiz':'这是草稿：4 道题并附答案。检查满意后可以加入单元模块：',
  'ai.doneHw':'这是一份作业草稿，含说明和评分量规：',
  'ai.addToModule':'添加到单元','ai.viewModules':'查看单元','ai.added':'已添加到单元',
  'ai.type.mc':'单选题','ai.type.essay':'论述题','ai.essayHint':'学生自由作答','ai.qcount':'{n} 道题 · {p} 分','ai.hwmeta':'{p} 分 · 含量规',
  'aq.title':'测验：光合作用',
  'aq.q1.t':'光合作用的主要目的是什么？',
  'aq.q1.a':'向空气中释放二氧化碳','aq.q1.b':'将光能转化为化学能','aq.q1.c':'从土壤中吸收水分','aq.q1.d':'为植物叶片降温',
  'aq.q2.t':'植物中捕获阳光的色素是哪一种？',
  'aq.q2.a':'叶绿素','aq.q2.b':'血红蛋白','aq.q2.c':'角蛋白','aq.q2.d':'黑色素',
  'aq.q3.t':'光合作用在细胞的哪个部位进行？',
  'aq.q3.a':'线粒体','aq.q3.b':'细胞核','aq.q3.c':'叶绿体','aq.q3.d':'核糖体',
  'aq.q4.t':'请解释为什么光合作用对地球上几乎所有生命都至关重要。',
  'ah.title':'作业：水循环',
  'ah.instr':'用自己的话写一页关于水循环的说明，并附上手绘或电子示意图。按顺序写出各个阶段，并举一个人类活动影响水循环的真实例子。',
  'ah.r1':'解释蒸发与凝结 — 8 分','ah.r2':'描述降水与汇集 — 8 分','ah.r3':'结构清晰、书写规范 — 4 分',
  'stu.btn':'Metis — 学习助手','stu.sub':'你的学习助手','stu.placeholder':'请求提示…',
  'stu.disclaimer':'Metis 通过提示和提问引导你思考，绝不会直接给出答案。',
  'stu.welcomeT':'你好！我是 Metis','stu.welcomeP':'卡在某道题上了吗？向我请求提示吧，我会一步一步帮你理清思路。',
  'toast.files':'本演示中，文件在“单元”内管理',
  'toast.preview':'此原型暂不支持预览',
  'toast.logout':'已退出登录（演示）',
  'toast.moduleAdded':'单元已添加',
  'toast.itemAdded':'已添加一行（未发布）',
  'toast.deleted':'已删除',
  'toast.sent':'消息已发送（演示）',
  'help.q1':'Metis 如何生成测验？','help.a1':'点击星形图标打开 Metis AI，描述你的主题，Metis 会起草带答案的题目。发布前你可以审阅所有内容。',
  'help.q2':'Metis 会直接告诉学生答案吗？','help.a2':'不会。在测验中，Metis 只提供提示和引导性问题，并会拒绝透露最终答案。',
  'help.q3':'如何把 AI 生成的内容加入课程？','help.a3':'在 Metis 面板中，点击生成大纲上的“添加到单元”，它会以未发布状态出现在“单元”页面中，由你掌控。'
}
};

/* arrays accessed directly per language */
I18N.en.months=['January','February','March','April','May','June','July','August','September','October','November','December'];
I18N.es.months=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
I18N.zh.months=['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
I18N.en.weekdays=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
I18N.es.weekdays=['lun','mar','mié','jue','vie','sáb','dom'];
I18N.zh.weekdays=['一','二','三','四','五','六','日'];
I18N.en.stuResponses=[
  'Great question! Before choosing, ask yourself: which structure forms the boundary between the cell and its environment? What would need to cross it?',
  'Think about the word “energy”. Which organelle is nicknamed the powerhouse of the cell — and why would it earn that name?',
  'Try breaking each process into steps. What does mitosis produce, and how is that different from the four cells made by meiosis?',
  'Careful with the word “exclusively”! Can you think of any other organelle that carries its own small piece of DNA?',
  'Picture a leaf in sunlight. Which green organelle captures the light, and which pigment inside it does the catching?'
];
I18N.es.stuResponses=[
  '¡Buena pregunta! Antes de elegir, pregúntate: ¿qué estructura forma el límite entre la célula y su entorno? ¿Qué tendría que atravesarlo?',
  'Piensa en la palabra «energía». ¿Qué orgánulo es conocido como la central energética de la célula, y por qué se ganará ese nombre?',
  'Intenta dividir cada proceso en pasos. ¿Qué produce la mitosis y en qué se diferencia de las cuatro células que genera la meiosis?',
  '¡Cuidado con la palabra «exclusivamente»! ¿Se te ocurre algún otro orgánulo que tenga su propio fragmento de ADN?',
  'Imagina una hoja bajo el sol. ¿Qué orgánulo verde captura la luz y qué pigmento hace el trabajo dentro de él?'
];
I18N.zh.stuResponses=[
  '问得好！选择之前先想想：哪种结构构成了细胞与外界环境的边界？物质需要穿过什么才能进出？',
  '想一想“能量”这个词。哪种细胞器被称为细胞的“动力工厂”？它为什么会得到这个称号？',
  '试着把每个过程拆成步骤。有丝分裂产生什么？这和减数分裂形成的四个细胞有何不同？',
  '注意“只”这个字！你能想到还有其他细胞器携带着自己的一小段 DNA 吗？',
  '想象一片阳光下的叶子。哪种绿色的细胞器负责捕获光能？它里面的哪种色素在做这件事？'
];
I18N.en.stuRefusals=[
  'I can’t give you the answer directly — that’s how the learning sticks! Tell me your first instinct and we’ll test it together.',
  'Nice try! My job is to help you reason, not to answer. What do you already know about this question?'
];
I18N.es.stuRefusals=[
  'No puedo darte la respuesta directamente: ¡así es como se aprende de verdad! Dime tu primera intuición y la comprobamos juntos.',
  '¡Buen intento! Mi trabajo es ayudarte a razonar, no contestar. ¿Qué sabes ya sobre esta pregunta?'
];
I18N.zh.stuRefusals=[
  '我不能直接告诉你答案——这样你才能真正学会！先说说你的直觉，我们一起来验证。',
  '想得美哦！我的职责是帮你推理，而不是给答案。关于这道题，你已经知道些什么？'
];

/* ---------------- state ---------------- */
let lang = localStorage.getItem('metisCanvasLang') || 'en';
let currentCourse = null;
let currentTray = null;
let currentPage = 'dashboard';
let inboxSel = -1;
let calOffset = 0; /* months relative to Oct 2026 */

function t(key, vars){
  let s = (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
  if (vars) Object.keys(vars).forEach(k => { s = s.replace('{'+k+'}', vars[k]); });
  return s;
}

function setLang(l){
  lang = l;
  localStorage.setItem('metisCanvasLang', l);
  document.documentElement.lang = l === 'zh' ? 'zh-CN' : l;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  document.querySelectorAll('#langMenu button, #acctLangOpts .lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  renderAll();
  if (currentTray) openTray(currentTray, true);
}

function toggleLangMenu(e){
  e.stopPropagation();
  document.getElementById('langMenu').classList.toggle('open');
}
document.addEventListener('click', function(e){
  const lm = document.getElementById('langMenu');
  if (lm.classList.contains('open') && !lm.contains(e.target)) lm.classList.remove('open');
  document.querySelectorAll('.kebab-menu.open').forEach(m => { if (!m.parentElement.contains(e.target) || e.target.closest('.kebab-menu')) m.classList.remove('open'); });
});

/* ---------------- data ---------------- */
const COURSES = [
  {id:'bio',  color:'#2B7ABC', nameKey:'c.bio',  code:'BIO-101-01'},
  {id:'hist', color:'#B23E31', nameKey:'c.hist', code:'HIST-210-02'},
  {id:'alg',  color:'#03893D', nameKey:'c.alg',  code:'MATH-202-01'},
  {id:'span', color:'#E06A1B', nameKey:'c.span', code:'SPAN-301-01'}
];

let MODULES = [
  {nameKey:'m1.name', pub:true, open:true, items:[
    {type:'page', titleKey:'mi.p1', pub:true},
    {type:'quiz', titleKey:'mi.q1', pts:20, pub:true, ref:'quiz1'},
    {type:'assignment', titleKey:'mi.a1', pts:10, pub:true}
  ]},
  {nameKey:'m2.name', pub:false, open:true, items:[
    {type:'page', titleKey:'mi.p2', pub:false},
    {type:'quiz', titleKey:'mi.q2', pts:25, pub:true, ref:'quiz2'},
    {type:'file', titleKey:'mi.f1', pub:false},
    {type:'subheader', titleKey:'mi.s1', pub:true}
  ]}
];

let ASSIGNMENTS = [
  {nameKey:'as1', dueKey:'due.a1', pts:10, pub:true},
  {nameKey:'as2', dueKey:'due.a2', pts:30, pub:true},
  {nameKey:'as3', dueKey:'due.a3', pts:15, pub:false}
];

let QUIZZES = [
  {id:'quiz1', nameKey:'qz1', dueKey:'due.q1', pts:20, n:5, pub:true, minutes:30, attempts:2, instrKey:'qd.instr1'},
  {id:'quiz2', nameKey:'qz2', dueKey:'due.q2', pts:25, n:8, pub:true, minutes:25, attempts:1, instrKey:'qd.instr2'}
];
I18N.en['due.q1']='Oct 8, 11:59 PM'; I18N.en['due.q2']='Oct 12, 11:59 PM';
I18N.es['due.q1']='8 oct, 23:59'; I18N.es['due.q2']='12 oct, 23:59';
I18N.zh['due.q1']='10 月 8 日 23:59'; I18N.zh['due.q2']='10 月 12 日 23:59';

const QUIZ = {
  id:'quiz1',
  questions:[
    {pts:4, type:'mc', textKey:'q1.t', opts:['q1.a','q1.b','q1.c','q1.d'], correct:1},
    {pts:4, type:'mc', textKey:'q2.t', opts:['q2.a','q2.b','q2.c','q2.d'], correct:1},
    {pts:6, type:'essay', textKey:'q3.t'},
    {pts:3, type:'tf', textKey:'q4.t', opts:['qt.true','qt.false'], correct:1},
    {pts:3, type:'mc', textKey:'q5.t', opts:['q5.a','q5.b','q5.c','q5.d'], correct:2}
  ]
};
let quizState = null, quizTimerInt = null;

const STUDENTS = ['Ana Ruiz','Carlos Méndez','Liu Wei','Sara Kim','Diego Fernández','Mei Chen','Pablo Ortega','Yuki Tanaka'];
const GB_COLS = [{k:'gbcol.quiz1',max:20},{k:'gbcol.hw1',max:10},{k:'gbcol.quiz2',max:25},{k:'gbcol.essay',max:30}];
const GB_DATA = [
  [{v:18},{v:9},{v:22},{v:27}],
  [{v:15},{v:8,s:'late'},{v:20},{v:24,s:'resub'}],
  [{v:19},{v:10},{v:24},{v:29}],
  [{v:12,s:'late'},{v:7},{s:'missing'},{v:21}],
  [{v:16},{v:9},{v:19,s:'resub'},{v:26}],
  [{v:20},{v:10},{v:25},{v:30}],
  [{s:'missing'},{v:6,s:'late'},{v:15},{s:'missing'}],
  [{v:17},{v:9},{v:21},{v:25}]
];

const INBOX0 = [
  {from:'Ana Ruiz', sk:'ib1.s', pk:'ib1.p', bk:'ib1.b', time:'10:24'},
  {from:'Carlos Méndez', sk:'ib2.s', pk:'ib2.p', bk:'ib2.b', time:'09:02'},
  {from:'Liu Wei', sk:'ib3.s', pk:'ib3.p', bk:'ib3.b', time:'08:41'}
];
let inboxMsgs = INBOX0.slice();

const EVENTS = [
  {m:10,d:8,k:'ev.quiz1',c:'#2B7ABC'},{m:10,d:9,k:'ev.meeting',c:'#B23E31'},{m:10,d:10,k:'ev.hw1',c:'#03893D'},
  {m:10,d:12,k:'ev.quiz2',c:'#2B7ABC'},{m:10,d:15,k:'ev.unit2',c:'#E06A1B'},{m:11,d:2,k:'ev.midterm',c:'#B23E31'}
];

const CNAV = [
  {p:'course-home',k:'cnav.home',icon:'<path d="M3 10.5L12 3l9 7.5V21H3z"/><path d="M9 21v-6h6v6"/>'},
  {p:'course-announcements',k:'cnav.announcements',icon:'<path d="M3 11l14-5v12L3 13v-2z"/><path d="M7 13v5a2 2 0 004 0v-3"/>'},
  {p:'course-assignments',k:'cnav.assignments',icon:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z"/>'},
  {p:'course-discussions',k:'cnav.discussions',icon:'<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>'},
  {p:'course-grades',k:'cnav.grades',icon:'<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>'},
  {p:'course-people',k:'cnav.people',icon:'<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/>'},
  {p:'course-quizzes',k:'cnav.quizzes',icon:'<circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 015.8 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>'},
  {p:'course-modules',k:'cnav.modules',icon:'<line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>'},
  {p:'course-settings',k:'cnav.settings',icon:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 00.3 1.9 2 2 0 11-2.8 2.8 1.7 1.7 0 00-1.9-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0 1.7 1.7 0 00-1-1.5 1.7 1.7 0 00-1.9.3 2 2 0 11-2.8-2.8 1.7 1.7 0 00.3-1.9 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4 1.7 1.7 0 001.5-1 1.7 1.7 0 00-.3-1.9A2 2 0 117-.9a1.7 1.7 0 001.9.3h.1A1.7 1.7 0 0010 3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.9-.3 2 2 0 112.8 2.8 1.7 1.7 0 00-.3 1.9v.1a1.7 1.7 0 001.5 1H21a2 2 0 110 4 1.7 1.7 0 00-1.6 1z"/>'}
];

const ITEM_ICONS = {
  page:'<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/>',
  assignment:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z"/>',
  quiz:'<circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 015.8 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  file:'<path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"/><polyline points="13,2 13,9 20,9"/>',
  subheader:''
};

/* ---------------- helpers ---------------- */
function esc(s){ const d=document.createElement('div'); d.textContent=s; return d.innerHTML; }
function toast(keyOrText, actionKey, actionFn){
  const el = document.getElementById('toast');
  el.innerHTML = '<span>'+esc(I18N[lang][keyOrText] ? t(keyOrText) : keyOrText)+'</span>' +
    (actionKey ? '<span class="toast-action" id="toastAction">'+esc(t(actionKey))+'</span>' : '');
  if (actionKey) document.getElementById('toastAction').onclick = actionFn;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(()=>el.classList.remove('show'), 3200);
}
function nowTime(){
  try { return new Date().toLocaleTimeString(lang==='zh'?'zh-CN':lang==='es'?'es-ES':'en-US',{hour:'numeric',minute:'2-digit'}); }
  catch(e){ return new Date().toTimeString().slice(0,5); }
}

/* ---------------- routing ---------------- */
const GLOBAL_PAGES = ['dashboard','calendar','inbox','account'];
function showPage(id){
  currentPage = id;
  document.querySelectorAll('.page').forEach(p => p.classList.toggle('active', p.id === 'page-'+id));
  const inCourse = id.indexOf('course-') === 0 || id.indexOf('quiz-') === 0;
  document.body.classList.toggle('in-course', inCourse);
  document.querySelectorAll('.gn-item').forEach(g => g.classList.remove('active'));
  if (inCourse){
    document.getElementById('gn-courses').classList.add('active');
    const sec = id.replace('course-','');
    document.querySelectorAll('.cn-item').forEach(a => a.classList.toggle('active', a.dataset.page === id));
    const cn = CNAV.find(c => c.p === id);
    document.getElementById('crumbSection').textContent = cn ? t(cn.k) :
      (id==='quiz-detail' ? t('cnav.quizzes') : id==='quiz-take' ? t('qd.take') : id==='quiz-submitted' ? t('cnav.quizzes') : '');
  } else {
    const gn = document.getElementById('gn-'+id);
    if (gn) gn.classList.add('active');
  }
  if (id === 'course-grades') renderGradebook();
  if (id === 'calendar') renderCalendar();
  if (id === 'inbox') renderInbox();
  if (id === 'course-home') renderCourseHome();
  try { location.hash = id; } catch(e){}
  window.scrollTo(0,0);
}
function goGlobal(page){ closeTray(); showPage(page); }
function openCourse(id){
  currentCourse = COURSES.find(c => c.id === id) || COURSES[0];
  document.getElementById('cnName').textContent = t(currentCourse.nameKey);
  document.getElementById('cnCode').textContent = currentCourse.code;
  document.getElementById('crumbCourse').textContent = t(currentCourse.nameKey);
  renderCourseNav();
  closeTray();
  showPage('course-home');
}
function toggleCourseNav(){ document.body.classList.toggle('cn-collapsed'); }

/* ---------------- tray (global rail) ---------------- */
function openTray(name, keep){
  currentTray = name;
  document.getElementById('trayTitle').textContent = t('tray.'+name);
  const body = document.getElementById('trayBody');
  if (name === 'courses'){
    body.innerHTML = COURSES.map(c =>
      '<div class="tray-course" onclick="openCourse(\''+c.id+'\')">'+
      '<span class="tc-dot" style="background:'+c.color+'"></span>'+
      '<span><span class="tc-name">'+esc(t(c.nameKey))+'</span><br><span class="tc-code">'+c.code+' · '+t('term.fall')+'</span></span></div>'
    ).join('');
  } else if (name === 'account'){
    body.innerHTML =
      '<div style="display:flex;align-items:center;gap:12px;padding:12px 8px 16px;border-bottom:1px solid var(--border);margin-bottom:8px">'+
      '<div class="acct-avatar" style="width:44px;height:44px;font-size:16px">E</div>'+
      '<div><div style="font-weight:700;font-size:14px">Prof. Elena Torres</div><div style="font-size:12px;color:var(--muted)">elena.torres@school.edu</div></div></div>'+
      '<button class="tray-link" onclick="closeTray();showPage(\'account\')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5"/></svg>'+t('acct.profile')+'</button>'+
      '<button class="tray-link" onclick="closeTray();showPage(\'account\')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.2 4.2l2.8 2.8M17 17l2.8 2.8M1 12h4M19 12h4M4.2 19.8L7 17M17 7l2.8-2.8"/></svg>'+t('acct.settingsPage')+'</button>'+
      '<button class="tray-link" onclick="closeTray();toast(\'toast.logout\')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16,17 21,12 16,7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>'+t('acct.logout')+'</button>';
  } else if (name === 'help'){
    body.innerHTML = '<div class="tray-help">' + [1,2,3].map(i =>
      '<details><summary>'+esc(t('help.q'+i))+'</summary><p>'+esc(t('help.a'+i))+'</p></details>'
    ).join('') + '</div>';
  }
  document.getElementById('tray').classList.add('open');
  document.getElementById('trayOverlay').classList.add('open');
  document.querySelectorAll('.gn-item').forEach(g => g.classList.remove('active'));
  const g = document.getElementById('gn-'+name);
  if (g) g.classList.add('active');
}
function closeTray(){
  currentTray = null;
  document.getElementById('tray').classList.remove('open');
  document.getElementById('trayOverlay').classList.remove('open');
}

/* ---------------- dashboard ---------------- */
function renderDashboard(){
  document.getElementById('courseCards').innerHTML = COURSES.map(c =>
    '<div class="course-card">'+
      '<div class="cc-head" style="background:'+c.color+'" onclick="openCourse(\''+c.id+'\')"></div>'+
      '<div class="cc-body" onclick="openCourse(\''+c.id+'\')">'+
        '<div class="cc-name" style="color:'+c.color+'">'+esc(t(c.nameKey))+'</div>'+
        '<div class="cc-code">'+c.code+'</div>'+
        '<div class="cc-term">'+t('term.fall')+'</div>'+
      '</div>'+
      '<div class="cc-tabs">'+
        '<button class="cc-tab" onclick="openCourse(\''+c.id+'\');showPage(\'course-assignments\')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z"/></svg>'+t('card.assignments')+'</button>'+
        '<button class="cc-tab" onclick="openCourse(\''+c.id+'\');showPage(\'course-announcements\')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11l14-5v12L3 13v-2z"/><path d="M7 13v5a2 2 0 004 0v-3"/></svg>'+t('card.announcements')+'</button>'+
        '<button class="cc-tab" onclick="toast(\'toast.files\')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>'+t('card.files')+'</button>'+
      '</div>'+
    '</div>'
  ).join('');
  document.getElementById('todoList').innerHTML = [1,2,3].map(i =>
    '<div class="todo-item">'+
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>'+
    '<div><div class="td-title" onclick="openCourse(\'bio\');showPage('+(i===1?'\'course-grades\'':i===2?'\'course-modules\'':'\'course-discussions\'')+')">'+esc(t('todo'+i+'.t'))+'</div>'+
    '<div class="td-meta">'+esc(t('todo'+i+'.m'))+'</div></div>'+
    '<button class="todo-x" onclick="this.closest(\'.todo-item\').remove()">&times;</button></div>'
  ).join('');
  document.getElementById('feedbackList').innerHTML = [1,2,3].map(i =>
    '<div class="fb-item"><div class="fb-course">'+esc(t('fb'+i+'.m'))+'</div>'+esc(t('fb'+i+'.t'))+'</div>'
  ).join('');
}

/* ---------------- course ---------------- */
function renderCourseNav(){
  document.getElementById('cnItems').innerHTML = CNAV.map(c =>
    '<button class="cn-item" data-page="'+c.p+'" onclick="showPage(\''+c.p+'\')">'+
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+c.icon+'</svg>'+
    '<span>'+esc(t(c.k))+'</span></button>'
  ).join('');
}
function renderCourseHome(){
  if (!currentCourse) currentCourse = COURSES[0];
  document.getElementById('chTitle').textContent = t(currentCourse.nameKey);
  document.getElementById('chStream').innerHTML = [1,2].map(i =>
    '<div class="fb-item"><div class="fb-course">'+esc(t('hs'+i+'.m'))+'</div>'+esc(t('hs'+i+'.t'))+'</div>'
  ).join('');
  document.getElementById('chComingUp').innerHTML = [1,2].map(i =>
    '<div class="todo-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>'+
    '<div><div class="td-title" onclick="showPage('+(i===1?'\'quiz-detail\'': '\'course-assignments\'')+')">'+esc(t('cu'+i+'.t'))+'</div><div class="td-meta">'+esc(t('cu'+i+'.m'))+'</div></div></div>'
  ).join('');
}

/* ---------------- modules ---------------- */
function publishSvg(){ return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round"><polyline points="20,6 9,17 4,12"/></svg>'; }
function unpubSvg(){ return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><line x1="5" y1="19" x2="19" y2="5"/></svg>'; }

function renderModules(){
  const el = document.getElementById('modulesList');
  el.innerHTML = MODULES.map((m,i) => {
    const name = m.nameKey ? t(m.nameKey) : m.name;
    const items = m.items.map((it,j) => {
      if (it.type === 'subheader')
        return '<li class="mod-item subheader">'+esc(it.titleKey ? t(it.titleKey) : it.title)+
          '<span style="margin-left:auto"></span>'+
          '<button class="pub-toggle '+(it.pub?'published':'unpublished')+'" title="'+t(it.pub?'st.published':'st.unpublished')+'" onclick="toggleItemPublish('+i+','+j+')">'+(it.pub?publishSvg():unpubSvg())+'</button></li>';
      return '<li class="mod-item">'+
        '<svg class="mi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+ITEM_ICONS[it.type]+'</svg>'+
        '<span class="mi-title" onclick="modItemClick('+i+','+j+')">'+esc(it.titleKey ? t(it.titleKey) : it.title)+'</span>'+
        (it.pts ? '<span class="mi-pts">'+it.pts+' '+t('mod.pts')+'</span>' : '<span style="margin-left:auto"></span>')+
        '<button class="pub-toggle '+(it.pub?'published':'unpublished')+'" title="'+t(it.pub?'st.published':'st.unpublished')+'" onclick="toggleItemPublish('+i+','+j+')">'+(it.pub?publishSvg():unpubSvg())+'</button>'+
      '</li>';
    }).join('');
    return '<div class="module'+(m.open?'':' closed')+'">'+
      '<div class="module-header">'+
        '<button class="mod-arrow" onclick="toggleModule('+i+')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><polyline points="6,9 12,15 18,9"/></svg></button>'+
        '<span class="mod-name">'+esc(name)+'<span class="mod-tag">'+t('mod.items',{n:m.items.length})+'</span></span>'+
        '<button class="pub-toggle '+(m.pub?'published':'unpublished')+'" title="'+t(m.pub?'st.published':'st.unpublished')+'" onclick="toggleModPublish('+i+')">'+(m.pub?publishSvg():unpubSvg())+'</button>'+
        '<span class="mod-kebab-wrap"><button class="mod-kebab" onclick="event.stopPropagation();toggleKebab(this)"><svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg></button>'+
          '<span class="kebab-menu"><button onclick="dupModule('+i+')">'+t('menu.duplicate')+'</button><button class="danger" onclick="delModule('+i+')">'+t('menu.delete')+'</button></span>'+
        '</span>'+
      '</div>'+
      '<ul class="mod-items">'+items+'</ul>'+
    '</div>';
  }).join('');
}
function toggleKebab(btn){
  const m = btn.parentElement.querySelector('.kebab-menu');
  const was = m.classList.contains('open');
  document.querySelectorAll('.kebab-menu.open').forEach(x => x.classList.remove('open'));
  if (!was) m.classList.add('open');
}
function toggleModule(i){ MODULES[i].open = !MODULES[i].open; renderModules(); }
function collapseAllModules(){ MODULES.forEach(m => m.open = false); renderModules(); }
function toggleModPublish(i){ MODULES[i].pub = !MODULES[i].pub; renderModules(); }
function toggleItemPublish(i,j){ MODULES[i].items[j].pub = !MODULES[i].items[j].pub; renderModules(); }
function dupModule(i){
  const copy = JSON.parse(JSON.stringify(MODULES[i]));
  copy.open = true;
  MODULES.splice(i+1, 0, copy);
  renderModules();
}
function delModule(i){ MODULES.splice(i,1); renderModules(); toast('toast.deleted'); }
function addModule(){
  MODULES.push({name:t('mod.new'), pub:false, open:true, items:[]});
  renderModules(); toast('toast.moduleAdded');
}
function modItemClick(i,j){
  const it = MODULES[i].items[j];
  if (it.type === 'quiz'){ renderQuizDetail(it.ref || 'quiz1'); showPage('quiz-detail'); }
  else if (it.type === 'assignment'){ showPage('course-assignments'); }
  else toast('toast.preview');
}

/* ---------------- assignments / quizzes tables ---------------- */
function renderAssignments(){
  document.getElementById('assignBody').innerHTML = ASSIGNMENTS.map(a =>
    '<tr><td><span class="lt-name" onclick="toast(\'toast.preview\')">'+esc(t(a.nameKey))+'</span></td><td>'+t(a.dueKey)+'</td><td>'+a.pts+'</td>'+
    '<td><span class="pill '+(a.pub?'published':'unpublished')+'">'+t(a.pub?'st.published':'st.unpublished')+'</span></td></tr>'
  ).join('');
}
function addAssignment(){
  const n = ASSIGNMENTS.length + 1;
  ASSIGNMENTS.push({nameKey:null, name:t('gen.assignment')+' '+n, dueKey:'due.a3', pts:10, pub:false});
  renderAssignments(); toast('toast.itemAdded');
}
function renderQuizzes(){
  document.getElementById('quizBody').innerHTML = QUIZZES.map(q =>
    '<tr><td><span class="lt-name" onclick="renderQuizDetail(\''+q.id+'\');showPage(\'quiz-detail\')">'+esc(q.nameKey ? t(q.nameKey) : q.name)+'</span></td>'+
    '<td>'+t(q.dueKey)+'</td><td>'+q.pts+'</td><td>'+q.n+'</td>'+
    '<td><span class="pill '+(q.pub?'published':'unpublished')+'">'+t(q.pub?'st.published':'st.unpublished')+'</span></td></tr>'
  ).join('');
}
function addQuizRow(){
  QUIZZES.push({id:'quiz1', name:t('gen.quiz')+' '+(QUIZZES.length+1), dueKey:'due.q2', pts:20, n:5, pub:false, minutes:30, attempts:1, instrKey:'qd.instr1'});
  renderQuizzes(); toast('toast.itemAdded');
}

/* ---------------- quiz detail & take ---------------- */
let currentQuiz = 'quiz1';
function renderQuizDetail(id){
  currentQuiz = id;
  const q = QUIZZES.find(x => x.id === id) || QUIZZES[0];
  document.getElementById('qdCard').innerHTML =
    '<div class="qd-title">'+esc(q.nameKey ? t(q.nameKey) : q.name)+'</div>'+
    '<div class="qd-meta">'+
      '<div><b>'+t('qd.due')+'</b>'+t(q.dueKey)+'</div>'+
      '<div><b>'+t('qd.points')+'</b>'+q.pts+'</div>'+
      '<div><b>'+t('qd.questions')+'</b>'+q.n+'</div>'+
      '<div><b>'+t('qd.time')+'</b>'+t('qd.min',{n:q.minutes})+'</div>'+
      '<div><b>'+t('qd.attempts')+'</b>'+q.attempts+'</div>'+
    '</div>'+
    '<div class="qd-instructions"><b style="display:block;margin-bottom:4px">'+t('qd.instructions')+'</b>'+t(q.instrKey)+'</div>'+
    '<button class="btn btn-primary btn-lg" onclick="startQuiz()">'+t('qd.take')+'</button>';
}

function startQuiz(){
  quizState = {answers:{}, flags:{}, timeLeft:30*60, lastSaved:null};
  renderQuizTake();
  showPage('quiz-take');
  if (quizTimerInt) clearInterval(quizTimerInt);
  quizTimerInt = setInterval(() => {
    quizState.timeLeft--;
    const m = Math.floor(quizState.timeLeft/60), s = quizState.timeLeft%60;
    const el = document.getElementById('qtTimer');
    el.textContent = (m<10?'0':'')+m+':'+(s<10?'0':'')+s;
    el.classList.toggle('low', quizState.timeLeft <= 300);
    if (quizState.timeLeft <= 0){ clearInterval(quizTimerInt); confirmSubmit(); }
  }, 1000);
}

function renderQuizTake(){
  const main = document.getElementById('qtMain');
  main.innerHTML = QUIZ.questions.map((q,i) => {
    let body;
    if (q.type === 'essay'){
      body = '<textarea class="q-essay" placeholder="'+t('qt.essayPh')+'" oninput="setEssay('+i+',this.value)">'+esc(quizState.answers[i]||'')+'</textarea>';
    } else {
      body = q.opts.map((ok,j) =>
        '<div class="q-opt'+(quizState.answers[i]===j?' selected':'')+'" onclick="selOpt('+i+','+j+')"><span class="q-radio"></span>'+esc(t(ok))+'</div>'
      ).join('');
    }
    return '<div class="q-box'+(quizState.flags[i]?' flagged':'')+'" id="qbox'+i+'">'+
      '<div class="q-head"><span class="q-label">'+t('qt.q',{n:i+1})+'</span>'+
      '<span class="q-pts">'+q.pts+' '+t('qt.pts')+'</span>'+
      '<button class="q-flag'+(quizState.flags[i]?' flagged':'')+'" title="'+t('qt.flag')+'" onclick="toggleFlag('+i+')"><svg viewBox="0 0 24 24" fill="'+(quizState.flags[i]?'#E8C400':'none')+'" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg></button></div>'+
      '<div class="q-body"><div class="q-text">'+esc(t(q.textKey))+'</div>'+body+'</div></div>';
  }).join('');
  renderQuizSide();
  updateSaved();
}
function renderQuizSide(){
  document.getElementById('qtQList').innerHTML = QUIZ.questions.map((q,i) => {
    const answered = quizState.answers[i] !== undefined && quizState.answers[i] !== '';
    return '<div class="qt-qlink'+(answered?' answered':'')+(quizState.flags[i]?' flagged':'')+'" onclick="scrollToQ('+i+')">'+(i+1)+'</div>';
  }).join('');
}
function selOpt(i,j){
  quizState.answers[i] = j;
  renderQuizTake();
}
function setEssay(i,v){
  quizState.answers[i] = v;
  renderQuizSide();
  updateSaved();
}
function toggleFlag(i){
  quizState.flags[i] = !quizState.flags[i];
  renderQuizTake();
}
function scrollToQ(i){
  const el = document.getElementById('qbox'+i);
  if (el) el.scrollIntoView({behavior:'smooth', block:'center'});
}
function updateSaved(){
  quizState.lastSaved = nowTime();
  document.getElementById('qtSaved').textContent = t('qt.savedAt',{t:quizState.lastSaved});
}
function openSubmitModal(){
  const answered = QUIZ.questions.filter((q,i) => quizState.answers[i] !== undefined && quizState.answers[i] !== '').length;
  openModal(
    '<div class="modal-head"><h3>'+t('qt.confirmT')+'</h3><button class="tray-close" onclick="closeModal()">&times;</button></div>'+
    '<div class="modal-body">'+t('qt.confirmB',{a:answered,n:QUIZ.questions.length})+'</div>'+
    '<div class="modal-foot"><button class="btn btn-secondary" onclick="closeModal()">'+t('qt.cancel')+'</button>'+
    '<button class="btn btn-primary" onclick="confirmSubmit()">'+t('qt.confirm')+'</button></div>'
  );
}
function confirmSubmit(){
  closeModal();
  if (quizTimerInt) clearInterval(quizTimerInt);
  toggleStuChat(false);
  let score = 0, total = 0;
  QUIZ.questions.forEach((q,i) => {
    if (q.type === 'essay') return;
    total += q.pts;
    if (quizState.answers[i] === q.correct) score += q.pts;
  });
  document.getElementById('subScore').innerHTML = t('sub.score',{x:score,total:total})+'<br><span style="font-size:13px;color:var(--muted);font-weight:400">'+t('sub.pending')+'</span>';
  showPage('quiz-submitted');
}
function openModal(html){
  document.getElementById('modalBox').innerHTML = html;
  document.getElementById('modalOverlay').classList.add('open');
}
function closeModal(){ document.getElementById('modalOverlay').classList.remove('open'); }

/* ---------------- gradebook ---------------- */
function renderGradebook(){
  let html = '<thead><tr><th class="gb-student">'+t('gb.student')+'</th>'+
    GB_COLS.map(c => '<th>'+t(c.k)+'<span class="gb-due">'+t('gb.out',{n:c.max})+'</span></th>').join('')+
    '<th>'+t('gb.total')+'</th></tr></thead><tbody>';
  html += STUDENTS.map((s,ri) => {
    let earned = 0, possible = 0;
    const cells = GB_DATA[ri].map((c,ci) => {
      possible += GB_COLS[ci].max;
      if (c.s === 'missing') return '<td class="gb-cell-missing">—<span class="gb-status">'+t('gb.missing')+'</span></td>';
      earned += c.v;
      let cls = '', tag = '';
      if (c.s === 'late'){ cls = 'gb-cell-late'; tag = '<span class="gb-status">'+t('gb.late')+'</span>'; }
      if (c.s === 'resub'){ cls = 'gb-cell-resub'; tag = '<span class="gb-status">'+t('gb.resub')+'</span>'; }
      return '<td class="'+cls+'">'+c.v+tag+'</td>';
    }).join('');
    const pct = Math.round(earned / possible * 1000) / 10;
    return '<tr><td class="gb-student">'+s+'</td>'+cells+'<td class="gb-total">'+pct+'%</td></tr>';
  }).join('');
  document.getElementById('gbTable').innerHTML = html + '</tbody>';
}

/* ---------------- calendar ---------------- */
function renderCalendar(){
  const base = new Date(2026, 9 + calOffset, 1);
  const y = base.getFullYear(), m = base.getMonth();
  const months = I18N[lang].months;
  document.getElementById('calMonth').textContent = lang === 'zh' ? y + ' 年 ' + months[m] : months[m] + ' ' + (lang==='es' ? 'de '+y : y);
  const firstDow = (base.getDay() + 6) % 7; /* Monday-first */
  const daysInMonth = new Date(y, m+1, 0).getDate();
  let html = I18N[lang].weekdays.map(d => '<div class="cal-dow">'+d+'</div>').join('');
  for (let i=0; i<firstDow; i++) html += '<div class="cal-cell other"></div>';
  for (let d=1; d<=daysInMonth; d++){
    const isToday = (y===2026 && m===9 && d===8);
    const evs = EVENTS.filter(e => e.m === m+1 && e.d === d);
    html += '<div class="cal-cell'+(isToday?' today':'')+'"><span class="cal-num">'+d+'</span>'+
      evs.map(e => '<span class="cal-ev" style="background:'+e.c+'" onclick="toast(\''+e.k+'\')">'+esc(t(e.k))+'</span>').join('')+'</div>';
  }
  document.getElementById('calGrid').innerHTML = html;
  document.getElementById('calEvents').innerHTML = EVENTS.map(e => {
    const dateStr = lang === 'zh' ? e.m + ' 月 ' + e.d + ' 日' : months[e.m-1] + ' ' + e.d + (lang==='es' ? '' : '');
    return '<div class="cal-ev-row"><span class="cal-ev-dot" style="background:'+e.c+'"></span>'+esc(t(e.k))+'<span class="cal-ev-date">'+dateStr+'</span></div>';
  }).join('');
}
function calNav(dir){ calOffset += dir; renderCalendar(); }
function calToday(){ calOffset = 0; renderCalendar(); }

/* ---------------- inbox ---------------- */
function renderInbox(){
  document.getElementById('inboxList').innerHTML = inboxMsgs.map((m,i) =>
    '<div class="inbox-item'+(i===inboxSel?' active':'')+'" onclick="inboxOpen('+i+')">'+
    '<span class="ib-time">'+m.time+'</span><div class="ib-from">'+esc(m.from)+'</div>'+
    '<div class="ib-subj">'+esc(m.sk ? t(m.sk) : m.subj)+'</div>'+
    '<div class="ib-prev">'+esc(m.pk ? t(m.pk) : m.body)+'</div></div>'
  ).join('');
  const d = document.getElementById('inboxDetail');
  if (inboxSel < 0){ d.innerHTML = '<div class="inbox-empty">'+t('inbox.empty')+'</div>'; return; }
  const m = inboxMsgs[inboxSel];
  d.innerHTML = '<h3>'+esc(m.sk ? t(m.sk) : m.subj)+'</h3>'+
    '<div class="ib-meta">'+esc(m.from)+' · '+m.time+'</div>'+
    '<div class="ib-body">'+esc(m.bk ? t(m.bk) : m.body)+'</div>';
}
function inboxOpen(i){ inboxSel = i; renderInbox(); }
function openCompose(){
  openModal(
    '<div class="modal-head"><h3>'+t('inbox.newMsg')+'</h3><button class="tray-close" onclick="closeModal()">&times;</button></div>'+
    '<div class="modal-body"><label>'+t('inbox.to')+'</label><input id="cmpTo" value="'+t('inbox.toWhom')+'">'+
    '<label>'+t('inbox.subject')+'</label><input id="cmpSubj">'+
    '<label>'+t('inbox.message')+'</label><textarea id="cmpBody" rows="4"></textarea></div>'+
    '<div class="modal-foot"><button class="btn btn-secondary" onclick="closeModal()">'+t('qt.cancel')+'</button>'+
    '<button class="btn btn-primary" onclick="sendCompose()">'+t('inbox.send')+'</button></div>'
  );
}
function sendCompose(){
  const subj = document.getElementById('cmpSubj').value.trim() || '—';
  const body = document.getElementById('cmpBody').value.trim() || '—';
  inboxMsgs.unshift({from:'Prof. Elena Torres', subj:subj, body:body, time:t('inbox.sent')});
  inboxSel = 0;
  closeModal(); renderInbox(); toast('toast.sent');
}

/* ---------------- announcements / discussions / people / settings ---------------- */
function renderAnnouncements(){
  document.getElementById('annList').innerHTML = [1,2].map(i =>
    '<div class="card ann-item"><h3>'+esc(t('an'+i+'.t'))+'</h3><div class="ann-meta">'+esc(t('an'+i+'.m'))+'</div><p>'+esc(t('an'+i+'.b'))+'</p></div>'
  ).join('');
}
let openDisc = -1;
function renderDiscussions(){
  const list = [
    {tk:'d1.t', mk:'d1.m', n:24, posts:[['dp1.n','dp1.x'],['dp2.n','dp2.x']]},
    {tk:'d2.t', mk:'d2.m', n:31, posts:[['dp3.n','dp3.x'],['dp4.n','dp4.x']]}
  ];
  document.getElementById('discList').innerHTML = list.map((d,i) =>
    '<div class="disc-item" onclick="toggleDisc('+i+')"><div><div class="d-title">'+esc(t(d.tk))+'</div><div class="d-meta">'+esc(t(d.mk))+'</div></div>'+
    '<div class="disc-count"><b>'+d.n+'</b>'+t('d1.c')+'</div></div>'+
    (openDisc === i ? '<div class="disc-thread">'+d.posts.map(p =>
      '<div class="disc-post"><div class="avatar">'+t(p[0]).charAt(0)+'</div><div><div class="dp-name">'+esc(t(p[0]))+'</div><div class="dp-text">'+esc(t(p[1]))+'</div></div></div>'
    ).join('')+'</div>' : '')
  ).join('');
}
function toggleDisc(i){ openDisc = openDisc === i ? -1 : i; renderDiscussions(); }
function renderPeople(){
  const rows = [
    ['Prof. Elena Torres','role.teacher','sec.a'],['Marco Díaz','role.ta','sec.a'],
    ['Ana Ruiz','role.student','sec.a'],['Carlos Méndez','role.student','sec.a'],['Liu Wei','role.student','sec.b'],
    ['Sara Kim','role.student','sec.b'],['Diego Fernández','role.student','sec.a'],['Mei Chen','role.student','sec.b']
  ];
  document.getElementById('peopleBody').innerHTML = rows.map(r =>
    '<tr><td style="font-weight:700">'+r[0]+'</td><td>'+t(r[1])+'</td><td>'+t(r[2])+'</td></tr>'
  ).join('');
}
function renderSettings(){
  document.getElementById('settingsCard').innerHTML = [1,2,3,4].map(i =>
    '<div class="set-row"><div><div class="s-title">'+esc(t('set'+i+'.t'))+'</div><div class="s-desc">'+esc(t('set'+i+'.d'))+'</div></div>'+
    '<div class="switch'+(i===1||i===3?' on':'')+'" onclick="this.classList.toggle(\'on\')"></div></div>'
  ).join('');
}

/* ---------------- Educator AI tray (simulated) ---------------- */
let aiMode = 'quiz', aiSeeded = false, aiSpriteInt = null;
function openAITray(mode){
  aiMode = mode || 'quiz';
  document.getElementById('aiTray').classList.add('open');
  if (!aiSeeded){
    aiSeeded = true;
    addAiMsg('ai', t('ai.welcome'));
    renderAiSugs();
  }
}
function closeAITray(){
  document.getElementById('aiTray').classList.remove('open');
  stopSpriteCycle('aiAvatar','evalia-sprites/waving.svg');
}
function renderAiSugs(){
  document.getElementById('aiSugs').innerHTML =
    '<button class="chat-sug" onclick="aiChip(\'quiz\')">'+t('ai.sugQuiz')+'</button>'+
    '<button class="chat-sug" onclick="aiChip(\'assignment\')">'+t('ai.sugHw')+'</button>';
}
function aiChip(kind){
  aiMode = kind;
  document.getElementById('aiInput').value = t(kind === 'quiz' ? 'ai.sugQuiz' : 'ai.sugHw');
  sendAI();
}
function addAiMsg(who, html){
  const b = document.getElementById('aiBody');
  const d = document.createElement('div');
  d.className = 'chat-msg ' + who;
  if (who === 'user') d.textContent = html; else d.innerHTML = html;
  b.appendChild(d);
  b.scrollTop = b.scrollHeight;
  return d;
}
function startSpriteCycle(imgId, sprites){
  stopSpriteCycle(imgId);
  let i = 0;
  const el = document.getElementById(imgId);
  el.src = sprites[0];
  el._cycle = setInterval(() => { i = (i+1) % sprites.length; el.src = sprites[i]; }, 700);
}
function stopSpriteCycle(imgId, idleSrc){
  const el = document.getElementById(imgId);
  if (el && el._cycle){ clearInterval(el._cycle); el._cycle = null; }
  if (el && idleSrc) el.src = idleSrc;
}
function detectAiMode(text){
  return /assign|homework|tarea|deber|作业|任务|water cycle|ciclo del agua|水循环/i.test(text) ? 'assignment' : 'quiz';
}
function sendAI(){
  const input = document.getElementById('aiInput');
  const msg = input.value.trim();
  if (!msg) return;
  aiMode = detectAiMode(msg);
  addAiMsg('user', msg);
  input.value = '';
  const b = document.getElementById('aiBody');
  const typing = document.createElement('div');
  typing.className = 'chat-typing';
  typing.innerHTML = '<span></span><span></span><span></span>';
  b.appendChild(typing);
  b.scrollTop = b.scrollHeight;
  startSpriteCycle('aiAvatar', ['evalia-sprites/typing.svg','evalia-sprites/writing.svg','evalia-sprites/thinking.svg']);
  setTimeout(() => {
    b.removeChild(typing);
    stopSpriteCycle('aiAvatar','evalia-sprites/presenting.svg');
    if (aiMode === 'quiz'){
      addAiMsg('ai', esc(t('ai.doneQuiz')));
      addAiMsg('ai', quizOutlineHtml());
    } else {
      addAiMsg('ai', esc(t('ai.doneHw')));
      addAiMsg('ai', hwOutlineHtml());
    }
  }, 1600);
}
function aiMcQ(tk, optKeys, correctIdx){
  return '<div class="outline-q"><span class="oq-type mc">'+t('ai.type.mc')+'</span>'+
    '<div class="oq-text">'+esc(t(tk))+'</div>'+
    optKeys.map((ok,j) => '<div class="oq-opt'+(j===correctIdx?' correct':'')+'">'+'ABCD'[j]+'. '+esc(t(ok))+'</div>').join('')+'</div>';
}
function quizOutlineHtml(){
  return '<div class="outline-card"><div class="oc-head">'+esc(t('aq.title'))+'</div>'+
    '<div class="oc-sub">'+t('ai.qcount',{n:4,p:20})+'</div>'+
    aiMcQ('aq.q1.t',['aq.q1.a','aq.q1.b','aq.q1.c','aq.q1.d'],1)+
    aiMcQ('aq.q2.t',['aq.q2.a','aq.q2.b','aq.q2.c','aq.q2.d'],0)+
    aiMcQ('aq.q3.t',['aq.q3.a','aq.q3.b','aq.q3.c','aq.q3.d'],2)+
    '<div class="outline-q"><span class="oq-type essay">'+t('ai.type.essay')+'</span><div class="oq-text">'+esc(t('aq.q4.t'))+'</div><div class="oq-essayhint">'+t('ai.essayHint')+'</div></div>'+
    '<div class="oc-actions"><button class="btn btn-success" onclick="addAIToModule(\'quiz\')">'+t('ai.addToModule')+'</button>'+
    '<button class="btn btn-secondary" onclick="closeAITray();showPage(\'course-modules\')">'+t('ai.viewModules')+'</button></div></div>';
}
function hwOutlineHtml(){
  return '<div class="outline-card"><div class="oc-head">'+esc(t('ah.title'))+'</div>'+
    '<div class="oc-sub">'+t('ai.hwmeta',{p:20})+'</div>'+
    '<div class="outline-q"><div class="oq-text" style="font-weight:400;line-height:1.5">'+esc(t('ah.instr'))+'</div></div>'+
    ['ah.r1','ah.r2','ah.r3'].map(r => '<div class="outline-q" style="padding:6px 14px"><div class="oq-opt correct" style="padding-left:16px">'+esc(t(r))+'</div></div>').join('')+
    '<div class="oc-actions"><button class="btn btn-success" onclick="addAIToModule(\'assignment\')">'+t('ai.addToModule')+'</button>'+
    '<button class="btn btn-secondary" onclick="closeAITray();showPage(\'course-modules\')">'+t('ai.viewModules')+'</button></div></div>';
}
function addAIToModule(kind){
  const title = t(kind === 'quiz' ? 'aq.title' : 'ah.title');
  MODULES.push({
    name:title, pub:false, open:true,
    items:[{type:kind === 'quiz' ? 'quiz' : 'assignment', title:title, pts:20, pub:false, ref:'quiz1'}]
  });
  renderModules();
  toast('ai.added', 'ai.viewModules', function(){ closeAITray(); if (!currentCourse) openCourse('bio'); showPage('course-modules'); });
}

/* ---------------- Student chat (simulated, Socratic) ---------------- */
let stuSeeded = false;
function toggleStuChat(open){
  const el = document.getElementById('stuChat');
  el.classList.toggle('open', open);
  if (open && !stuSeeded){
    stuSeeded = true;
    const b = document.getElementById('stuBody');
    b.innerHTML = '<div class="stu-welcome"><img src="evalia-sprites/waving.svg" alt="Metis"><h5>'+esc(t('stu.welcomeT'))+'</h5><p>'+esc(t('stu.welcomeP'))+'</p></div>';
  }
}
function sendStuChat(){
  const input = document.getElementById('stuInput');
  const msg = input.value.trim();
  if (!msg) return;
  const b = document.getElementById('stuBody');
  const um = document.createElement('div');
  um.className = 'chat-msg user';
  um.textContent = msg;
  b.appendChild(um);
  input.value = '';
  b.scrollTop = b.scrollHeight;
  const typing = document.createElement('div');
  typing.className = 'chat-typing';
  typing.innerHTML = '<span></span><span></span><span></span>';
  b.appendChild(typing);
  b.scrollTop = b.scrollHeight;
  startSpriteCycle('stuAvatar', ['evalia-sprites/thinking.svg','evalia-sprites/typing.svg']);
  setTimeout(() => {
    b.removeChild(typing);
    const asksAnswer = /answer|respuesta|答案|tell me|d[ií]me|告诉我|soluci|what is it|cu[aá]l es/i.test(msg);
    const pool = asksAnswer ? I18N[lang].stuRefusals : I18N[lang].stuResponses;
    const reply = pool[Math.floor(Math.random() * pool.length)];
    const am = document.createElement('div');
    am.className = 'chat-msg ai';
    am.textContent = reply;
    b.appendChild(am);
    b.scrollTop = b.scrollHeight;
    const sprites = asksAnswer ? ['evalia-sprites/shushing.svg'] :
      ['evalia-sprites/encouraging.svg','evalia-sprites/idea.svg','evalia-sprites/explaining-both-hands.svg','evalia-sprites/pointing-up.svg','evalia-sprites/nodding.svg'];
    stopSpriteCycle('stuAvatar', sprites[Math.floor(Math.random() * sprites.length)]);
  }, 1300);
}

/* ---------------- renderAll / init ---------------- */
function renderAll(){
  renderDashboard();
  if (currentCourse){
    document.getElementById('cnName').textContent = t(currentCourse.nameKey);
    document.getElementById('crumbCourse').textContent = t(currentCourse.nameKey);
  }
  renderCourseNav();
  renderModules();
  renderAssignments();
  renderQuizzes();
  renderGradebook();
  renderCalendar();
  renderInbox();
  renderAnnouncements();
  renderDiscussions();
  renderPeople();
  renderSettings();
  if (currentPage.indexOf('course-') === 0 || currentPage.indexOf('quiz-') === 0) showPage(currentPage);
  if (currentPage === 'quiz-take' && quizState) renderQuizTake();
  if (currentPage === 'quiz-detail') renderQuizDetail(currentQuiz);
}

renderAll();
setLang(lang);

/* deep-link via hash */
window.addEventListener('hashchange', function(){
  const id = location.hash.replace('#','');
  if (id && document.getElementById('page-'+id) && id !== currentPage) showPage(id);
});
(function(){
  const id = location.hash.replace('#','');
  if (id && document.getElementById('page-'+id)) showPage(id);
})();
