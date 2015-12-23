import {customAttribute, inject} from 'aurelia-framework';
import $ from 'jquery';

@customAttribute('mdi-collapsible')
@inject(Element)
export class MaterializeCollapsible {
  constructor(element) {
    this.element = element;
  }

  attached() {
    $(this.element).collapsible();
  }
}
