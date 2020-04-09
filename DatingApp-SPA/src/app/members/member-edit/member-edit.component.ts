import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../models/user';
import {ActivatedRoute} from '@angular/router';
import {AlertifyService} from '../../services/alertify.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm', {static: true}) editForm: NgForm;
  user: User;

  constructor(private route: ActivatedRoute, private alertifyService: AlertifyService) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });
  }

  updateUser() {
    this.alertifyService.success('Profile updated successfully')
    this.editForm.reset(this.user);
  }
}
