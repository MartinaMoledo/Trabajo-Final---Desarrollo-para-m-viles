import { Evento } from "@/tipos/evento";

export const EVENTOS_MOCK: Evento[] = [
  {
    id: "evt-017",
    nombre: "Peña en el anfiteatro",
    descripcion: "Noche de folclore con artistas de la región.",
    lugarId: "lug-009",
    direccionLibre: null,
    coordenadas: null,
    inicio: "2026-11-14T21:00:00-03:00",
    fin: "2026-11-15T02:00:00-03:00",
    imagenUrl: "https://api.colon.tur.ar/img/pena.jpg",
    precio: 0,
    estado: "programado",
  },
  {
    id: "evt-022",
    nombre: "Visita guiada nocturna en el Molino",
    descripcion: "Recorrido histórico bajo las estrellas.",
    lugarId: "lug-004",
    direccionLibre: null,
    coordenadas: null,
    inicio: "2026-11-20T20:30:00-03:00",
    fin: "2026-11-20T22:00:00-03:00",
    imagenUrl: null,
    precio: 2000,
    estado: "programado",
  }
];