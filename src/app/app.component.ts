import {Component, Injector} from '@angular/core';
import {createNgElementConstructor} from '../elements-dist';

import {PopupService} from './popup.service';
import {PopupComponent} from './popup.component';

@Component({
  selector: 'app-root',
  template: `
    <input #input value="Message">
    <button (click)="popup.showAsComponent(input.value)"> Show as component </button>
    <button (click)="popup.showAsElement(input.value)"> Show as element </button>
  `
})
export class AppComponent {
  constructor(private injector: Injector, public popup: PopupService) {
    const PopupElement = createNgElementConstructor(PopupComponent, {injector: this.injector});
    customElements.define('popup-element', PopupElement);
  }
}
