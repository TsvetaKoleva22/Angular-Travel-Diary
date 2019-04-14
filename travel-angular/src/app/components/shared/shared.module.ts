import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SingleAdvComponent } from './single-adv/single-adv.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, AboutComponent, SingleAdvComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [FooterComponent, HeaderComponent, SingleAdvComponent]
})
export class SharedModule { }