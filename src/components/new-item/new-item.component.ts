import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Item from 'src/models/item.model';
import ItemsService from 'src/services/items.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {


  constructor(private itemsService: ItemsService, private router: Router) {
   
   }

  ngOnInit(): void {
  }
  addItem(){
    if(this.newItemForm.valid){
      let title = this.newItemForm.controls['title'].value;
      let description = this.newItemForm.controls['description'].value;
      let image = this.newItemForm.controls['image'].value;
      let price = this.newItemForm.controls['price'].value;
      let phone = this.newItemForm.controls['phone'].value;
      let city = this.newItemForm.controls['city'].value;

      let item = new Item(title,description,image,city,price,phone);
      this.itemsService.post(item).subscribe(response => {
        console.log(response);
        this.router.navigateByUrl("");
      })
    }
    else{
      alert("Form is invalid");
    }

    
  }
   
  newItemForm: FormGroup = new FormGroup({
    title: new FormControl("title", [Validators.required, Validators.minLength(2)]),
    description: new FormControl("description", [Validators.required, Validators.minLength(10)]),
    image: new FormControl("image",[Validators.required, Validators.pattern('https?:\/\/.*\.(?:png|jpg|jpeg|jfif)')]),
    phone: new FormControl("phone", [Validators.required, Validators.minLength(10), Validators.pattern(/^-?(0|[0-9]\d*)?$/)]),
    price: new FormControl(0, [Validators.min(1)]),
    city: new FormControl("city", [Validators.required, Validators.minLength(2)])
  })
}
