import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent} from './homepage/homepage.component';
import { SubpageComponent} from './subpage/subpage.component';


const routes: Routes = [
  {
    path:"",
    component: HomepageComponent
  },
  {
    path:"post/:id",
    component: SubpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
