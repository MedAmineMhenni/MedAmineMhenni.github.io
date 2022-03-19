import React, { FC } from "react";
import { Grid, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
const useStyles = makeStyles({
  root: {
    paddingTop: 51,
    paddingBottom: 54,
  },

  footer_section: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 26,
  },
});
const Footer: FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid
        container
        className={classes.footer_section}
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item>
          <Link
            to={{
              pathname:
                "https://www.facebook.com/profile.php?id=100004277226992",
            }}
            target="_blank"
          >
            <FaFacebookSquare size={30} />
          </Link>
        </Grid>
        <Grid item>
          <Link to="#">
            <FaInstagram size={30} />
          </Link>
        </Grid>
        <Grid item>
          <Link to="#">
            <FaTwitter size={30} />
          </Link>
        </Grid>
        <Grid item>
          <Link
            to={{
              pathname:
                "https://www.linkedin.com/in/mohamedamine-m-henni-b84924196/",
            }}
            target="_blank"
          >
            <FaLinkedin size={30} />
          </Link>
        </Grid>
      </Grid>
      <Grid
        container
        className={classes.footer_section}
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item>
          <div>Copyright ©2021 All rights reserved</div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
