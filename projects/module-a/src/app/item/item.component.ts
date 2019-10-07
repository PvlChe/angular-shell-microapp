import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item;
  @Output() routerChanges = new EventEmitter();
  @Output() buy = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onDetailsClick() {
    this.router.navigate(['module-a/item/' + this.item._id]);
  }

  onBuyItem(event) {
    this.buy.emit(event.value);
  }
}
