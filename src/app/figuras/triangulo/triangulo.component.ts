import { Component } from '@angular/core';

// Importando el decorador Component de Angular
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonImg,
  IonText,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from '@ionic/angular/standalone';

// Importando módulos FormsModule y CommonModule de Angular
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Importando el modelo TrianguloEscaleno
import { TrianguloEscaleno } from '../../modelos/TrianguloEscaleno'; // ← ajusta la ruta si cambiaste carpetas

// Importando el modelo TrianguloEscaleno
@Component({
  standalone: true,
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonImg,
    IonText,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
  ],
})

// Componente TrianguloComponent
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
