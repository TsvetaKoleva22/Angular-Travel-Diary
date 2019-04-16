import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AnonymousGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router
    ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        if(!this.authService.isAuthenticated()){
            return true;
        }
        this.router.navigate(['/']);
        return false;
    }
}