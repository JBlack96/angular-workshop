import { Component } from '@angular/core';

@Component({
  selector: 'workshop-header',
  template: ` <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Shamazon</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              class="nav-link"
              aria-current="page"
              routerLink="/"
              routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact: true }"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/books" routerLinkActive="active"
              >View Books</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>`,
})
export class HeaderComponent {}
