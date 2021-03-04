import { Component } from '@angular/core';

@Component({
  selector: 'angular-workshop-root',
  template: `
    <div class="flex-full-page">
      <workshop-header></workshop-header>
      <div class="container">
        <router-outlet></router-outlet>
      </div>
      <workshop-footer></workshop-footer>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
