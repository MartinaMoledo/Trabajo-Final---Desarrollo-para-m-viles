import { Lugar } from "@/tipos/lugar";

export const MOCK_LUGARES: Lugar[] = [
  {
    id: "lug-001",
    nombre: "Museo Histórico Municipal",
    categoriaId: "cat-museos",
    descripcionCorta: "Explora la historia y el patrimonio cultural de la región.",
    descripcion: "El Museo Histórico Municipal ofrece un recorrido a través de diferentes salas que albergan piezas arqueológicas, documentos históricos y muestras fotográficas de los fundadores de la ciudad.",
    coordenadas: {
      longitud: -57.9839,
      latitud: -30.7512
    },
    direccion: "Av. 9 de Julio 1450",
    imagenes: [
      "https://example.com/images/museo-frente.jpg",
      "https://example.com/images/museo-interior.jpg"
    ],
    horarios: [
      { dia: 1, abre: "08:00", cierra: "18:00" }, // Lunes
      { dia: 2, abre: "08:00", cierra: "18:00" }, // Martes
      { dia: 3, abre: "08:00", cierra: "18:00" }, // Miércoles
      { dia: 4, abre: "08:00", cierra: "18:00" }, // Jueves
      { dia: 5, abre: "08:00", cierra: "18:00" }, // Viernes
      { dia: 6, abre: "09:00", cierra: "13:00" }  // Sábado
    ],
    telefono: "+543456421111",
    sitioWeb: "https://www.municipio.gob.ar/museo",
    precioEntrada: 500,
    codigoQr: "QR-MUSEO-HISTORICO-001",
    audioguia: {
      url: "https://example.com/audio/audioguia-museo.mp3",
      duracionSegundos: 320,
      idioma: "es"
    },
    accesible: true,
    activo: true,
    actualizadoEn: "2026-03-01T10:00:00.000Z"
  },
  {
    id: "lug-002",
    nombre: "Parque de la Estación",
    categoriaId: "cat-parques",
    descripcionCorta: "Espacio verde recreativo al aire libre.",
    descripcion: "Antigua estación de ferrocarril reciclada y convertida en un gran parque público con senderos aeróbicos, juegos infantiles y áreas de descanso.",
    coordenadas: {
      longitud: -57.9890,
      latitud: -30.7485
    },
    direccion: "Bv. 3 de Febrero y Urquiza",
    imagenes: [
      "https://example.com/images/parque-estacion.jpg"
    ],
    horarios: [
      { dia: 0, abre: "00:00", cierra: "23:59" }, // Domingo
      { dia: 1, abre: "00:00", cierra: "23:59" }, // Lunes
      { dia: 2, abre: "00:00", cierra: "23:59" }, // Martes
      { dia: 3, abre: "00:00", cierra: "23:59" }, // Miércoles
      { dia: 4, abre: "00:00", cierra: "23:59" }, // Jueves
      { dia: 5, abre: "00:00", cierra: "23:59" }, // Viernes
      { dia: 6, abre: "00:00", cierra: "23:59" }  // Sábado
    ],
    telefono: null,
    sitioWeb: null,
    precioEntrada: 0, // Gratis
    codigoQr: null,
    audioguia: null,
    accesible: true,
    activo: true,
    actualizadoEn: "2026-02-15T14:30:00.000Z"
  }
];