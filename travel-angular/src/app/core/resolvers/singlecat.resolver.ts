import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { CategoriesService } from '../services/categories.service';
import { CategoryI } from '../models/cat.interface';

@Injectable()
// @Injectable({
//     providedIn: 'root'
// })
export class SinglecatResolver implements Resolve<CategoryI> {
    constructor(
        private catService: CategoriesService
    ){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const catid = route.params['catid'];

        return this.catService.getSingleCatS(catid);
    }
}