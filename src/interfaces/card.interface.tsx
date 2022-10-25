export interface iCard {
  data: {
    id: string;
    type: string;
    active: boolean;
    title: string;
    description: string;
    km: number;
    year: number;
    price: number;
    advertiser: string;
    image: string;
  };
}
