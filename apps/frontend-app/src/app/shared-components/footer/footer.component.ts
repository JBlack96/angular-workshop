import { Component } from '@angular/core';

@Component({
  selector: 'workshop-footer',
  template: `
    <div class="footer">
      <div class="card text-center">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <a class="nav-link active" aria-current="true" href="#"
                >Need help?</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact us</a>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <h5 class="card-title">
            Not managing to find the book you're after?
          </h5>
          <p class="card-text">
            We're constantly updating our stock so feel free to get in touch
            with use and we'll try organising getting your favourites instock!
          </p>
          <a href="#" class="btn btn-primary">Contact us</a>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {}
