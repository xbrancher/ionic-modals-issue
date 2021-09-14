import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-example-modal',
  templateUrl: './example-modal.component.html',
  styleUrls: ['./example-modal.component.scss']
})
export class ExampleModalComponent {

  form: FormGroup;

  constructor(private modalCtrl: ModalController, fb: FormBuilder) {
    this.form = fb.group({
      date: fb.control(null)
    });
  }

  close(): void {
    this.modalCtrl.dismiss();
  }
}
