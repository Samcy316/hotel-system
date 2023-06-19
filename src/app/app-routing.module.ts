import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RoompageComponent } from './roompage/roompage.component';
const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'rooms', component:RoompageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
