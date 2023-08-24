import FlexContainerStyled from "../Shared/FlexContainerStyled";
import Story from "./Story";
import storyGuilherme from "/assets/guilherme.png";
import storyJoao from "/assets/joao.jpeg";
import storyRafael from "/assets/rafael.png";

export interface Perfis {
  username: string;
  img: string;
}

const perfis: Perfis[] = [
  {
    username: "JKrabbee",
    img: storyJoao,
  },
  {
    username: "RafaelApolinario",
    img: storyRafael,
  },
  {
    username: "guilhermebari",
    img: storyGuilherme,
  },
];

interface HeaderProps {
  funcao: (username: string) => void;
}

function Header(props: HeaderProps) {
  return (
    <FlexContainerStyled type="header">
      {perfis.map((perfil) => (
        <Story
          foto={perfil.img}
          nome={perfil.username}
          funcao={() => props.funcao(perfil.username)}
        />
      ))}
    </FlexContainerStyled>
  );
}

export default Header;
