import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { InterestsComponent } from './interests/interests.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { WebsitesComponent } from './websites/websites.component';

const routes: Routes = [//add routes here 
  {
    path: "", //"" goes to homepage ---> " " with space goes to app.component.ts
    component: HomeComponent
  },
  {
    path: "introduction", 
    component: IntroductionComponent
  },
  {
    path: "interests",
    component: InterestsComponent
  },
  {
    path: "education",
    component: EducationComponent
  },
  {
    path: "websites",
    component: WebsitesComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
