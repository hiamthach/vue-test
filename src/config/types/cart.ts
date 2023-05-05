export type CartItem = {
  id: string;
  amount: number;
};

export type CartItemView = {
  id: string;
  amount: number;
  title?: string;
  price?: number;
  imageUrl?: string;
}

export type CartList = Array<CartItem>;

export type CartListView = Array<CartItemView>;
