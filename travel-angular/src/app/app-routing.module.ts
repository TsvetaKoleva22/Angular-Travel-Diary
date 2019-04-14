import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AboutComponent } from './components/shared/about/about.component';
import { HomeMainComponent } from './components/home/home-main/home-main.component';
import { AdventuresModule } from './components/adventures/adventures.module';
// import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeMainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'adventure', 
    loadChildren: './components/adventures/adventures.module#AdventuresModule'
    // canLoad: [ AuthGuard ] //a ne canActivate!
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
