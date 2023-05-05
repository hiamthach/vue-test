export type Event = {
  id: string;
  title: string;
  subtitle: string;
  date: Date;
  description: string;
  location: string;
  imageUrl: string;
  price: number;
};

export type ListEvent = Array<Event>;
