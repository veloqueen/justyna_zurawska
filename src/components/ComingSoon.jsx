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
      padding="5%"
    >
      <Grid item>
        <Typography variant="h2" textAlign="center">
          Justyna Zurawska
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h5" textAlign="center" fontStyle="italic">
          coaching@justynazurawska.com
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h2" textAlign="center">
          :)
        </Typography>
      </Grid>
    </Grid>
  );
};
export default ComingSoon;
