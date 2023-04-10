import { Product } from "./products";
export class Order {
    username: string; // Whoever did order
    o_num: string; // Order #
    purchases: [Product];
}
