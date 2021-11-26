import { SalesItem } from "src/app/shared/sales/model/sales-item.model";

export interface CartItem {
    item: SalesItem;
    quantity: number;
}