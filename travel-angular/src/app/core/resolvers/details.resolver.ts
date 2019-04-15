import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { AdventuresService } from '../services/adventures.service';
import { AdventureI } from '../models/adv.interface';

@Injectable()
// @Injectable({
//     providedIn: 'root'
// })
export class DetailsResolver implements Resolve<AdventureI> {
    constructor(
        private advService: AdventuresService
    ){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const id = route.params['id'];

        return this.advService.getDetailsS(id);
    }
}