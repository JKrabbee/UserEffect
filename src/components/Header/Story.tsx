import StoryStyled from "./StoryStyled";

interface CardProps {
  foto: string;
  nome: string;
  funcao: () => void;
}

function Story(props: CardProps) {
  return (
    <StoryStyled>
      <img src={props.foto} alt={props.nome} onClick={props.funcao} />
    </StoryStyled>
  );
}

export default Story;
