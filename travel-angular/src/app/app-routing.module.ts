import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AboutComponent } from './components/shared/about/about.component';
import { HomeMainComponent } from './components/home/home-main/home-main.component';

import { AnonymousGuard } from './core/guards/anonymous.guard';
import { AdminGuard } from './core/guards/admin.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeMainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent, canActivate: [ AnonymousGuard ] },
  { path: 'register', component: RegisterComponent, canActivate: [ AnonymousGuard ] },
  { path: 'adventure', 
    loadChildren: './components/adventures/adventures.module#AdventuresModule'
  },
  { path: 'category', 
    loadChildren: './components/categories/categories.module#CategoriesModule',
    canLoad: [ AdminGuard ] //a ne canActivate!
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
