import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import { sliderItems } from "../../../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  color: black;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 0.8s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${(props) => props.bg});
  z-index: -1;
  background-repeat: no-repeat;
  background-size: cover;
`;
const InfoContainer = styled.div`
  padding: 0 7%;
`;
const Title = styled.h1`
  font-size: 60px;
  text-transform: capitalize;
`;
const Subtitle = styled.p`
  margin: 2% 0;
  font-size: 20px;
  font-weight: 600;
  color: #1eb2a6;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
const Content = styled.p`
  padding-top: 2%;
  line-height: 30px;
  font-size: 18px;
`;
const Button = styled.button`
  font-size: 20px;
  cursor: pointer;
  padding: 17px 30px;
  background-color: #1eb2a6;
  color: #fff;
  font-weight: 600;
  border: none;
  margin: 30px 10px 0 0;
  border-radius: 3px;
  box-shadow: 0 24px 36px -11px rgb(0 0 0 / 9%);
  transition: 0.5s;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      // right arrow
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.img} key={item.id}>
            <InfoContainer>
              <Subtitle>{item.subtitle}</Subtitle>
              <Title>{item.title}</Title>
              <Content>{item.content}</Content>
              <Button>Get Started Now!</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
