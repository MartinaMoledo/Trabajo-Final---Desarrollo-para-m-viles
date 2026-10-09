import { Visita } from "@/tipos/visita";
import { VISITAS_MOCK } from '../mocks/visitas.mock';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const visitasService = {
  async getVisitas(): Promise<Visita[]> {
    await delay(300);
    return VISITAS_MOCK;
  },

  async getVisitaPorId(id: string): Promise<Visita | null> {
    await delay(200);
    const visita = VISITAS_MOCK.find((v) => v.id === id);
    return visita || null;
  },

  async getVisitasPorUsuario(usuarioId: string): Promise<Visita[]> {
    await delay(250);
    return VISITAS_MOCK.filter((v) => v.usuarioId === usuarioId);
  },

  async registrarVisita(nuevaVisita: Omit<Visita, 'id'>): Promise<Visita> {
    await delay(400);
    const visitaCreada: Visita = {
      ...nuevaVisita,
      id: `vis-${Date.now()}`
    };
    VISITAS_MOCK.push(visitaCreada);
    return visitaCreada;
  }
};