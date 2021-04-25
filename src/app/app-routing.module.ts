import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',redirectTo:'user', pathMatch:'full'},
  {path : 'user', component: UserComponent},
  {path : 'user/:name', component: UserDetailsComponent},
  {path : 'repo/:user/:name', component:RepoDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
