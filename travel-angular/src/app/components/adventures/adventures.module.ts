import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { AdvAllComponent } from './adv-all/adv-all.component';
import { MyAdvsComponent } from './my-advs/my-advs.component';
import { DetailsComponent } from './details/details.component';
import { DetailsResolver } from 'src/app/core/resolvers/details.resolver';
import { AdvCreateComponent } from './adv-create/adv-create.component';
import { FormsModule } from '@angular/forms';
import { AdvDeleteComponent } from './adv-delete/adv-delete.component';
import { AdvEditComponent } from './adv-edit/adv-edit.component';

@NgModule({
  declarations: [AdvAllComponent, MyAdvsComponent, DetailsComponent, 
    AdvCreateComponent, AdvDeleteComponent, AdvEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'all', component: AdvAllComponent },
      { path: 'myposts', component: MyAdvsComponent },
      {
        path: 'details/:id',
        component: DetailsComponent,
        resolve: { detailsResolver: DetailsResolver }
      },
      { path: 'create', component: AdvCreateComponent},
      {
        path: 'delete/:id',
        component: AdvDeleteComponent,
        resolve: { detailsResolver: DetailsResolver }
      },
      {
        path: 'edit/:id',
        component: AdvEditComponent,
        resolve: { detailsResolver: DetailsResolver }
      },
    ])
  ],
  providers: [
    DetailsResolver
  ]

})
export class AdventuresModule { }
