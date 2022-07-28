import React from "react";
import { styled } from "@mui/material/styles";
import MuiTextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
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

const TextField = styled(MuiTextField)(({ theme }) => ({
  "& input": {
    padding: "6px",
  },
  "& .MuiOutlinedInput-root": {
    paddingLeft: 0,
  },
  "& .MuiInputAdornment-root": {
    backgroundColor: theme.palette.divider,
    padding: "18px 14px",
    borderTopLeftRadius: theme.shape.borderRadius + "px",
    borderBottomLeftRadius: theme.shape.borderRadius + "px",
    "MuiTypography-root": {
      fontSize: "11px !important",
    },
  },
}));

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
function Screen2(props) {
  const {
    workspaceName,
    workspaceUrl,
    setWorkSpaceName,
    setWorkSpaceUrl,
    setActiveStep,
  } = props;

  const handleWorkSpaceNameChange = (e) => {
    setWorkSpaceName(e.target.value);
  };
  const handleWorkSpaceUrlChange = (e) => {
    setWorkSpaceUrl(e.target.value);
  };
  return (
    <div>
      <Title>Let's set up a home for all your work</Title>
      <Content>You can always create another workspace later.</Content>
      <InputContainer>
        <div>
          <Label>Workspace Name</Label>
          <TextField
            fullWidth
            value={workspaceName}
            onChange={(e) => {
              handleWorkSpaceNameChange(e);
            }}
          />
        </div>
        <div>
          <Label>Workspace Url</Label>
          <TextField
            fullWidth
            value={workspaceUrl}
            onChange={(e) => {
              handleWorkSpaceUrlChange(e);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <p style={{ fontSize: "11px" }}>www.eden.com/</p>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <ButtonStyle
          onClick={() => {
            setActiveStep(2);
          }}
        >
          Create Workspace
        </ButtonStyle>
      </InputContainer>
    </div>
  );
}

export default Screen2;
