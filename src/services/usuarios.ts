import { USUARIOS_MOCK } from "@/mocks/usuario.mock";
import { Usuario } from "@/tipos/usuario";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const usuarioService = {
  async getUsuarios(): Promise<Usuario[]> {
    await delay(300);
    return USUARIOS_MOCK;
  },

  async getUsuarioPorId(id: string): Promise<Usuario | null> {
    await delay(200);
    const usuario = USUARIOS_MOCK.find((u) => u.id === id);
    return usuario || null;
  },

  async getUsuarioPorEmail(email: string): Promise<Usuario | null> {
    await delay(200);
    const usuario = USUARIOS_MOCK.find((u) => u.email === email);
    return usuario || null;
  },
};