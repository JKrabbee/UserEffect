import FlexContainerStyled from "../Shared/FlexContainerStyled";
import Wrapper from "./Wrapper";

interface ContentProps {
  userData: {
    login: string;
    avatar_url: string;
    name: string;
    location: string;
    followers: number;
    following: number;
    public_repos: number;
    bio: string;
  };
}

function Content(props: ContentProps) {
  return (
    <FlexContainerStyled type="content">
      <Wrapper>
        <Wrapper directionRow>
          <img src={props.userData.avatar_url} alt="" />
          <div>
            <ul>
              <li>
                <span>Nome:</span> {props.userData.name}
              </li>
              <li>
                <span>Localização:</span> {props.userData.location}
              </li>
              <li>
                <span>Seguidores:</span> {props.userData.followers}
              </li>
              <li>
                <span>Seguindo:</span> {props.userData.following}
              </li>
              <li>
                <span>Repositórios Publicos:</span>{" "}
                {props.userData.public_repos}
              </li>
            </ul>
          </div>
        </Wrapper>
        <div>
          <p>{props.userData.bio}</p>
        </div>
      </Wrapper>
    </FlexContainerStyled>
  );
}

export default Content;
