import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { MostRecentComponent } from './most-recent/most-recent.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [WelcomeComponent, MostRecentComponent, HomeMainComponent],
  imports: [
    CommonModule, 
    RouterModule
  ]
})
export class HomeModule { }
