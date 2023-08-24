import styled from "styled-components";

const StoryStyled = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 40px;

  border-radius: 50%;
  border: 3px solid #e76f51;
  overflow: hidden;

  img {
    width: 100%;
    cursor: pointer;
  }

  transition: transform 0.3s ease;

  &:hover {
    transform: scale(0.9);
  }
`;

export default StoryStyled;
