import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CompartilhadoModule } from './../compartilhado/compartilhado.module';
import { ExercicioDoisComponent } from './exercicio-dois/exercicio-dois.component';
import { ExercicioUmComponent } from './exercicio-um/exercicio-um.component';
import { ExerciciosRoutingModule } from './exercicios-routing.module';
import { PacientesComponent } from './pacientes/pacientes.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ExercicioUmComponent,
    ExercicioDoisComponent,
    PacientesComponent
  ],
  imports: [
    CommonModule,
    ExerciciosRoutingModule,
    CompartilhadoModule,
    FormsModule
    ],
  exports: [
    ExercicioUmComponent,
    ExercicioDoisComponent

  ]
})
export class ExerciciosModule { }
