type user = {
  name: string;
  description: string;
};

type ad = {
  mainImg: string;
  imgs: [];
  title: string;
  year: number;
  km: number;
  price: number;
  description: string;
};

export interface iProduct {
  product: {
    user: {
      name: string;
      description: string;
    };
    ad: {
      mainImg: string;
      imgs: string[];
      title: string;
      year: number;
      km: number;
      price: number;
      description: string;
    };
  };
}
