import React from 'react';
import styled from 'styled-components';

const Section = ({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImage,
}) => {
  return (
    <Wrap bgImage={backgroundImage}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>
          {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.5;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  margin: 20px;
  &:hover {
    background-color: black;
  }
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  color: black;
  opacity: 0.5;
  &:hover {
    background-color: white;
    opacity: 0.6;
  }
`;
const DownArrow = styled.img`
  margin-top: 10px;
  height: 50px;
  margin-left: 45%;
  margin-bottom: 30px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;
const Buttons = styled.div``;
