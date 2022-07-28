import React, { useState } from "react";
import { useTheme } from "@mui/system";
import { styled } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Logo from "../utils/icon1.png";
import Screen1 from "./screen1";
import Screen2 from "./screen2";
import Screen3 from "./screen3";
import Screen4 from "./screen4";

const Root = styled("div")`
  padding: 30px;
`;
const TopSection = styled("div")`
  display: flex;
  flex-direction: column;
`;
const StepperContainer = styled("div")`
  width: 300px;
  margin: auto;
`;
const BottomSection = styled("div")`
  display: flex;
  flex-direction: column;
`;

const HeadingPanel = styled("div")`
  display: flex;
  flex-direction: row;
  padding: 10px;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

function OnboardingPage(props) {
  const [activeStep, setActiveStep] = useState(0);
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [workspaceName, setWorkSpaceName] = useState("");
  const [workspaceUrl, setWorkSpaceUrl] = useState("");
  const [subscriptionFor, setSubscriptionFor] = useState("");
  const steps = [1, 2, 3, 4];

  return (
    <div>
      <Root>
        <TopSection>
          <HeadingPanel>
            <div>
              <img src={Logo} alt="logo"></img>
            </div>
            <p style={{ fontWeight: "bold", fontFamily: "inter" }}>Eden</p>
          </HeadingPanel>
          <StepperContainer>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step
                  key={label}
                  sx={{
                    "& .MuiStepLabel-root .Mui-completed": {
                      color: "#4b38c6d4", // circle color (COMPLETED)
                    },
                    "& .MuiStepLabel-root .Mui-active": {
                      color: "#4b38c6d4", // circle color (ACTIVE)
                    },
                  }}
                >
                  <StepLabel />
                </Step>
              ))}
            </Stepper>
          </StepperContainer>
        </TopSection>
        <BottomSection>
          {activeStep === 0 ? (
            <Screen1
              name={name}
              displayName={displayName}
              setName={setName}
              setDisplayName={setDisplayName}
              setActiveStep={setActiveStep}
            />
          ) : activeStep === 1 ? (
            <Screen2
              workspaceName={workspaceName}
              workspaceUrl={workspaceUrl}
              setWorkSpaceName={setWorkSpaceName}
              setWorkSpaceUrl={setWorkSpaceUrl}
              setActiveStep={setActiveStep}
            />
          ) : activeStep === 2 ? (
            <Screen3
              subscriptionFor={subscriptionFor}
              setSubscriptionFor={setSubscriptionFor}
              setActiveStep={setActiveStep}
            />
          ) : (
            <Screen4 name={name} />
          )}
        </BottomSection>
      </Root>
    </div>
  );
}

export default OnboardingPage;
