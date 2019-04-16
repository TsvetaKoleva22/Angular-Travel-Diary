import { CanLoad, Router, Route, UrlSegment } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanLoad {
    constructor(
        private authService: AuthService,
        private router: Router
    ){}

    canLoad(route: Route, segments: UrlSegment[]) {
        if(this.authService.isAdmin()){
            return true;
        }
        this.router.navigate(['/']);
        return false;
    }
}