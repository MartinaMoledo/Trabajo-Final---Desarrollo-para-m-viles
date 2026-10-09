import { Visita } from "@/tipos/visita";

export const VISITAS_MOCK: Visita[] = [
  {
    id: "vis-001",
    usuarioId: "user-123",
    lugarId: "lug-001", 
    fechaHora: "2026-10-05T15:30:00-03:00",
    calificacion: 5,
    comentario: "Excelente museo, la audioguía es muy clara."
  },
  {
    id: "vis-002",
    usuarioId: "user-123",
    lugarId: "lug-002", 
    fechaHora: "2026-10-07T10:00:00-03:00",
    calificacion: 4,
    comentario: "Muy lindo parque para caminar por la mañana."
  }
];