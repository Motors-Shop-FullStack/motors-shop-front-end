export interface iCard {
  data: iCardType;
}

export type iCardType = {
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

export interface iActive {
  active: boolean;
}

