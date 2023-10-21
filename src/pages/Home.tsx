import { Grid } from "@mui/material";
import ResponsiveAppBar from "../componentes/App_bar";

const Home: React.FC = () => {
  return (
    <Grid container>
      <ResponsiveAppBar />

      {/* <div className="App">
        <ImageCarousel />
      </div> */}
    </Grid>
  );
};

export default Home;
