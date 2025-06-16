//Importado de la clase FiguraGeometrica
import { FiguraGeometrica } from './figura-geometrica';

//Exportado de la clase TrianguloEscaleno que extiende de FiguraGeometrica
export class TrianguloEscaleno extends FiguraGeometrica {
  constructor(
    // Propiedades específicas del triángulo escaleno
    // Se definen como números para representar los lados del triángulo
    public ladoA: number,
    public ladoB: number,
    public ladoC: number
  ) {
    super('Triángulo escáleno');
  }
  override calcularPerimetro(): number {
    return this.ladoA + this.ladoB + this.ladoC;
  }
}
