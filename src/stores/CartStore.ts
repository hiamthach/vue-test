import { defineStore } from "pinia";

import { CartItem, CartList } from "@/config/types/cart";

interface State {
  items: CartList;
}

export const useCartStore = defineStore("cart", {
  state: (): State => ({
    items: [],
  }),
  getters: {
    cartCount: (state): number => {
      return state.items.length;
    },
    cartItems: (state): CartList => {
      return state.items;
    },
  },

  actions: {
    addToCart(item: CartItem) {
      return this.items.push(item);
    },
    updateCartItem(id: string, data: CartItem) {
      return this.items.map((item) => {
        if (item.id === id) {
          return data;
        } else {
          return item;
        }
      });
    },
    deleteCartItem(id: string) {
      return this.items.filter((item) => item.id !== id);
    },
  },
});
