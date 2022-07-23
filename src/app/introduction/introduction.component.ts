import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  template: `

<section class="hero is-link is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">

      <h1 class="title">
        Introduction
      </h1>
      
      <h2 class="subtitle">
        A bit about myself...
      </h2>

  <article class="message is-dark">
  <div class="message-header">
    <p>Introduction</p>
  </div>
  <div class="message-body">
  <p>Hello, my name is Ulysses Romero. I'm a 19 year old software engineer apprentice for Seneca. My current hobbies are soccer, video games and learning new things. I typically like learning about anything tech related. I'm currently learning about cryptocurrency and the blockchain.</p>
  </div>
</article>

  </div>
  </div>
</section>



  `,
  styles: [
  ]
})
export class IntroductionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
