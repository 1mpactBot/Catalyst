import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      color: "#ffffff",
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const card = (
  <React.Fragment>
    <CardContent>
      {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography> */}
      <Typography variant="h5" component="div">
        Title
      </Typography>
      <Chip
        label="Major"
        sx={{
          backgroundColor: "red",
          height: "20px",
          color: "#ffffff",
          fontWeight: "600",
        }}
      />
      {/* <Typography variant="body2">Assigned To: Saransh Gautam</Typography> */}
      <Tooltip
        TransitionComponent={Zoom}
        slotProps={{
          popper: {
            sx: {
              [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:
                {
                  marginTop: "2px",
                },
            },
          },
        }}
        title="Saransh Gautam"
      >
        <Avatar {...stringAvatar("Saransh Gautam")} />
      </Tooltip>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default function TaskCard() {
  return (
    <Box
      sx={{
        maxWidth: 275,
      }}
    >
      <Card
        variant="outlined"
        sx={{
          boxShadow: "0px 0px 1px #61738e",
          ":hover": {
            cursor: "pointer",
            boxShadow: "2px 2px 6px #61738e",
          },
        }}
      >
        {card}
      </Card>
    </Box>
  );
}
