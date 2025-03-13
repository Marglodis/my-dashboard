import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  template: `<h1 class="text-2xl font-bold mb-5">{{ title }} - {{ withShadow }}</h1>`,
  styleUrl: './title.component.css'
})
export class TitleComponent {

  @Input({required: true})
  public title!: string ;

  @Input({transform: booleanAttribute })
  public withShadow:boolean = false

}
