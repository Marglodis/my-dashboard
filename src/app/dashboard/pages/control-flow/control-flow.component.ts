import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  public showContect = signal(false);

  public toggleContent() {
    this.showContect.update(value => !value);
  }
}
