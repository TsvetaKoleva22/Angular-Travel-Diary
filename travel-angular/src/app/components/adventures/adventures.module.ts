import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { AdvAllComponent } from './adv-all/adv-all.component';
import { MyAdvsComponent } from './my-advs/my-advs.component';

@NgModule({
  declarations: [AdvAllComponent, MyAdvsComponent],
  imports: [
    CommonModule, 
    SharedModule,
    RouterModule.forChild([
      {path: 'all', component: AdvAllComponent},
      {path: 'myposts', component: MyAdvsComponent},
    ])
  ]
})
export class AdventuresModule { }
