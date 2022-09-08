import { Component, OnInit } from '@angular/core';
import Item from 'src/models/item.model';
import ItemsService from 'src/services/items.service';

@Component({
  selector: 'items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  items: Item[];
  selectedSorting: any  = 0;

  constructor(private itemsService: ItemsService) {
    this.items = [];
   }

  ngOnInit(): void {
    this.itemsService.get().subscribe((response) => {
      this.items = response as Item[];
    } )
  }

  sortBy(){
    if (this.selectedSorting == 0) return;
    else if(this.selectedSorting == 1){
      this.items.sort((a,b) => a.price - b.price);
    }
    else{
      this.items.sort((a,b) => <any>new Date(a.publishDate) - <any>new Date(b.publishDate))
    }
  }
  deleteItemHandler(id:any){
    this.items.forEach((element, index) => {
      if (element.id == id) this.items.splice(index,1);
    });

  }
}
