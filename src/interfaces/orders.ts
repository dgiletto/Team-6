import { Product } from "./products";
export interface Order {
    username: string; // Whoever did order
    o_num: string; // Order #
    purchases: [Product];
}
