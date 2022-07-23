import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interests',
  template: `

<section class="hero is-info is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">

      <h1 class="title">
        Interests
      </h1>
      
      <h2 class="subtitle">
        Some interests that I have...
      </h2>

  <article class="message is-dark">
  <div class="message-header">
    <p>Interests</p>
  </div>
  <div class="message-body">
  <p>As mentioned before, I have a variety of interests/hobbies. I like sports in general but the sport I prefer the most is soccer. I'm a video game enthusiast, the current game I'm trying to finish is Dark Souls Remastered (I just wish I had more time to play). I prefer any game genre, I'm open to any game as long as it's fun and interesting to invest time in. I like learning new things, especially anything tech related. I own a 3D printer and occasionally I make it print random stuff (a pencil holder, etc).</p>
  </div>
</article>

  </div>
  </div>
</section>

  `,
  styles: [
  ]
})
export class InterestsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
