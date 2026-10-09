import { EVENTOS_MOCK } from "@/mocks/evento.mock";
import { Evento } from "@/tipos/evento";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const eventosService = {
  async getEventos(): Promise<Evento[]> {
    await delay(300);
    return EVENTOS_MOCK;
  },

  async getEventoPorId(id: string): Promise<Evento | null> {
    await delay(200);
    const evento = EVENTOS_MOCK.find((e) => e.id === id);
    return evento || null;
  },
};