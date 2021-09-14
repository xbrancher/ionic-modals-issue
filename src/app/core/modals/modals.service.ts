import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ExampleModalComponent } from './example-modal/example-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalsService {

  constructor(private modalCtrl: ModalController) {
  }

  async example(cssClass?: string): Promise<any> {
    return this.modalCtrl.create({
      component: ExampleModalComponent,
      componentProps: {},
      cssClass,
      presentingElement: await this.modalCtrl.getTop()
    }).then(modal => {
      modal.present();
      return modal;
    });
  }
}
