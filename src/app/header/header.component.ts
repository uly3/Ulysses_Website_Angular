import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `

<div class="navbar is-dark">

  <!-- Logo -->
  <div class="navbar-brand">
    <!-- navbar items, navbar burger... -->
    <a class="navbar-item">
      <img src="assets/img/u_logo.png">
    </a>
  </div>

  <!-- Menu -->
  <div class="navbar-menu">
  <div class="navbar-start"> <!-- navbar-start goes to the beginning -->
    <a class="navbar-item" routerLink="/">Home</a> <!-- use routerLink to link pages -->
    <a class="navbar-item" routerLink="/introduction">Introduction</a>
    <a class="navbar-item" routerLink="/interests">Interests</a>
    <a class="navbar-item" routerLink="/education">Education</a>
    <a class="navbar-item" routerLink="/websites">Websites</a>
  </div>
  </div>


</div>

  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
