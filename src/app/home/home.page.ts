import { Component } from '@angular/core';

import { ModalsService } from '../core/modals/modals.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modals: ModalsService) {
  }

  example(): void {
    this.modals.example();
  }

  exampleXXL(): void {
    this.modals.example('modal-xxl');
  }
}
