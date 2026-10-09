export interface Visita {
  id: string;
  usuarioId: string;       
  lugarId: string;         
  fechaHora: string;       
  calificacion: number | null; 
  comentario: string | null;
}