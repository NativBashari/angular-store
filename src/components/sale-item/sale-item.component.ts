import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import ItemsService from 'src/services/items.service';

@Component({
  selector: 'sale-item',
  templateUrl: './sale-item.component.html',
  styleUrls: ['./sale-item.component.css']
})
export class SaleItemComponent implements OnInit {

  @Output() onDelete:  EventEmitter<any> = new EventEmitter<any>();
  @Input() item: any;
  constructor(private router: Router, private service: ItemsService) {

   }

  ngOnInit(): void {
  }
itemDetails(id: any){
this.router.navigateByUrl("/item/"+ id)
}
itemPurchase(id: any){
  this.service.delete(id).subscribe(() => {
    this.onDelete.emit(id);
  })
}
}
