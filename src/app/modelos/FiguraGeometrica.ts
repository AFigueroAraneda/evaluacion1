//Creacion de la clase abstracta FiguraGeometrica
export abstract class FiguraGeometrica {
  // Propiedad nombre detallada en el UML
  constructor(public nombre: string) {}
  // Método abstracto que debe ser implementado por las clases hijas detallado en el UML
  abstract calcularPerimetro(): number;
}
