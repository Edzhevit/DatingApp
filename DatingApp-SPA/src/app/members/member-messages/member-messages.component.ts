import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../../models/message';
import {UserService} from '../../services/user.service';
import {AuthService} from '../../services/auth.service';
import {AlertifyService} from '../../services/alertify.service';

@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css']
})
export class MemberMessagesComponent implements OnInit {
  @Input() recipientId: number;
  messages: Message[];

  constructor(private userService: UserService,
              private authService: AuthService,
              private alertifyService: AlertifyService) { }

  ngOnInit(): void {
    this.loadMessages();
  }

  loadMessages() {
    this.userService.getMessageThread(this.authService.decodedToken.nameid, this.recipientId)
      .subscribe(messages => {
        this.messages = messages;
      }, error => {
        this.alertifyService.error(error);
      });
  }

}
