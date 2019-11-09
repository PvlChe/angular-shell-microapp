import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item;
  constructor(private router: Router) { }

  ngOnInit() {}

  onDetailsClick() {
    this.router.navigate(['product/item/' + this.item._id]);
  }
}
