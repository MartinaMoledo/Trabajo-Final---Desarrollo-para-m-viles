import { Usuario } from "@/tipos/usuario";

export const USUARIOS_MOCK: Usuario[] = [
  {
    id: "user-123",
    nombre: "Martín Gómez",
    email: "martin@example.com",
    avatarUrl: "https://example.com/avatars/martin.jpg",
    rol: "usuario",
    activo: true,
    creadoEn: "2026-01-15T08:00:00.000Z"
  },
  {
    id: "user-456",
    nombre: "Ana Pérez",
    email: "ana.guia@example.com",
    avatarUrl: null,
    rol: "guia",
    activo: true,
    creadoEn: "2026-02-10T12:30:00.000Z"
  }
];