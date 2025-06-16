//Importado de la clase FiguraGeometrica
import { FiguraGeometrica } from './FiguraGeometrica';

//Exportado de la clase TrianguloEscaleno que extiende de FiguraGeometrica
export class TrianguloEscaleno extends FiguraGeometrica {
  constructor(
    // Propiedades específicas del triángulo escaleno según el UML
    // Se definen como números para representar los lados del triángulo
    public ladoA: number,
    public ladoB: number,
    public ladoC: number
  ) {
    super('Triángulo escáleno');
  }
  //Implementación del método abstracto calcularPerimetro especificado en el UML
  override calcularPerimetro(): number {
    return this.ladoA + this.ladoB + this.ladoC;
  }
}
