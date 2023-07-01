const aspectosDelCaos = [
  {
    descripcion: "Arma funesta de destrucción masiva.",
    min: 1,
    max: 4,
  },
  {
    descripcion: "Efectos de cataclismo ambiental.",
    min: 5,
    max: 9,
  },
  {
    descripcion: "Muerto con vida artificial.",
    min: 10,
    max: 12,
  },
  {
    descripcion: "Forma de vida destructivas de proporciones monstruosas.",
    min: 13,
    max: 17,
  },
  {
    descripcion: "Alucinaciones o ilusiones pavorosas.",
    min: 18,
    max: 20,
  },
  {
    descripcion: "Presagios de una invasión inminente.",
    min: 21,
    max: 24,
  },
  {
    descripcion: "Horda de hambre o furia insaciable.",
    min: 25,
    max: 27,
  },
  {
    descripcion: "Horribles formas de vida de propósito desconocido.",
    min: 28,
    max: 32,
  },
  {
    descripcion: "Impostores en formas humanas.",
    min: 33,
    max: 36,
  },
  {
    descripcion: "Máquinas hechas por el enemigo.",
    min: 37,
    max: 41,
  },
  {
    descripcion: "Contagio maligno o parásito.",
    min: 42,
    max: 45,
  },
  {
    descripcion: "Mensajero o señal con una grave advertencia.",
    min: 46,
    max: 50,
  },
  {
    descripcion: "Puerta a una sombría realidad alternativa.",
    min: 51,
    max: 53,
  },
  {
    descripcion: "Gente corrompida por el caos.",
    min: 54,
    max: 58,
  },
  {
    descripcion: "Poderosa distorsión del tiempo y el espacio.",
    min: 59,
    max: 63,
  },
  {
    descripcion: "Señales de una catástrofe inminente.",
    min: 64,
    max: 68,
  },
  {
    descripcion: "Lugar donde ha sucedido una desaparición desconcertante.",
    min: 69,
    max: 72,
  },
  {
    descripcion: "Lugar donde ha sucedido un desastre terrible.",
    min: 73,
    max: 77,
  },
  {
    descripcion: "Lugar donde ha sucedido una carnicería.",
    min: 78,
    max: 82,
  },
  {
    descripcion: "Tecnología anulada o hecha inestable.",
    min: 82,
    max: 87,
  },
  {
    descripcion: "Extraña tecnología para fines oscuros.",
    min: 88,
    max: 92,
  },
  {
    descripcion: "Bóveda de tecnología o poder temible.",
    min: 93,
    max: 96,
  },
  {
    descripcion: "Adoradores de poderes grandes y malévolos.",
    min: 97,
    max: 100,
  },
];

