import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { AdvAllComponent } from './adv-all/adv-all.component';
import { DetailsComponent } from './details/details.component';
import { MyAdvsComponent } from './my-advs/my-advs.component';
import { AdvCreateComponent } from './adv-create/adv-create.component';
import { AdvDeleteComponent } from './adv-delete/adv-delete.component';
import { AdvEditComponent } from './adv-edit/adv-edit.component';
import { FoundAdvComponent } from './found-adv/found-adv.component';

import { DetailsResolver } from 'src/app/core/resolvers/details.resolver';
import { SinglecatResolver } from 'src/app/core/resolvers/singlecat.resolver';

import { AdvsRoutingModule } from './advs-routing.module';

@NgModule({
  declarations: [AdvAllComponent, MyAdvsComponent, DetailsComponent,
    AdvCreateComponent, AdvDeleteComponent, AdvEditComponent, FoundAdvComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AdvsRoutingModule
  ],
  providers: [
    DetailsResolver,
    SinglecatResolver
  ]

})
export class AdventuresModule { }
