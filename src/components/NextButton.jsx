import { Button } from "@mui/material";

const NextButton = ({handleClick}) => {
  return <Button sx={{my: "10px", border: "1px solid gray"}} onClick={() => handleClick()}>Next</Button>;
};


export default NextButton;