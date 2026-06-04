export interface Trabajo {
  id: number;
  titulo: string;
  descripcion: string;
  materiales: string[];
  gradient: string; // placeholder visual hasta tener fotos reales
  // imagen: string; // descomentar cuando haya fotos: e.g. '/images/trabajo-01.jpg'
}

export const trabajos: Trabajo[] = [
  {
    id: 1,
    titulo: 'Placard a medida con luz LED',
    descripcion: 'Placard de piso a techo en cedro, con iluminación LED interior y herrajes italianos.',
    materiales: ['Cedro', 'Luz LED', 'Herrajes premium'],
    gradient: 'linear-gradient(135deg, #2C1A0E 0%, #4A2E1A 40%, #3A2414 100%)',
  },
  {
    id: 2,
    titulo: 'Mesa de comedor en roble',
    descripcion: 'Mesa de roble macizo con base de acero negro. Capacidad para 10 personas.',
    materiales: ['Roble macizo', 'Acero'],
    gradient: 'linear-gradient(135deg, #1A1208 0%, #3D2B12 40%, #2A1E0A 100%)',
  },
  {
    id: 3,
    titulo: 'Biblioteca con puertas de vidrio',
    descripcion: 'Biblioteca empotrada con marcos de madera de nogal y vidrio templado.',
    materiales: ['Nogal', 'Vidrio templado'],
    gradient: 'linear-gradient(135deg, #0E1A14 0%, #1C3428 40%, #142410 100%)',
  },
  {
    id: 4,
    titulo: 'Cocina lacada en poliuretano',
    descripcion: 'Cocina integral con laqueado poliuretano blanco mate, manijas rebajadas y mesada de cuarzo.',
    materiales: ['MDF', 'Laqueado poliuretano', 'Cuarzo'],
    gradient: 'linear-gradient(135deg, #1A1A1A 0%, #2E2E2E 40%, #222222 100%)',
  },
  {
    id: 5,
    titulo: 'Vestidor con isola central',
    descripcion: 'Vestidor completo con isla central, cajones de cierre suave y espejo de cuerpo entero.',
    materiales: ['Cerezo', 'Espejo', 'Herrajes italianos'],
    gradient: 'linear-gradient(135deg, #1A0E1A 0%, #2E1A2E 40%, #241224 100%)',
  },
  {
    id: 6,
    titulo: 'Escritorio ejecutivo',
    descripcion: 'Escritorio de trabajo en wengué con compartimentos internos y pasa-cables integrado.',
    materiales: ['Wengué', 'Acero inoxidable'],
    gradient: 'linear-gradient(135deg, #0A0A0E 0%, #1A1A2E 40%, #12121E 100%)',
  },
];
