import { Component } from '@angular/core';

@Component({
  selector: 'home-page-component',
  template: `<div>
    <h2>Home</h2>
    <!-- Placeholder infomation for homepage -->
    <hr class="featurette-divider" />
    <div class="card">
      <div class="container">
        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">
              First featurette heading.
              <span class="text-muted">It’ll blow your mind.</span>
            </h2>
            <p class="lead">
              Some great placeholder content for the first featurette here.
              Imagine some exciting prose here.
            </p>
          </div>
          <div class="col-md-5">
            <svg
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee"></rect>
              <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <hr class="featurette-divider" />
    <div>
      <h4>Lorem Ipsum?</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mauris
        libero, consectetur quis diam quis, tincidunt molestie ex. Cras
        tincidunt elit sit amet nunc ornare sagittis. Aenean est sem, bibendum
        quis vehicula eu, scelerisque eu risus. Aenean at augue venenatis,
        ultricies mauris quis, eleifend leo. Proin enim odio, posuere at blandit
        eu, eleifend sed nibh. Nam vel nunc sit amet arcu rutrum pretium in in
        magna. Nulla lorem sapien, eleifend sit amet dolor non, rutrum accumsan
        metus. Quisque eget odio accumsan, finibus lacus sed, pulvinar sem.
        Etiam vitae turpis eu nibh ullamcorper semper ac ac velit. Donec pretium
        urna sed ante mattis dictum. Cras placerat lorem lobortis mi feugiat, id
        porttitor ante bibendum. Sed vitae mauris in nulla porta auctor.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Pellentesque ut urna sed turpis vulputate accumsan.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mauris
        libero, consectetur quis diam quis, tincidunt molestie ex. Cras
        tincidunt elit sit amet nunc ornare sagittis. Aenean est sem, bibendum
        quis vehicula eu, scelerisque eu risus. Aenean at augue venenatis,
        ultricies mauris quis, eleifend leo. Proin enim odio, posuere at blandit
        eu, eleifend sed nibh. Nam vel nunc sit amet arcu rutrum pretium in in
        magna. Nulla lorem sapien, eleifend sit amet dolor non, rutrum accumsan
        metus. Quisque eget odio accumsan, finibus lacus sed, pulvinar sem.
        Etiam vitae turpis eu nibh ullamcorper semper ac ac velit. Donec pretium
        urna sed ante mattis dictum. Cras placerat lorem lobortis mi feugiat, id
        porttitor ante bibendum. Sed vitae mauris in nulla porta auctor.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Pellentesque ut urna sed turpis vulputate accumsan.
      </p>
      <h4>pulvinar libero?</h4>
      <p>
        Fusce iaculis rhoncus tellus, et pulvinar libero ultrices vel. Etiam
        posuere finibus malesuada. Aenean ante nisl, hendrerit quis lacinia at,
        pretium id augue. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Fusce tristique, ipsum et interdum tempus, magna eros viverra
        tellus, at tincidunt dolor mauris sed metus. Nulla ac lorem
        sollicitudin, commodo sapien sed, congue massa. Donec vel imperdiet
        turpis, vel tempus lectus. Donec mollis eleifend odio ut finibus. Donec
        sed ex luctus, consequat velit non, aliquet enim. Nunc feugiat mi
        suscipit nisi tempor, nec mattis metus imperdiet. Nunc eget nibh sed
        lectus fringilla dignissim ac ac nibh. In consequat turpis non neque
        facilisis, sed ultrices risus lacinia. Curabitur commodo ligula eu erat
        posuere, at lobortis mauris ultrices.
      </p>
      <h4>Phasellus pharetra?</h4>
      <p>
        Aenean id tristique mi, a condimentum augue. Donec pellentesque molestie
        magna sit amet elementum. Maecenas aliquet tortor tortor, nec vehicula
        neque posuere sed. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. In quis lorem non diam ultricies eleifend. Phasellus pharetra diam
        eu urna dictum tristique. Fusce sed accumsan neque. Nulla in turpis
        condimentum, rutrum leo in, molestie magna. Integer ac velit massa.
        Suspendisse metus mauris, laoreet et mi id, scelerisque porta eros.
        Vivamus vestibulum dolor mi, a iaculis enim fringilla a. Fusce aliquet
        enim vitae sollicitudin consectetur.
      </p>
    </div>
  </div>`,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
