﻿import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {User} from '../models/user';
import {UserService} from '../services/user.service';
import {Observable, of} from 'rxjs';
import {AlertifyService} from '../services/alertify.service';
import {catchError} from 'rxjs/operators';

@Injectable()
export class ListsResolver  implements Resolve<User[]>{
  pageNumber = 1;
  pageSize = 5;
  likesParam = 'Likers';

  constructor(private userService: UserService, private router: Router, private alertifyService: AlertifyService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
    return this.userService.getUsers(this.pageNumber, this.pageSize, null, this.likesParam).pipe(
      catchError(error => {
        this.alertifyService.error('Problem retrieving data');
        this.router.navigate(['/home']);
        return of(null);
      })
    )
  }
}
