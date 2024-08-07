import { Categoria } from "./categoria";
import { Marca } from "./marca";

export interface Producto {
    id: number;
    nombre: string;
    precio: number;
    marca: Marca;
    imagen: string;
    calificacion: number;
    descripcion: string;
    categoria: Categoria;
  }