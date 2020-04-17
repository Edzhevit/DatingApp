import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {AlertifyService} from '../services/alertify.service';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  registerForm: FormGroup;

  constructor(private authService: AuthService, private alertifyService: AlertifyService) {
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl()
    })
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      this.alertifyService.success('registration successful');
    }, error => {
      this.alertifyService.error(error);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
