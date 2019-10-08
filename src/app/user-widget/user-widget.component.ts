import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

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
      this.userService.getUserByID(localStorage.userID).subscribe(
        user => {
          this.user = user[0];
        }
      );
    }
  }

}
