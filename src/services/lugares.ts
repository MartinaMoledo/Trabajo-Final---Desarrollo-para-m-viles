import { MOCK_LUGARES } from "@/mocks/lugares.mock";
import { Lugar } from "@/tipos/lugar";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const lugaresService = {
  async getLugares(): Promise<Lugar[]> {
    await delay(300);
    return MOCK_LUGARES
  },

  async getLugarPorId(id: string): Promise<Lugar | null> {
    await delay(200);
    const lugar = MOCK_LUGARES.find((l) => l.id === id);
    return lugar || null;
  },

  async getLugaresPorCategoria(categoriaId: string): Promise<Lugar[]> {
    await delay(250);
    return MOCK_LUGARES.filter((l) => l.categoriaId === categoriaId);
  },
};