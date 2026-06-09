export interface Trabajo {
  id: number;
  titulo: string;
  descripcion: string;
  materiales: string[];
  imagenes: string[];
}

export const trabajos: Trabajo[] = [
  {
    id: 1,
    titulo: 'Placard a medida con luz LED',
    descripcion: 'Placard de piso a techo en cedro, con iluminación LED interior y herrajes italianos.',
    materiales: ['Cedro', 'Luz LED', 'Herrajes premium'],
    imagenes: ['/muebles_img/columna.jpg'],
  },
  {
    id: 2,
    titulo: 'Mesa de comedor en roble',
    descripcion: 'Mesa de roble macizo con base de acero negro. Capacidad para 10 personas.',
    materiales: ['Roble macizo', 'Acero'],
    imagenes: ['/muebles_img/Ideal.jpg', '/muebles_img/La_ideal_2.jpg', '/muebles_img/La_ideal_baño2.jpg', '/muebles_img/baño_la_ideal.jpg', '/muebles_img/recepcion_ideal.jpg'],
  },
  {
    id: 3,
    titulo: 'Biblioteca con puertas de vidrio',
    descripcion: 'Biblioteca empotrada con marcos de madera de nogal y vidrio templado.',
    materiales: ['Nogal', 'Vidrio templado'],
    imagenes: ['/muebles_img/biblioteca.jpg'],
  },
  {
    id: 4,
    titulo: 'Cocina lacada en poliuretano',
    descripcion: 'Cocina integral con laqueado poliuretano blanco mate, manijas rebajadas y mesada de cuarzo.',
    materiales: ['MDF', 'Laqueado poliuretano', 'Cuarzo'],
    imagenes: ['/muebles_img/biblioteca_madera.jpg'],
  },
  {
    id: 5,
    titulo: 'Vestidor con isola central',
    descripcion: 'Vestidor completo con isla central, cajones de cierre suave y espejo de cuerpo entero.',
    materiales: ['Cerezo', 'Espejo', 'Herrajes italianos'],
    imagenes: ['/muebles_img/escalera.jpg'],
  },
  {
    id: 6,
    titulo: 'Escritorio ejecutivo',
    descripcion: 'Escritorio de trabajo en wengué con compartimentos internos y pasa-cables integrado.',
    materiales: ['Wengué', 'Acero inoxidable'],
    imagenes: ['/muebles_img/sillas.jpg', '/muebles_img/biblioteca_roble.jpg', '/muebles_img/bajillero.jpg', '/muebles_img/mesa_roble.jpg'],
  },
];
