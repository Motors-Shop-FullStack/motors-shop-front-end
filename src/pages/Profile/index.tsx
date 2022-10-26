import { AdvertiserInformation } from "../../components/AdvertiserInformation";
import { Header } from "../../components/Header";
import * as S from "./styles";
export function ProfilePage() {
  return (
    <S.DivStyled>
      <Header advertiser="Hyan Lopes" />
      <S.SectionStyled>
        <div className="informations">
          <AdvertiserInformation
            user={{
              name: "Hyan Lopes",
              description: "uma descrição grande",
              type: "anunciante",
            }}
          />
        </div>
      </S.SectionStyled>
    </S.DivStyled>
  );
}
