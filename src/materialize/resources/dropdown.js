import {customAttribute, inject, bindable} from 'aurelia-framework';
import $ from 'jquery';

@customAttribute('mdi-dropdown')
@inject(Element)
export class MaterializeDropdown {
  @bindable hover = false;

  constructor(element) {
    this.element = element;
  }

  attached() {
    $(this.element).dropdown({hover: this.hover});
  }
}
