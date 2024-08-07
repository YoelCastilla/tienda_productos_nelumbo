import { Component } from '@angular/core';
import { Producto } from '../modelos/producto';
import { Marca } from '../modelos/marca';
import { Categoria } from '../modelos/categoria';

@Component({
  selector: 'app-pasarela-productos',
  templateUrl: './pasarela-productos.component.html',
  styleUrls: ['./pasarela-productos.component.scss']
})
export class PasarelaProductosComponent {
  modalVisible = false;
  productoSeleccionado!: Producto;

  
  
  productos: Producto[] = [
    // Categoría: Celulares
    {
      id: 1,
      nombre: 'iPhone 14',
      precio: 999.99,
      imagen: 'assets/images/1.png',
      calificacion: 3.6,
      descripcion: 'Último modelo de iPhone con características avanzadas.',
      categoria: { id: 1, nombre: 'Celulares' },
      marca: { id: 1, nombre: 'Apple' }
    },
    {
      id: 2,
      nombre: 'Samsung Galaxy S23',
      precio: 849.99,
      imagen: 'assets/images/2',
      calificacion: 4.4,
      descripcion: 'Smartphone Samsung con cámara de alta resolución.',
      categoria: { id: 1, nombre: 'Celulares' },
      marca: { id: 2, nombre: 'Samsung' }
    },
    {
      id: 3,
      nombre: 'Google Pixel 7',
      precio: 599.99,
      imagen: 'assets/images/3.jpg',
      calificacion: 4.6,
      descripcion: 'Celular con la mejor integración de Google.',
      categoria: { id: 1, nombre: 'Celulares' },
      marca: { id: 3, nombre: 'Google' }
    },
    {
      id: 4,
      nombre: 'OnePlus 11',
      precio: 699.99,
      imagen: 'assets/images/4.jpg',
      calificacion: 4.3,
      descripcion: 'Celular con excelente rendimiento y diseño.',
      categoria: { id: 1, nombre: 'Celulares' },
      marca: { id: 4, nombre: 'OnePlus' }
    },
    {
      id: 5,
      nombre: 'Xiaomi Mi 13',
      precio: 499.99,
      imagen: 'assets/images/5.png',
      calificacion: 4.2,
      descripcion: 'Smartphone con gran relación calidad-precio.',
      categoria: { id: 1, nombre: 'Celulares' },
      marca: { id: 5, nombre: 'Xiaomi' }
    },
    {
      id: 6,
      nombre: 'Sony Xperia 1 IV',
      precio: 1199.99,
      imagen: 'https://example.com/xperia1iv.jpg',
      calificacion: 4.7,
      descripcion: 'Celular con características profesionales para multimedia.',
      categoria: { id: 1, nombre: 'Celulares' },
      marca: { id: 6, nombre: 'Sony' }
    },

    // Categoría: Computadores
    {
      id: 7,
      nombre: 'MacBook Pro 16"',
      precio: 2399.99,
      imagen: 'https://example.com/macbookpro.jpg',
      calificacion: 4.8,
      descripcion: 'Computadora portátil de alto rendimiento para profesionales.',
      categoria: { id: 2, nombre: 'Computadores' },
      marca: { id: 1, nombre: 'Apple' }
    },
    {
      id: 8,
      nombre: 'Dell XPS 13',
      precio: 1499.99,
      imagen: 'https://example.com/dellxps13.jpg',
      calificacion: 4.6,
      descripcion: 'Ultrabook con excelente diseño y rendimiento.',
      categoria: { id: 2, nombre: 'Computadores' },
      marca: { id: 7, nombre: 'Dell' }
    },
    {
      id: 9,
      nombre: 'HP Spectre x360',
      precio: 1399.99,
      imagen: 'https://example.com/hpspectrex360.jpg',
      calificacion: 4.5,
      descripcion: 'Laptop convertible con gran versatilidad.',
      categoria: { id: 2, nombre: 'Computadores' },
      marca: { id: 8, nombre: 'HP' }
    },
    {
      id: 10,
      nombre: 'Asus ROG Zephyrus G14',
      precio: 1799.99,
      imagen: 'https://example.com/asusrog.jpg',
      calificacion: 4.7,
      descripcion: 'Laptop para gaming con excelente rendimiento gráfico.',
      categoria: { id: 2, nombre: 'Computadores' },
      marca: { id: 9, nombre: 'Asus' }
    },
    {
      id: 11,
      nombre: 'Lenovo ThinkPad X1 Carbon',
      precio: 1699.99,
      imagen: 'https://example.com/thinkpadx1.jpg',
      calificacion: 4.4,
      descripcion: 'Portátil empresarial con alta durabilidad y rendimiento.',
      categoria: { id: 2, nombre: 'Computadores' },
      marca: { id: 10, nombre: 'Lenovo' }
    },
    {
      id: 12,
      nombre: 'Acer Swift 3',
      precio: 899.99,
      imagen: 'https://example.com/acerswift3.jpg',
      calificacion: 4.3,
      descripcion: 'Laptop asequible con buen rendimiento para tareas diarias.',
      categoria: { id: 2, nombre: 'Computadores' },
      marca: { id: 11, nombre: 'Acer' }
    },

    // Categoría: Tablets
    {
      id: 13,
      nombre: 'iPad Pro 12.9"',
      precio: 1099.99,
      imagen: 'https://example.com/ipadpro.jpg',
      calificacion: 4.9,
      descripcion: 'Tablet de alto rendimiento con pantalla grande.',
      categoria: { id: 3, nombre: 'Tablets' },
      marca: { id: 1, nombre: 'Apple' }
    },
    {
      id: 14,
      nombre: 'Samsung Galaxy Tab S8',
      precio: 849.99,
      imagen: 'https://example.com/galaxytabs8.jpg',
      calificacion: 4.6,
      descripcion: 'Tablet con excelente pantalla AMOLED.',
      categoria: { id: 3, nombre: 'Tablets' },
      marca: { id: 2, nombre: 'Samsung' }
    },
    {
      id: 15,
      nombre: 'Microsoft Surface Pro 8',
      precio: 999.99,
      imagen: 'https://example.com/surfacepro8.jpg',
      calificacion: 4.7,
      descripcion: 'Tablet 2 en 1 con Windows y gran potencia.',
      categoria: { id: 3, nombre: 'Tablets' },
      marca: { id: 12, nombre: 'Microsoft' }
    },
    {
      id: 16,
      nombre: 'Lenovo Tab P11',
      precio: 499.99,
      imagen: 'https://example.com/lenovotabp11.jpg',
      calificacion: 4.4,
      descripcion: 'Tablet con buen rendimiento y precio accesible.',
      categoria: { id: 3, nombre: 'Tablets' },
      marca: { id: 10, nombre: 'Lenovo' }
    },
    {
      id: 17,
      nombre: 'Huawei MatePad Pro',
      precio: 699.99,
      imagen: 'https://example.com/matepadpro.jpg',
      calificacion: 4.5,
      descripcion: 'Tablet con gran capacidad de procesamiento y pantalla.',
      categoria: { id: 3, nombre: 'Tablets' },
      marca: { id: 13, nombre: 'Huawei' }
    },
    {
      id: 18,
      nombre: 'Apple iPad Mini',
      precio: 499.99,
      imagen: 'https://example.com/ipadmini.jpg',
      calificacion: 4.3,
      descripcion: 'Tablet compacta ideal para portabilidad.',
      categoria: { id: 3, nombre: 'Tablets' },
      marca: { id: 1, nombre: 'Apple' }
    },

    // Categoría: Audífonos
    {
      id: 19,
      nombre: 'AirPods Pro',
      precio: 249.99,
      imagen: 'https://example.com/airpodspro.jpg',
      calificacion: 4.8,
      descripcion: 'Audífonos inalámbricos con cancelación de ruido.',
      categoria: { id: 4, nombre: 'Audífonos' },
      marca: { id: 1, nombre: 'Apple' }
    },
    {
      id: 20,
      nombre: 'Sony WH-1000XM4',
      precio: 349.99,
      imagen: 'https://example.com/sonywh1000xm4.jpg',
      calificacion: 4.9,
      descripcion: 'Audífonos con excelente calidad de sonido y cancelación de ruido.',
      categoria: { id: 4, nombre: 'Audífonos' },
      marca: { id: 6, nombre: 'Sony' }
    },
    {
      id: 21,
      nombre: 'Bose QuietComfort 35 II',
      precio: 299.99,
      imagen: 'https://example.com/boseqc35ii.jpg',
      calificacion: 4.7,
      descripcion: 'Audífonos con comodidad y cancelación de ruido líder en la industria.',
      categoria: { id: 4, nombre: 'Audífonos' },
      marca: { id: 14, nombre: 'Bose' }
    },
    {
      id: 22,
      nombre: 'Jabra Elite 75t',
      precio: 199.99,
      imagen: 'https://example.com/jabraelite75t.jpg',
      calificacion: 4.5,
      descripcion: 'Audífonos deportivos inalámbricos con gran calidad de sonido.',
      categoria: { id: 4, nombre: 'Audífonos' },
      marca: { id: 15, nombre: 'Jabra' }
    },
    {
      id: 23,
      nombre: 'Sennheiser Momentum 3',
      precio: 349.99,
      imagen: 'https://example.com/sennheisermomentum3.jpg',
      calificacion: 4.6,
      descripcion: 'Audífonos con diseño premium y excelente sonido.',
      categoria: { id: 4, nombre: 'Audífonos' },
      marca: { id: 16, nombre: 'Sennheiser' }
    },
    {
      id: 24,
      nombre: 'Beats Studio3 Wireless',
      precio: 299.99,
      imagen: 'https://example.com/beatsstudio3.jpg',
      calificacion: 4.4,
      descripcion: 'Audífonos con buena calidad de sonido y cancelación activa de ruido.',
      categoria: { id: 4, nombre: 'Audífonos' },
      marca: { id: 17, nombre: 'Beats' }
    }
  ];

  favoritos: Producto[] = [];

  esFavorito(producto: Producto): boolean {
    return this.favoritos.includes(producto);
  }

  toggleFavorite(producto: Producto, event: Event): void {
    event.stopPropagation(); 

    if (this.esFavorito(producto)) {
      this.favoritos = this.favoritos.filter(fav => fav.id !== producto.id);
    } else {
      this.favoritos.push(producto);
    }
  }
  abrirModalDetalle(product: Producto): void {
    this.productoSeleccionado = product;
    this.modalVisible = true;
  }

  handleCancel(): void {
    this.modalVisible = false;
  }

  handleOk(): void {
    this.modalVisible = false;
  }

  abrirDetalleProducto(product: Producto): void {
  }
}