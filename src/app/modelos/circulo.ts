//Importado de la clase FiguraGeometrica
import { FiguraGeometrica } from './FiguraGeometrica';

//Exportado de la clase Circulo que extiende de FiguraGeometrica
export class Circulo extends FiguraGeometrica {
  constructor(public radio: number) {
    super('Círculo');
  }
  override calcularPerimetro(): number {
    // Fórmula del perímetro de un círculo: P = 2 * π * r
    return 2 * Math.PI * this.radio;
  }
}
