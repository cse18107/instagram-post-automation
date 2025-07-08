import { Box, FormControlLabel } from "@mui/material";
import ProBadge from "./ProBadge";
import IOSSwitch from "./IOSSwitch";
import React from "react";

const OtherAutomation = () => {
  const [selected, setSelected] = React.useState(false);
  return (
    <>
      <Box
        sx={{
          marginTop: "23px",
          marginBottom: "9px",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        Other things to automate
      </Box>
      <Box
        sx={{
          width: "100%",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          paddingBottom: "0.5rem",
          paddingTop: "0.5rem",
          bgcolor: "#eeeeee",
          borderRadius: "10px",
          marginBottom: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{width: "70%"}}>
            Reply under the post so people feel seen and special
          </Box>
          <FormControlLabel
            sx={{marginRight: "0px"}}
            control={<IOSSwitch sx={{m: 1, marginRight: 0}} defaultChecked />}
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          paddingBottom: "0.5rem",
          paddingTop: "0.5rem",
          bgcolor: "#eeeeee",
          borderRadius: "10px",
          marginBottom: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{width: "70%"}}>Follow up to re-engage and build trust</Box>
          <ProBadge />
          <FormControlLabel
            sx={{marginRight: "0px"}}
            control={<IOSSwitch sx={{m: 1, marginRight: 0}} defaultChecked />}
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          paddingBottom: "0.5rem",
          paddingTop: "0.5rem",
          bgcolor: "#eeeeee",
          borderRadius: "10px",
          marginBottom: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{width: "70%"}}>
            Automatically ask for a follow up to build audience
          </Box>
          <ProBadge />
          <FormControlLabel
            sx={{marginRight: "0px"}}
            control={<IOSSwitch sx={{m: 1, marginRight: 0}} defaultChecked />}
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          paddingBottom: "0.5rem",
          paddingTop: "0.5rem",
          bgcolor: "#eeeeee",
          borderRadius: "10px",
          marginBottom: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{width: "70%"}}>
            Ask for email in DMs to connect beyond social
          </Box>
          <ProBadge />
          <FormControlLabel
            sx={{marginRight: "0px"}}
            control={<IOSSwitch sx={{m: 1, marginRight: 0}} defaultChecked />}
          />
        </Box>
      </Box>
    </>
  );
};

export default OtherAutomation;