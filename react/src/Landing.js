import React from "react";
import { Link } from "@reach/router";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "typeface-roboto";
import { withStyles } from "@material-ui/core/styles";
import LandingContainer from "./landingPartials/_containers";
import radar from "./landingPartials/radar.png";

import Button from "@material-ui/core/Button"; // used to reroute to Registration + Login

const variables = {
  color1: "lightblue",
  color2: "#289aee",
  buttonPadding: "10px",
  buttonHeight: 48,
  buttonFont: "150%"
};

const styles = {
  header: {
    background: variables.color2,
    color: "white"
  },
  register: {
    background: variables.color2,
    color: "white",
    padding: variables.buttonPadding,
    textTransform: "capitalize",
    fontSize: variables.buttonFont
  },
  login: {
    background: "white",
    color: "grey",
    padding: variables.buttonPadding,
    textTransform: "capitalize",
    fontSize: variables.buttonFont
  }
};

// -webkit-linear-gradient(-45deg, rgba(11,145,255,1) 0%,rgba(81,180,255,0) 100%)

function Landing() {
  return (
    <div>
      <div
        style={{
          height: "100vh",
          background:
            "-webkit-linear-gradient(-45deg, rgba(11,145,255,1) 0%,rgba(81,180,255,0) 100%)"
        }}
      >
        {/* <img
          src={bg}
          style={{
            // height: "92%",
            maxWidth: "100%",
            position: "absolute",
            zIndex: -1
          }}
        /> */}
        {/* <AppBar position="static" style={styles.header}>
          <Toolbar>
            <Typography variant="title" color="inherit">
              [Logo] ReviewRadar
            </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Register</Button>
          </Toolbar>
        </AppBar> */}
        <Typography
          style={{ paddingTop: "3em", marginBottom: "15px" }}
          variant="display4"
        >
          Welcome to ReviewRadar
        </Typography>
        <div style={{ marginLeft: "36%", marginTop: "4%" }}>
          <Link
            to="request"
            style={{ textDecoration: "none", marginRight: "20px" }}
          >
            <Button style={styles.register}>Start a New Request</Button>
          </Link>
          <Link to="report" style={{ textDecoration: "none" }}>
            <Button style={styles.login}>View My Report</Button>
          </Link>
        </div>

        {/* <img
          src={radar}
          style={{
            // height: "92%",
            width: "40%",
            left: "80%",
            position: "absolute",
            bottom: "55%",
            zIndex: -1
          }}
        /> */}
        <img
          src={radar}
          style={{
            // height: "125%",
            width: "57%",
            left: "47%",
            position: "absolute",
            bottom: "-10%",
            zIndex: -1,
            transform: "rotate(90deg)",
            opacity: 0.5
          }}
        />
      </div>
      <div style={{ height: "95vh", maxWidth: "98%" }}>
        <Typography
          variant="display1"
          style={{ textAlign: "center", margin: "3em 0em" }}
        >
          Understanding how your customers feel, while running daily operations
          can be difficult. <br />We help simplify the process.
        </Typography>

        <Grid container spacing={40} justify="center">
          <LandingContainer
            header="header"
            img="https://insights.bookbub.com/wp-content/uploads/2014/03/get-more-reader-reviews.png"
            text="All of your reviews collected in one location..."
            while
          />
          <LandingContainer
            header="header"
            img="https://ml.berkeley.edu/assets/mlab_color-e5f058901c6abd2b7d09d4d00cba0b38b36af6c373a85fd65ed10a42dbf1f0dc.png"
            text="Parsed using the power of machine learning..."
          />
          <LandingContainer
            header="header"
            img="https://cdn.dribbble.com/users/206755/screenshots/2387113/upgrade-premium-animation-dribbble.gif"
            text="Displayed in a meaningful way"
          />
        </Grid>
      </div>
      <div style={{ marginLeft: "36%", marginTop: "-10%" }}>
          <Link
            to="request"
            style={{ textDecoration: "none", marginRight: "20px" }}
          >
            <Button style={styles.register}>Start a New Request</Button>
          </Link>
          <Link to="report" style={{ textDecoration: "none" }}>
            <Button style={styles.login}>View My Report</Button>
          </Link>
        </div>
    </div>
  );
}

// Landing.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withStyles(styles)(Landing);
// class Landing extends Component {
//   render() {
//     return (
//       <div>
//         <Typography variant="display3">Welcome to ReviewRadar</Typography>
//         <Button variant="raised">
//           <Link to="request">Get your request</Link>
//         </Button>
//         {/* <Button variant="outlined" color="light blue"> */}
//         <Button variant="text" >
//           <Link to="report"> Already Registered</Link>
//         </Button>
//       </div>
//     );
//   }
// }

// export default Landing;
