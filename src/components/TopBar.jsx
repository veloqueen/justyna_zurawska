import { AppBar, Toolbar, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const sections = [
  {
    name: "Who am I?",
    to: "#whoamI",
  },
  {
    name: "Recommendations",
    to: "#recommendations",
  },
  {
    name: "Who are you?",
    to: "#whoareyou",
  },
 
  {
    name: "Contact",
    to: "#contact",
  },
];

const TopBar = () => {
  const handleClick = () => {
    document
      .getElementById(window.location.hash)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          columnSpacing={{ xs: "1rem", sm: "3rem" }}
        >
          {sections.map((section) => (
            <Grid
              item
              key={section.name}
              md={3}
              textAlign="center"
              onClick={() => handleClick()}
            >
              <Button
                variant="text"
                sx={{
                  fontSize: "0.925rem",
                  fontWeight: "600",
                  lineHeight: "1rem",
                }}
                fullWidth
                component={Link}
                to={section.to}
              >
                {section.name}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
