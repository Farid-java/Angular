import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
{
path:'',
component:HomeComponent,
pathMatch:'full'

},
{
  path:'login',
  component:LoginComponent,
  pathMatch:'full'
},
{
  path:'dashboard',
  component:DashBoardComponent,
  pathMatch:'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
