import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

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
`;
const TextFieldInput = styled(TextField)`
  & input {
    padding: 6px;
  }
`;

const Label = styled("p")`
  color: #333c44;
  font-family: inter;
  margin-bottom: 10px;
  font-size: 12px;
  text-align: left;
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

function Screen1(props) {
  const { name, displayName, setName, setDisplayName, setActiveStep } = props;
  const [error, setError] = useState({ name: false, display: false });
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleDisplayNameChange = (e) => {
    setDisplayName(e.target.value);
  };
  const handleNameBlur = (e) => {
    if (!name) {
      setError({
        ...error,
        name: true,
      });
    }
  };
  const handleDisplayBlur = (e) => {
    if (!displayName) {
      setError({
        ...error,
        display: true,
      });
    }
  };

  const validate = () => {
    if (!name) {
      setError({
        ...error,
        name: true,
      });
      return;
    }
    if (!displayName) {
      setError({
        ...error,
        display: true,
      });
      return;
    }
    setActiveStep(1);
  };

  return (
    <div>
      <Title>Welcome! First things first...</Title>
      <Content>You can always change them later.</Content>
      <InputContainer>
        <div>
          <Label>Full Name</Label>
          <TextFieldInput
            fullWidth
            value={name}
            onBlur={handleNameBlur}
            onChange={(e) => {
              handleNameChange(e);
            }}
          />
          <div style={{ color: "red", textAlign: "left", fontSize: "10px" }}>
            {error && error.name ? "Full Name is required!!" : null}
          </div>
        </div>
        <div>
          <Label>Dispaly Name</Label>
          <TextFieldInput
            fullWidth
            value={displayName}
            onBlur={handleDisplayBlur}
            onChange={(e) => {
              handleDisplayNameChange(e);
            }}
          />
          <div style={{ color: "red", textAlign: "left", fontSize: "10px" }}>
            {error && error.display ? "Display Name is required!!" : null}
          </div>
        </div>
        <ButtonStyle
          onClick={() => {
            validate();
          }}
        >
          Create Workspace
        </ButtonStyle>
      </InputContainer>
    </div>
  );
}

export default Screen1;
