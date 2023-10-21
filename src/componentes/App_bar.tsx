import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
//import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
import imgLogo from "../public/assets/Logo.png";
import imgIntagram from "../public/assets/intagram.jpg";
import { FaInstagram } from "react-icons/fa";
// import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
function ResponsiveAppBar() {
  // const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "pink",
        height: "5rem",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={imgLogo}
            alt="Sua Imagem"
            style={{
              maxWidth: "50px",
              maxHeight: "50px",
              marginLeft: "3rem",
              marginRight: "24rem",
            }}
          />

          <Link
            href="#"
            underline="none"
            variant="h6"
            style={{ color: "white" }}
            sx={{ m: 1 }}
          >
            Principal
          </Link>
          <Link
            href="#"
            underline="none"
            variant="h6"
            style={{ color: "white" }}
            sx={{ m: 2 }}
          >
            Sobre nós
          </Link>
          <Link
            href="#"
            underline="none"
            variant="h6"
            style={{ color: "white" }}
            sx={{ m: 2 }}
          >
            Produtos
          </Link>
          <Link
            href="#"
            underline="none"
            variant="h6"
            style={{ color: "white" }}
            sx={{ m: 2 }}
          >
            Receitas
          </Link>

          {/* <img
            src={imgIntagram}
            alt="Sua Imagem"
            style={{
              maxWidth: "50px",
              maxHeight: "50px",
              marginLeft: "3rem",
              marginRight: "24rem",
            }}
          /> */}
          {/* <Link
            // component="button"
            // variant="body2"
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            Button Link
          </Link> */}
          {/* <Link
            href="#"
            underline="none"
            variant="h5"
            style={{ color: "white" }}
          >
            {'underline="none"'}
          </Link> */}
          {/* <Button variant="text" style={{ color: "white" }}>
            Text
          </Button>
          <Button variant="contained" style={{ backgroundColor: "#000080" }}>
            Contained
          </Button> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
