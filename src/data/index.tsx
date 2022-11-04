import IMG1 from "../assets/img/carro.png";
import IMG2 from "../assets/img/carro2.png";
import IMG3 from "../assets/img/carro3.jpg";
import IMG4 from "../assets/img/carro4.jpg";
import IMG5 from "../assets/img/carro5.jpg";

export const mockDataCard = {
  id: "1234",
  type: "carro",
  active: true,
  title: "Meu carrão",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nesciunt, aspernatur expedita beatae sint id dolor, facilis nemo deleniti, voluptas earum voluptatibus culpa. Facere architecto ad, veniam ratione assumenda sed!",
  km: 120000,
  year: 2010,
  price: 60000,
  advertiser: "Aluno Kenzie",
  image: "#",
};

export const mockProductCard = {
  user: {
    name: "Kenzinho Aluno",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
  ad: {
    mainImg: IMG1,
    imgs: [IMG2, IMG3, IMG4, IMG5],
    title: "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200",
    year: 2020,
    km: 10000,
    price: 60000,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
};
