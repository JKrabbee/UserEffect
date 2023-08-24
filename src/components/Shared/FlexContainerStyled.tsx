import { css, styled } from "styled-components";

interface FlexContainerProps {
  type: "content" | "header";
}

const FlexContainerStyled = styled.div<FlexContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => {
    switch (props.type) {
      case "content":
        return css`
          height: calc(100vh - 150px);
        `;
      case "header":
        return css`
          height: 150px;
          width: 100vw;

          background-color: #264653;
        `;
      default:
    }
  }}
`;

export default FlexContainerStyled;
