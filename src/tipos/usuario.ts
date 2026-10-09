export interface Usuario {
  id: string;
  nombre: string;
  email: string;
  avatarUrl: string | null;
  rol: "admin" | "usuario" | "guia";
  activo: boolean;
  creadoEn: string; 
}