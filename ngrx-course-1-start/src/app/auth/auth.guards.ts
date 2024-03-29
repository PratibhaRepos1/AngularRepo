import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Route, RouterStateSnapshot, UrlTree } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { isLoggedIn } from "./auth.selector";
import { AuthState } from "./reducers";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private store: Store<AuthState>,
        private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.store
        .pipe(
            select(isLoggedIn),
            tap(loggedIn => {
                if(!loggedIn) {
                    this.router.navigateByUrl('/login');
                }
            })
        )
    }

}