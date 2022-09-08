import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import Item from 'src/models/item.model';
import ItemsService from 'src/services/items.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  item: Item;
  id: any;

  constructor(private activatedRoute: ActivatedRoute, private itemsService: ItemsService) {
    this.item= new Item("","","","",0,"");
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.itemsService.geById(this.id).subscribe(response =>
        this.item = response as Item);
    })
    console.log(this.id);
    console.log(this.item);
  }

}
