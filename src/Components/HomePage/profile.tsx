import { Avatar, Button, Grid, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import IUserData from "../../Interfaces/user";
interface Iprofile {
  user: IUserData;
}

const Profile: FC<Iprofile> = ({ user }) => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const matches = useMediaQuery("min-width(768px)");
  console.log("MATCHES :: ", matches);

  console.log(user);
  const classes = useStyles();
  return (
    <div>
      <Grid container rowSpacing={1} className={classes.profile_section}>
        <Grid item xs={12} md={8}>
          <Grid container>
            <Grid item xs={12}>
              <div className={classes.profile_title_section}>
                {i18n.language === "fr" ? user.name["fr"] : user.name["en"]}
              </div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <div className={classes.profile_description_section}>
                {i18n.language === "fr"
                  ? user.description["fr"]
                  : user.description["en"]}
              </div>
            </Grid>
          </Grid>
          <Grid container>
            <Link
              className={classes.profile_cv_section}
              style={matches ? { width: "100%" } : {}}
              //variant="contained"
              to={i18n.language === "fr" ? user.cv["fr"] : user.cv["en"]}
              target="_blank"
              download
            >
              {t("cv_download")}
            </Link>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Avatar
            alt="Mhenni_mohamed_amine"
            src={user.image}
            sx={{ width: 243, height: 243 }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
const useStyles = makeStyles({
  profile_section: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    // alignItems: "center",
    paddingLeft: "15%",
    paddingRight: "15%",
    marginBottom: "5%",
    //border: "1px solid black",
  },

  profile_title_section: {
    fontSize: "44px",
    lineHeight: "60px",
    fontFamily: " Heebo, sans-serif",
    fontStyle: "normal",
    fontWeight: 700,
    color: "#21243D",
    marginBottom: "40px",
  },
  profile_description_section: {
    fontSize: "16px",
    lineHeight: "28px",
    fontFamily: " Heebo, sans-serif",
    fontStyle: "normal",
    fontWeight: 400,
    color: "#21243D",
  },
  profile_cv_section: {
    marginTop: "38px",
    textDecoration: "none",
    color: "white",
    backgroundColor: "#21243D",
    padding: 12,
    borderRadius: 50,
    //width: "100%",
    textAlign: "center",
  },
});
