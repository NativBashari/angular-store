import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import Item from "src/models/item.model";

@Injectable()
export class ItemsService{

    constructor(private client: HttpClient){
        
    }

    get(){
        return this.client.get("http://localhost:3000/items");
    }
    geById(id:any){
        return this.client.get("http://localhost:3000/items/"+ id);
    }
    post(item: Item){
        return this.client.post("http://localhost:3000/items", item);
    }
    put(item: Item){
        return this.client.put("http://localhost:3000/items/" + item.id, item);
    }
    delete(id: any){
        return this.client.delete("http://localhost:3000/items/" + id);
    }
}
export default ItemsService;