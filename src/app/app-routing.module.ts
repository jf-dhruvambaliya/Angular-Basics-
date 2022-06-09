import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SinglePersonComponent } from './single-person/single-person.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [{
  path:"user",
  component:UserComponent
},
{
  path:"about",
  component:AboutComponent
},
{
  path:"about/:name",
  component:SinglePersonComponent
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
