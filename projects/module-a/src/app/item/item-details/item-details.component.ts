import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBackClick() {
    this.router.navigate(['module-a']).then( () => {
        this.router.initialNavigation();
    });
  }

  onRentClick() {

  }

  onBuyClick() {

  }

}
