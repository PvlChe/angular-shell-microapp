import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-widget',
  templateUrl: './user-widget.component.html',
  styleUrls: ['./user-widget.component.scss']
})
export class UserWidgetComponent implements OnInit {
  user;
  constructor(private userService: UserService) { }

  ngOnInit() {
    if (localStorage.userID) {
      this.getUser(localStorage.userID).subscribe(
        user => {
          this.user = user[0];
        }
      );
    }
  }

  getUser(id: string) {
    return this.userService.getUserByID(id);
  }
}
