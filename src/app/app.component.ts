import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `<main>
    <header class="brand-name">

      <a>
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
      </a>

      <a [routerLink]="['/admin']" class="a-admin"> admin </a>
      <a [routerLink]="['/']" class="a-user"> user </a>

    </header>
    <section class="content">
      <router-outlet> </router-outlet>
    </section>
  </main>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homes';
}
