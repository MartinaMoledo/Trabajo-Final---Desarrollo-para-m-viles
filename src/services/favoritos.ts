import { FAVORITOS_MOCK } from "@/mocks/favoritos.mock";
import { Favorito } from "@/tipos/favorito";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const favoritosService = {
  async getFavoritos(): Promise<Favorito[]> {
    await delay(300);
    return FAVORITOS_MOCK;
  },

  async getFavoritosPorUsuario(usuarioId: string): Promise<Favorito[]> {
    await delay(250);
    return FAVORITOS_MOCK.filter((f) => f.usuarioId === usuarioId);
  },

  async agregarFavorito(nuevoFavorito: Omit<Favorito, 'id' | 'agregadoEn'>): Promise<Favorito> {
    await delay(350);
    

    const existe = FAVORITOS_MOCK.find(
      (f) => f.usuarioId === nuevoFavorito.usuarioId && f.lugarId === nuevoFavorito.lugarId
    );
    if (existe) return existe;

    const favoritoCreado: Favorito = {
      ...nuevoFavorito,
      id: `fav-${Date.now()}`,
      agregadoEn: new Date().toISOString()
    };
    
    FAVORITOS_MOCK.push(favoritoCreado);
    return favoritoCreado;
  },

  async eliminarFavorito(usuarioId: string, lugarId: string): Promise<boolean> {
    await delay(300);
    const index = FAVORITOS_MOCK.findIndex(
      (f) => f.usuarioId === usuarioId && f.lugarId === lugarId
    );
    
    if (index !== -1) {
      FAVORITOS_MOCK.splice(index, 1);
      return true;
    }
    return false;
  }
};