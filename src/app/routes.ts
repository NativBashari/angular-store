import { ItemsListComponent } from "src/components/items-list/items-list.component";
import { NewItemComponent } from "src/components/new-item/new-item.component";
import { ItemDetailsComponent } from "../components/item-details/item-details.component";

const Routes =[
    {path: "" , component: ItemsListComponent},
    {path: "item/:id" ,component: ItemDetailsComponent },
    {path: "new" , component: NewItemComponent}
]
export default Routes;