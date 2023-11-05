import * as React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";

import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

const DestinationCard = ({ title, subheader, description }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#2196f3", // Light blue color for the background
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{
          maxWidth: 345,
          margin: "10px",
          borderRadius: "15px",
          border: "1px solid grey", // Add a black border
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.4)", // Increase box shadow
          backgroundColor: "white",
        }}
      >
        <CardHeader
          title={title}
          subheader={subheader}
          titleTypographyProps={{ style: { textAlign: "left" } }}
          subheaderTypographyProps={{
            style: { textAlign: "right", marginTop: "-30px" },
          }}
        />
        <CardMedia component="img" height="194" image="/1.png" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>

          <Button style={{ marginLeft: "auto" }} variant="contained">
            Plan a Trip
          </Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
};

export default function TopDestinations() {
  const destinations = [
    {
      title: "Mumbai",
      subheader: "7 days trip",
      description:
        "Explore the bustling streets of Mumbai and enjoy the rich culture and delicious street food.",
    },
    {
      title: "Banglore",
      subheader: "5 days trip",
      description:
        "Experience the tech hub of India in Bangalore and visit beautiful parks and gardens.",
    },
    {
      title: "Hyderabad",

      subheader: "10 days trip",
      description:
        "Visit the historic city of Hyderabad and savor the famous Hyderabadi biryani.",
    },
    {
      title: "Chandigarh",

      subheader: "6 days trip",
      description:
        "Explore the well-planned city of Chandigarh with its beautiful gardens and architecture.",
    },
    {
      title: "Delhi",
      subheader: "8 days trip",
      description:
        "Discover the historical landmarks and vibrant markets of Delhi, India's capital.",
    },
    {
      title: "Kolkata",
      subheader: "9 days trip",
      description:
        "Experience the cultural diversity of Kolkata and indulge in the city's delectable street food.",
    },
  ];

  return (
    <div>
      <Typography variant="h2" component="h2">
        Top Destinations
      </Typography>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {destinations.map((destination, index) => (
          <DestinationCard key={index} {...destination} />
        ))}
      </div>
    </div>
  );
}
