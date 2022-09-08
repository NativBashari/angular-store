
export class Item{
    id: any;
    title: string;
    description: string;
    image: string;
    price: number;
    city: string;
    phone: string;
    publishDate: Date;
    constructor(title: string, description: string, image: string, city: string, price:number, phone: string){
        this.city = city;
        this.description = description;
        this.image = image;
        this.phone = phone;
        this.title = title;
        this.price= price;
        this.publishDate = new Date();
    }

}
export default Item;