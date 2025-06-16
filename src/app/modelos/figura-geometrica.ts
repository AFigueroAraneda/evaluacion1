//Creacion de la clase abstracta FiguraGeometrica
export abstract class FiguraGeometrica {
  constructor(public nombre: string) {}
  // Método abstracto que debe ser implementado por las clases hijas
  abstract calcularPerimetro(): number;
}
