import { MOCK_CATEGORIAS } from "@/mocks/categorias.mock";
import { Categoria } from "@/tipos/categoria";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const categoriasService = {
  async getCategorias(): Promise<Categoria[]> {
    await delay(300);
    return MOCK_CATEGORIAS
  },

  async getCategoriaPorId(id: string): Promise<Categoria | null> {
    await delay(200);
    const categoria = MOCK_CATEGORIAS.find((c) => c.id === id);
    return categoria || null;
  },
};