import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

<section class="hero is-primary is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">

      <h1 class="title">
        Welcome
      </h1>
      
      <h2 class="subtitle">
        Enjoy learning a thing or two about me...
      </h2>

<div class="card" style="height: 400px; width: 400px; margin-left:auto; margin-right:auto">
<div class="card-image">
    <figure class="image is-4by3" style="height: 400px; width: 400px; margin-left:auto; margin-right:auto">
      <img src="https://media1.tenor.com/images/e3333f7cf658f7cefd74c9de8908a2a3/tenor.gif?itemid=11760244">
    </figure>
</div>
</div>

  </div>
  </div>
</section>

  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
