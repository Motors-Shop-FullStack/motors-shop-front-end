import Car from "../../assets/carr1.svg";
import { AdvertiserInformation } from "../../components/AdvertiserInformation";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { VehicleViewer } from "../../components/VehicleViewer";
import * as S from "./styles";
const test = [
  {
    id: "1",
    type: "carro",
    active: false,
    title: "Teste Carro 1",
    description: "Teste Carro 1",
    km: 0,
    year: 2019,
    price: 15000.0,
    advertiser: "Saulo José",
    image: Car,
  },
  {
    id: "1",
    type: "moto",
    active: false,
    title: "Teste Carro 1",
    description: "Teste Carro 1",
    km: 0,
    year: 2019,
    price: 15000.0,
    advertiser: "Saulo José",
    image: Car,
  },
  {
    id: "1",
    type: "carro",
    active: false,
    title: "Teste Carro 1",
    description: "Teste Carro 1",
    km: 0,
    year: 2019,
    price: 15000.0,
    advertiser: "Saulo José",
    image: Car,
  },
  {
    id: "1",
    type: "moto",
    active: false,
    title: "Teste Carro 1",
    description: "Teste Carro 1",
    km: 0,
    year: 2019,
    price: 15000.0,
    advertiser: "Saulo José",
    image: Car,
  },
  {
    id: "1",
    type: "moto",
    active: false,
    title: "Teste Carro 1",
    description: "Teste Carro 1",
    km: 0,
    year: 2019,
    price: 15000.0,
    advertiser: "Saulo José",
    image: Car,
  },
  {
    id: "1",
    type: "moto",
    active: false,
    title: "Teste Carro 1",
    description: "Teste Carro 1",
    km: 0,
    year: 2019,
    price: 15000.0,
    advertiser: "Saulo José",
    image: Car,
  },
];
export function ProfilePage() {
  return (
    <S.DivStyled>
      <Header />
      <S.SectionInformationStyled>
        <section className="informations">
          <AdvertiserInformation
            user={{
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
              name: "Hyan Lopes",
              type: "anunciante",
            }}
          />
        </section>
      </S.SectionInformationStyled>
      <VehicleViewer list={test} />
      <Footer />
    </S.DivStyled>
  );
}
