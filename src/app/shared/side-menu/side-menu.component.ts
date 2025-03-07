import { Component } from '@angular/core';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-side-menu',
  imports: [],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public menuItem = routes.map(route => route.children ?? [])
  .flat()
  .filter(route => route && route.path)
  .filter(route => !route.path?.includes(':') );

  constructor() { 

/*     const dashboardRoutes = routes.map(route => route.children ?? [])
    .flat()
    .filter(route => route && route.path)
    .filter(route => !route.path?.includes(':') );

    console.log(dashboardRoutes);  */

  }

    
  }
