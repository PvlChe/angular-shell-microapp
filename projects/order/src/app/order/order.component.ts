import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {log} from 'util';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  anrede;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSaveClick() {
    this.router.navigate(['invoice']);
    console.log('test a click');
  }

}
