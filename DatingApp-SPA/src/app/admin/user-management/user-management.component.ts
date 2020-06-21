import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {AdminService} from '../../services/admin.service';
import {AlertifyService} from '../../services/alertify.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  users: User[];

  constructor(private adminService: AdminService,
              private alertifyService: AlertifyService) { }

  ngOnInit(): void {
    this.getUsersWithRoles();
  }

  getUsersWithRoles() {
    this.adminService.getUsersWithRoles().subscribe((users: User[]) => {
      this.users = users;
    }, error => {
      this.alertifyService.error(error);
    })
  }

}
