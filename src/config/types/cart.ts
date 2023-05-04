import type { Product } from "./product";
import type { Event } from "./event";

export type CartItem = {
  id: string;
  amount: number;
};

export type CartItemProduct = CartItem & Product;
export type CartItemEvent = CartItem & Event;

export type CartList = Array<CartItem>;
