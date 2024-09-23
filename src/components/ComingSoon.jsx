import { Grid, Typography } from "@mui/material";

const ComingSoon = () => {
  return (
    <Grid
      container
      height="100vh"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      rowGap="2rem"
    >
      <Grid item>
        <Typography variant="h1" textAlign="center">
          Justyna Zurawska
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h2" textAlign="center" fontStyle="italic">
          Coming Soon :)
        </Typography>
      </Grid>
    </Grid>
  );
};
export default ComingSoon;
