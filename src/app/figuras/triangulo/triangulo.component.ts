import { Component } from '@angular/core';
import {
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
  IonImg, IonText, IonItem, IonLabel, IonInput, IonButton
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TrianguloEscaleno } from '../../modelos/TrianguloEscaleno';  // ← ajusta la ruta si cambiaste carpetas

@Component({
  standalone: true,
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  imports: [
    CommonModule, FormsModule,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
    IonImg, IonText, IonItem, IonLabel, IonInput, IonButton
  ]
})
export class TrianguloComponent {

  /* Binding de los tres lados */
  ladoA = 0;
  ladoB = 0;
  ladoC = 0;

  resultado?: number;

  calcular(): void {
    const figura = new TrianguloEscaleno(this.ladoA, this.ladoB, this.ladoC);
    this.resultado = figura.calcularPerimetro();
  }
}
