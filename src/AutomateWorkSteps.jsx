import {
  Box,
} from "@mui/material";
import { useState } from "react";
import SelectPostSec from "./components/SelectPostSec";
import SelectCommentSec from "./components/SelectCommentSec";
import SetSendDMs from "./components/SetSendDMs";
import OtherAutomation from "./components/OtherAutomation";
import NextButton from "./components/NextButton";


const AutomateWorkSteps = () => {
  const [steps, setSteps] = useState([1])
  const handleNextClick = () => {
    setSteps([...steps, steps.length + 1]);
  }
  return (
    <Box>
      {steps && steps.includes(1) && <SelectPostSec />}
      {!steps.includes(2) && steps.includes(1) && (
        <NextButton handleClick={handleNextClick} />
      )}
      {steps && steps.includes(2) && <SelectCommentSec />}
      {!steps.includes(3) && steps.includes(2) && (
        <NextButton handleClick={handleNextClick} />
      )}
      {steps && steps.includes(3) && <SetSendDMs />}
      {!steps.includes(4) && steps.includes(3) && (
        <NextButton handleClick={handleNextClick} />
      )}
      {steps && steps.includes(4) && <OtherAutomation />}
    </Box>
  );
};

export default AutomateWorkSteps;


