import styled from "styled-components";

interface WrapperProps {
  directionRow?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: ${(props) => (props.directionRow ? "row" : "column")};

  align-items: center;

  ul {
    li {
      font-size: 1.5rem;
      list-style: none;

      margin: 45px;
    }
    span {
      font-weight: bold;
    }
  }

  img {
    width: 50%;
    border-radius: 10px;
  }

  p {
    margin: 50px;
    font-size: large;
  }
`;

export default Wrapper;
