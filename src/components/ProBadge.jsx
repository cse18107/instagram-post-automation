import { Box } from "@mui/material";

const ProBadge = () => {
  return (
    <Box
      sx={{
        height: "16px",
        width: "33px",
        color: "white",
        backgroundColor: "blue",
        marginRight: "10px",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "10px",
      }}
    >
      Pro
    </Box>
  );
};

export default ProBadge;