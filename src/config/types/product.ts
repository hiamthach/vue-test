export type Product = {
  id: string;
  title: string;
  price: number;
  categories: string[];
  description: string;
  imageUrl: string;
};

export type ListProduct = Array<Product>;
