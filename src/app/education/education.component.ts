import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  template: `

<section class="hero is-warning is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">

      <h1 class="title">
        Education
      </h1>
      
      <h2 class="subtitle">
        A bit about what I know...
      </h2>

  <article class="message is-dark">
  <div class="message-header">
    <p>Education</p>
  </div>
  <div class="message-body">
  <p>I'm a 19 year old undergrad for the University of DePaul. My current major is Computer science and I plan to get my Bachelor's Degree (maybe a Master's Degree after). The reason for this is because I believe a Computer Science degree is more marketable than a Game Engineer degree. I graduated from Lane Technical High school in the year 2021. I'm also software engineer apprentice for Seneca.</p>
  </div>
</article>

  </div>
  </div>
</section>

  `,
  styles: [
  ]
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
