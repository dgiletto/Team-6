import { Product } from "./products";
import { Order } from "./orders";
export class Account {
    username: string;
    password: string;
    admin: boolean; // Whether they're admin
}

class User extends Account {
    cart: [Product];
    p_orders: [string];
}

class Admin extends Account {
    p_orders: [Order];
}
