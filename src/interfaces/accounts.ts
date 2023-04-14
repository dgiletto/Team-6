// import { Product } from "./products";
// import { Order } from "./orders";
export interface Account {
    username: string;
    password: string;
    admin: boolean; // Whether they're admin
}

// interface User extends Account {
//     cart: [Product];
//     past_orders: [Order];
// }

// interface Admin extends Account {
//     view_orders: [Order];
// }
