import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import RecentPostCard from "../../Common/Cards/RecentPostCard";
import { ITechonlogies } from "../../Interfaces/user";

interface Iposts {
  technologies: ITechonlogies[];
}
const RecentPosts: FC<Iposts> = ({ technologies }) => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  console.log("Recent posts ", technologies);
  return (
    <div className={classes.recent_posts_section}>
      <Grid container rowSpacing={1}>
        <Grid item xs={12}>
          <Grid
            container
            rowSpacing={1}
            className={classes.recent_posts_actions_section}
          >
            <Grid item className={classes.recent_posts_section_title}>
              {t("recents")}
            </Grid>
            <Grid item>
              <Link to="/technologies">{t("view_all")}</Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        rowSpacing={1}
        spacing={2}
        className={classes.recent_posts_actions_section}
      >
        {technologies.slice(0, 2).map((x: ITechonlogies, i: number) => (
          <Grid key={i} item xs={12} md={6}>
            <RecentPostCard tech={x} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default RecentPosts;
const useStyles = makeStyles({
  recent_posts_section: {
    justifyContent: "center",
    paddingLeft: "15%",
    paddingRight: "15%",
    //border: "1px solid black",
    backgroundColor: "#EDF7FA",
  },
  recent_posts_section_title: {
    fontFamily: "Heebo",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "22px",
    color: "#21243D",
  },
  recent_posts_actions_section: {
    justifyContent: "space-between",
    alignItems: "center",
    lineHeight: "60px",
    "& a": {
      fontFamily: "Heebo",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "23px",
    },
  },
  recent_posts_card: {
    borderRadius: "4px",
    padding: "24px",
  },
  profile_cv_section: {
    marginTop: "38px",
  },
});
