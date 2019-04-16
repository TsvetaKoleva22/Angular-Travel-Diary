import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { CatAllComponent } from './cat-all/cat-all.component';
import { CatCreateComponent } from './cat-create/cat-create.component';

@NgModule({
  declarations: [CatAllComponent, CatCreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'all', component: CatAllComponent },
      { path: 'create', component: CatCreateComponent }
    ])
  ],
  providers: []
})
export class CategoriesModule { }
