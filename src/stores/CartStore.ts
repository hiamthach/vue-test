import { defineStore } from "pinia";

import { CartItem, CartList, CartListView } from "@/config/types/cart";

import eventData from "@/data/event";
import productData from "@/data/product";

interface State {
  items: CartList;
}

export const useCartStore = defineStore("cart", {
  state: (): State => ({
    items: [],
  }),
  getters: {
    cartCount: (state): number => {
      return state.items.reduce((total, item) => {
        return total + item.amount;
      }, 0);
    },
    cartItems: (state): CartListView => {
      return state.items.map((item) => {
        const product = productData.find((product) => product.id === item.id);
        const event = eventData.find((event) => event.id === item.id);

        if (product) {
          return {
            ...item,
            id: product.id,
            title: product.title,
            price: product.price,
            imageUrl: product.imageUrl,
          };
        } else if (event) {
          return {
            ...item,
            id: event.id,
            title: event.title,
            price: event.price,
            imageUrl: event.imageUrl,
          };
        } else {
          return item;
        }
      });
    },
    getCartById:
      (state) =>
      (id: string): CartItem | undefined => {
        return state.items.find((item) => item.id === id);
      },
    getTotalPrice: (state): number => {
      return state.items.reduce((total, item) => {
        const product = productData.find((product) => product.id === item.id);
        const event = eventData.find((event) => event.id === item.id);

        if (product) {
          return total + product.price * item.amount;
        } else if (event) {
          return total + event.price * item.amount;
        } else {
          return total;
        }
      }, 0);
    },
  },

  actions: {
    addToCart(item: CartItem) {
      const isExist = this.getCartById(item.id);
      if (isExist) {
        const list = [...this.items];
        this.items = list.map((cartItem) => {
          if (cartItem.id === item.id) {
            return {
              ...cartItem,
              amount: cartItem.amount + item.amount,
            };
          } else {
            return cartItem;
          }
        });
      } else {
        this.items.push(item);
      }
    },
    updateCartItem(id: string, data: CartItem) {
      const list = [...this.items];

      this.items = list.map((item) => {
        if (item.id === id) {
          return data;
        } else {
          return item;
        }
      });
    },
    deleteCartItem(id: string) {
      this.items = this.items.filter((item) => item.id !== id);
    },
  },
});
