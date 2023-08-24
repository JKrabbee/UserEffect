import FlexContainerStyled from "../Shared/FlexContainerStyled";
import Story from "./Story";
import storyJoao from "/assets/joao.jpeg";
import storyRafael from "/assets/rafael.png";

export interface Perfis {
  nome: string;
  img: string;
  id: number;
}

const perfis: Perfis[] = [
  {
    nome: "Joao",
    img: storyJoao,
    id: 1,
  },
  {
    nome: "Rafael",
    img: storyRafael,
    id: 2,
  },
];

interface HeaderProps {
  funcao: (id: number) => void;
}

function Header(props: HeaderProps) {
  return (
    <FlexContainerStyled type="header">
      {perfis.map((perfil) => (
        <Story
          foto={perfil.img}
          nome={perfil.nome}
          funcao={() => props.funcao(perfil.id)}
        />
      ))}
    </FlexContainerStyled>
  );
}

export default Header;
