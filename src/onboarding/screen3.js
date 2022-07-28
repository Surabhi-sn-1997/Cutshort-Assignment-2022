import React from "react";
import { styled } from "@mui/material/styles";
import mySelf from "../utils/icon2.png";
import others from "../utils/icon3.png";

const ButtonStyle = styled("button")`
  background-color: #4b38c6d4;
  width: 100%;
  padding: 12px 5px;
  border: none;
  color: #fff;
  font-family: inter;
  margin-top: 20px;
`;
const Title = styled("h2")`
  font-family: inter;
`;
const Content = styled("p")`
  font-family: inter;
  font-size: 13px;
  color: rgb(0 0 0 / 50%);
`;
const InputContainer = styled("div")(({ theme }) => ({
  padding: "20px",
  display: "flex",
  width: "400px",
  margin: "auto",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    width: "auto",
  },
}));

const TabSection = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 20px;
`;
const Tab = styled("Paper")(({ theme }) => ({
  padding: "10px",
  textAlign: "left",
  width: "120px",
  border: "1px solid rgb(0 0 0 / 0.14)",
  borderRadius: "5px",
  [theme.breakpoints.down("md")]: {
    margin: "10px",
    minWidth: "100px",
    padding: "20px",
  },
}));

const ParagraphContent = styled("p")`
  font-family: inter;
  font-size: 13px;
  color: rgb(0 0 0 / 50%);
  margin: 0;
`;

function Screen3(props) {
  const { subscriptionFor, setSubscriptionFor, setActiveStep } = props;
  return (
    <div>
      <Title>How are you planning to use Eden?</Title>
      <Content>We'll streamline your setup experience accordingly.</Content>
      <InputContainer>
        <TabSection>
          <Tab
            onClick={() => {
              setSubscriptionFor("me");
            }}
            style={{
              borderColor:
                subscriptionFor === "me" ? "#4b38c6d4" : "rgb(0 0 0 / 14%)",
            }}
          >
            <img src={mySelf} alt="myself" width="30px" />
            <Content style={{ color: "black", fontSize: "14px" }}>
              For myself
            </Content>
            <ParagraphContent>
              Write Better. Think more clearly. Stay organised
            </ParagraphContent>
          </Tab>
          <Tab
            onClick={() => {
              setSubscriptionFor("others");
            }}
            style={{
              borderColor:
                subscriptionFor === "others" ? "#4b38c6d4" : "rgb(0 0 0 / 14%)",
            }}
          >
            <img src={others} alt="myself" width="30px" />
            <Content style={{ color: "black", fontSize: "14px" }}>
              With my team
            </Content>
            <ParagraphContent>
              Wikis,docs,tasks & projects, all in one place
            </ParagraphContent>
          </Tab>
        </TabSection>
        <ButtonStyle
          onClick={() => {
            setActiveStep(4);
          }}
        >
          Create Workspace
        </ButtonStyle>
      </InputContainer>
    </div>
  );
}

export default Screen3;
