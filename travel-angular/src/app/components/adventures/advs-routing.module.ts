import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdvAllComponent } from './adv-all/adv-all.component';
import { DetailsComponent } from './details/details.component';
import { MyAdvsComponent } from './my-advs/my-advs.component';
import { AdvCreateComponent } from './adv-create/adv-create.component';
import { AdvDeleteComponent } from './adv-delete/adv-delete.component';
import { AdvEditComponent } from './adv-edit/adv-edit.component';
import { FoundAdvComponent } from './found-adv/found-adv.component';

import { DetailsResolver } from 'src/app/core/resolvers/details.resolver';
import { SinglecatResolver } from 'src/app/core/resolvers/singlecat.resolver';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const advsRoutes = [{
    path: '', children: [
        { path: 'all', component: AdvAllComponent },
        {
          path: 'details/:id',
          component: DetailsComponent,
          resolve: { detailsResolver: DetailsResolver }
        },
        {
          path: 'found/:catid',
          component: FoundAdvComponent,
          resolve: { singlecatResolver: SinglecatResolver }
        },
        { path: 'myposts', component: MyAdvsComponent, canActivate: [ AuthGuard ] },
        { path: 'create', component: AdvCreateComponent,  canActivate: [ AuthGuard ] },
        {
          path: 'delete/:id',
          component: AdvDeleteComponent,
          resolve: { detailsResolver: DetailsResolver },
          canActivate: [ AuthGuard ]
        },
        {
          path: 'edit/:id',
          component: AdvEditComponent,
          resolve: { detailsResolver: DetailsResolver },
          canActivate: [ AuthGuard ]
        }
      ]
}]
@NgModule({
    imports: [
        RouterModule.forChild(advsRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AdvsRoutingModule { }