import React from "react";
import { styled } from "@mui/material/styles";
import Check from "../utils/icon4.png";

const Title = styled("h2")`
  font-family: inter;
`;
const Content = styled("p")`
  font-family: inter;
  font-size: 13px;
  color: rgb(0 0 0 / 50%);
`;
const InputContainer = styled("div")`
  padding: 20px;
  display: flex;
  width: 300px;
  margin: auto;
  flex-direction: column;
  align-items: center;
`;
const ButtonStyle = styled("button")`
  background-color: #4b38c6d4;
  width: 100%;
  padding: 12px 5px;
  border: none;
  color: #fff;
  font-family: inter;
  margin-top: 20px;
`;
function Screen4(props) {
  const { name } = props;
  return (
    <div style={{ marginTop: "30px" }}>
      <InputContainer>
        <img src={Check} alt="check" />
        <Title>Congratulation, {name}!</Title>
        <Content>
          You have completed onboarding, you can start using Eden!
        </Content>
        <ButtonStyle>Launch Eden</ButtonStyle>
      </InputContainer>
    </div>
  );
}

export default Screen4;
