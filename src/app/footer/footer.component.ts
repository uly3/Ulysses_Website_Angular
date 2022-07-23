import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `

<footer class="footer">
      <div class="container content has-text-centered is-dark">
        <p>Made With Blood, Sweat, And Tears</p>
      </div>
</footer>

  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
