import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  public showContect = signal(false);
  public frameworks = signal( ['Angular', 'React', 'Vue','Svelte'] );
  public frameworks2 = signal( []);
  public toggleContent() {
    this.showContect.update(value => !value);
  }
}
