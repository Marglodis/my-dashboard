import { Component, signal } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";

@Component({
  imports: [TitleComponent],
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
