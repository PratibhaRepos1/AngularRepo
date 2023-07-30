import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";


export class AuthGuard implements CanActivate {
    //: boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>

    canActivate(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        
    }
}