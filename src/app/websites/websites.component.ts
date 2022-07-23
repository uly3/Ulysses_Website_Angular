import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-websites',
  template: `

<section class="hero is-danger is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">

      <h1 class="title">
        Websites
      </h1>
      
      <h2 class="subtitle">
        What I know about websites...
      </h2>

  <article class="message is-dark">
  <div class="message-header">
    <p>Websites</p>
  </div>
  <div class="message-body">
  <p>A website in simple terms is a place in the web where one can visit and see it's content. Each website's content varies on the topic one is looking for. For example, the website <strong><a href="https://www.codecademy.com/?g_acctid=243-039-7011&g_keywordid=kwd-78958985904710:loc-190&g_adid=&g_keyword=codecademy&g_campaign=US_Brand_Exact&g_adtype=search&g_network=o&g_adgroupid=1263339270701571&g_campaignid=370028884&utm_id=t_kwd-78958985904710:loc-190:ag_1263339270701571:cp_370028884:n_o:d_c&hsa_acc=2430397011&hsa_cam=1954939391&hsa_grp=1263339270701571&hsa_ad=&hsa_src=o&hsa_tgt=kwd-78958985904710:loc-190&hsa_kw=codecademy&hsa_mt=e&hsa_net=adwords&hsa_ver=3&msclkid=79b87717bc6b1946ff4b15023c735e52&utm_source=bing&utm_medium=cpc&utm_campaign=US_Brand_Exact&utm_term=codecademy&utm_content=Codecademy">Codecademy</a></strong>, is a website that teaches the user or client a variety of different computer science topics. Anywhere from learning a computer language to learning computer science principles. A basic website can be composed of three things, HTML (Skelton of the site), CSS (the styling of the site) and Javascript (interactivity of the site). There's obvisously more to it but this the dumb down version of what makes a website.</p>
  </div>
</article>

  </div>
  </div>
</section>

  `,
  styles: [
  ]
})
export class WebsitesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