const descubrimientos = [
  {
    min: 1,
    max: 4,
    descripcion:
      "Tecnología avanzada a la espera de ser aprovechada o recuperada.",
  },
  { min: 5, max: 9, descripcion: "Archivo antiguo o mensaje." },
  {
    min: 10,
    max: 12,
    descripcion: "La inteligencia artificial evolucionó a un estado superior.",
  },
  {
    min: 13,
    max: 17,
    descripcion: "Rastros de un recurso crucial o un dominio inexplorado.",
  },
  { min: 18, max: 20, descripcion: "Enviado de otro tiempo o realidad." },
  { min: 21, max: 24, descripcion: "Fenómeno natural extraordinario." },
  { min: 25, max: 27, descripcion: "Primer contacto con vida inteligente." },
  {
    min: 28,
    max: 32,
    descripcion: "Puerta de entrada a otro tiempo o realidad alternativa.",
  },
  {
    min: 33,
    max: 36,
    descripcion: "Clave para desbloquear un idioma o método de comunicación.",
  },
  { min: 37, max: 41, descripcion: "Gente pérdida u oculta." },
  { min: 42, max: 45, descripcion: "Formas de vida majestuosas o inusuales." },
  { min: 46, max: 50, descripcion: "Maravilla de la ingeniería antigua." },
  {
    min: 51,
    max: 53,
    descripcion: "Objeto o espécimen preservado milagrosamente.",
  },
  {
    min: 54,
    max: 58,
    descripcion: "Arquitectura monumental o arte de una civilización antigua.",
  },
  {
    min: 59,
    max: 63,
    descripcion: "Dispositivo o artefacto misterioso de valor incalculable.",
  },
  {
    min: 64,
    max: 68,
    descripcion: "Nueva comprensión de un misterio antiguo.",
  },
  {
    min: 69,
    max: 72,
    descripcion: "Vía o medio de viaje a un lugar distante.",
  },
  {
    min: 73,
    max: 77,
    descripcion: "Persona o forma de vida con habilidades increíbles.",
  },
  { min: 78, max: 82, descripcion: "Lugar de una belleza imponente." },
  { min: 83, max: 87, descripcion: "Recurso raro y valioso." },
  { min: 88, max: 92, descripcion: "Ubicación protegida o idílica." },
  { min: 93, max: 96, descripcion: "Visiones o profecías del futuro." },
  {
    min: 97,
    max: 100,
    descripcion: "Vuelve a hacer una tirada de nuevo dos veces.",
  },
];
const accionesDecisivas = [
  {
    descripcion:
      "Es peor de lo que pensabas: Haz una jugada de sufrimiento (-2).",
    min: 1,
    max: 40,
  },
  {
    descripcion: "La victoria es corta: un nuevo peligro o enemigo aparece.",
    min: 41,
    max: 52,
  },
  {
    descripcion: "Enfrentarás daños colaterales: algo se pierde, daña o rompe.",
    min: 53,
    max: 64,
  },
  {
    descripcion:
      "Otros pagarán el precio de tus fallos: alguien sufre el coste.",
    min: 65,
    max: 76,
  },
  {
    descripcion:
      "Otros no olvidarán esto: quedarás marcado y querrán cobrar venganza.",
    min: 77,
    max: 88,
  },
  {
    descripcion:
      "Todo se complica: la verdadera naturaleza de tu enemigo u objetivo se revela.",
    min: 89,
    max: 100,
  },
];
const tablaPagarElPrecio = [
  {
    resultado: "Un individuo o comunidad de tu confianza actúa en tu contra",
    min: 1,
    max: 2,
  },
  {
    resultado: "Un individuo o comunidad que te importa está en peligro",
    min: 3,
    max: 4,
  },
  {
    resultado: "Encuentras indicios de una amenaza inminente",
    min: 5,
    max: 7,
  },
  {
    resultado: "Creas una oportunidad para un enemigo",
    min: 8,
    max: 10,
  },
  {
    resultado: "Te enfrentas a una dura decisión",
    min: 11,
    max: 14,
  },
  {
    resultado: "Te enfrentas a las consecuencias de una decisión anterior",
    min: 15,
    max: 18,
  },
  {
    resultado: "Un suceso sorprendente complica tu misión",
    min: 19,
    max: 22,
  },
  {
    resultado: "Te distancias de algo o de alguien",
    min: 23,
    max: 26,
  },
  {
    resultado: "Su acción causa daños colaterales o tiene un efecto no deseado",
    min: 27,
    max: 32,
  },
  {
    resultado: "Algo valioso se pierde o destruye",
    min: 33,
    max: 38,
  },
  {
    resultado: "El escenario o lugar presenta un nuevo desafío",
    min: 39,
    max: 44,
  },
  {
    resultado: "Un nuevo enemigo se revela",
    min: 45,
    max: 50,
  },
  {
    resultado:
      "Un amigo, familiar o aliado sufre un tipo de daño (si estás solo, lo sufres tú)",
    min: 51,
    max: 56,
  },
  {
    resultado: "Tu equipo o vehículo se avería",
    min: 57,
    max: 62,
  },
  {
    resultado: "Tu vehículo sufre daño",
    min: 63,
    max: 68,
  },
  {
    resultado: "Pierdes suministros",
    min: 69,
    max: 74,
  },
  {
    resultado: "Sufres daño",
    min: 75,
    max: 81,
  },
  {
    resultado: "Te estresas",
    min: 82,
    max: 88,
  },
  {
    resultado: "Algo te retrasa o te pone en desventaja",
    min: 89,
    max: 95,
  },
  {
    resultado: "Tira dos veces más",
    min: 96,
    max: 100,
  },
];
