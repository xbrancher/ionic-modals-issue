import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ExampleModalComponent } from './modals/example-modal/example-modal.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
  ],
  declarations: [
    ExampleModalComponent
  ]
})
export class CoreModule {
}
