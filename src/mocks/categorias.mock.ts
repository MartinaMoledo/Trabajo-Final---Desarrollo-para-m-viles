import { Categoria } from "@/tipos/categoria";

export const MOCK_CATEGORIAS: Categoria[] = [
  {
    id: "cat-museos",
    nombre: "Museos y Cultura",
    icono: "museum",
    color: "#4A90E2",
    orden: 1
  },
  {
    id: "cat-parques",
    nombre: "Parques y Plazas",
    icono: "park",
    color: "#2ECC71",
    orden: 2
  },
  {
    id: "cat-gastronomia",
    nombre: "Gastronomía",
    icono: "restaurant",
    color: "#E67E22",
    orden: 3
  },
  {
    id: "cat-alojamiento",
    nombre: "Alojamiento",
    icono: "hotel",
    color: "#9B59B6",
    orden: 4
  },
  {
    id: "cat-entretenimiento",
    nombre: "Entretenimiento",
    icono: "local_activity",
    color: "#E74C3C",
    orden: 5
  }
];