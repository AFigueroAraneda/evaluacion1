import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSelect,
  IonSelectOption,
  IonCard,
  IonCardContent,
  IonButton,
  IonInput,
  IonImg,
  IonText,
} from '@ionic/angular/standalone'; // Importando componentes de Ionic

import { FormsModule } from '@angular/forms'; // Importando FormsModule para el manejo de formularios
import { CommonModule } from '@angular/common'; // Importando CommonModule para directivas comunes

// Importado de componentes de figuras
import { CirculoComponent } from '../figuras/circulo/circulo.component';
import { TrianguloComponent } from '../figuras/triangulo/triangulo.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

  imports: [
    // Layout y estructura
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,

    //Selectores y opciones
    IonSelect,
    IonSelectOption,

    // Tarjetas y contenido
    IonCard,
    IonCardContent,
    IonImg,
    IonText,

    // Botón y entrada de texto
    IonButton,
    IonInput,

    // Componentes lógicos
    CirculoComponent,
    TrianguloComponent,

    // Importando FormsModule para el manejo de formularios
    FormsModule,

    // Importando CommonModule para directivas comunes
    CommonModule,
  ],
})
export class HomePage {
  // Variable para almacenar la figura seleccionada
  figura: 'circulo' | 'triangulo' | null = null;

  constructor() {}
}
