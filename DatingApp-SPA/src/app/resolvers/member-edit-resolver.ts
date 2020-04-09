import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {User} from '../models/user';
import {UserService} from '../services/user.service';
import {Observable, of} from 'rxjs';
import {AlertifyService} from '../services/alertify.service';
import {catchError} from 'rxjs/operators';
import {AuthService} from "../services/auth.service";

@Injectable()
export class MemberEditResolver  implements Resolve<User>{

  constructor(private userService: UserService, private authService: AuthService,
              private router: Router, private alertifyService: AlertifyService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return this.userService.getUser(this.authService.decodedToken.nameid).pipe(
      catchError(error => {
        this.alertifyService.error('Problem retrieving data');
        this.router.navigate(['/members']);
        return of(null);
      })
    )
  }
}
