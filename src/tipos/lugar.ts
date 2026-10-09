export interface Coordenadas {
    longitud: number;
    latitud: number;

}

export interface Horario{
    dia: number,
    abre: string;
    cierra: string;
}

export interface Audioguia {
  url: string;
  duracionSegundos: number;
  idioma: "es" | "en" | "pt";
}

export interface Lugar {
    id: string;
  nombre: string;
  categoriaId: string;
  descripcionCorta: string;
  descripcion: string;
  coordenadas: Coordenadas;
  direccion: string;
  imagenes: string[];
  horarios: Horario[];
  telefono: string | null;
  sitioWeb: string | null;
  precioEntrada: number | null; 
  codigoQr: string | null;
  audioguia: Audioguia | null;
  accesible: boolean;
  activo: boolean;
  actualizadoEn: string; 
}