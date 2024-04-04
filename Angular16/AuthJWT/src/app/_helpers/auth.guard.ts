import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authService.currentUserValue;
        if (currentUser) {
            // User is authenticated, so return true
            return true;
        }

        // User is not authenticated, so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
