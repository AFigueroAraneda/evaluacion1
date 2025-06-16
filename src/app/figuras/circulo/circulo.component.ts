// Importando el decorador Component de Angular
import { Component } from '@angular/core';
// Importando componentes de Ionic
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

// Importado de módulos forms y common de Angular
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Importando el modelo Circulo
import { Circulo } from '../../modelos/circulo'; // ⬅️ ajusta la ruta si cambió

@Component({
  standalone: true,
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  imports: [
    // Angular
    CommonModule,
    FormsModule,
    // Ionic
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
export class CirculoComponent {
  // Propiedades del componente
  radio = 0;
  resultado?: number;

  // Método para calcular el perímetro del círculo
  calcular(): void {
    const figura = new Circulo(this.radio);
    this.resultado = +figura.calcularPerimetro().toFixed(2);
  }
}
