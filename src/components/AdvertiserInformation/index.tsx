import { iAdvertiser } from "../../interfaces/advertiser.interface";
import { Typography } from "../../styles/typography/typography";
import { splitName } from "../../utils/splitName";
import { Button } from "../Button";
import * as S from "./styles";
export function AdvertiserInformation({
  user,
  create_ad = false,
}: iAdvertiser) {
  return (
    <S.DivStyled>
      <S.AvatarStyled>
        <Typography tag="p2" fW={600}>
          {splitName(user.name)}
        </Typography>
      </S.AvatarStyled>
      <S.SectionStyled>
        <Typography tag="h6" fW={600}>
          {user.name}
        </Typography>
        <Button variant={"brandOpacity"} width={40}>
          {user.type}
        </Button>
      </S.SectionStyled>
      <Typography tag="p2">{user.description}</Typography>
      {create_ad && (
        <Button variant="outlineBrand" width={30}>
          Criar anuncio
        </Button>
      )}
    </S.DivStyled>
  );
}
