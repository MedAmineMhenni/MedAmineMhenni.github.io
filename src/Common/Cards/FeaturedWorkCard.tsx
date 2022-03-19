import { Avatar, Chip, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import IProjectData from "../../Interfaces/project";
interface IProject {
  project: IProjectData;
}
const FeaturedWorkCard: FC<IProject> = ({ project }) => {
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  console.log("IM PROJECT :: ", project);
  return (
    project && (
      <Link to={`/works/${project.id}`} className={classes.link}>
        <Grid container rowSpacing={1} spacing={2}>
          <Grid item xs={12} md={3}>
            {/* <Avatar
            className={classes.appLogo}
            alt="Remy Sharp"
            src="https://www.keejob.com/media/recruiter/recruiter_12944/logo-12944-20190528-134315.png"
            variant="rounded"
            sx={{ width: "100%", height: "100%" }}
          /> */}
            <img
              className={classes.appLogo}
              alt="Remy Sharp"
              src={project.logo}
              //variant="rounded"
              // sx={{ width: "100%", height: "100%" }}
            />
          </Grid>
          <Grid item xs={12} md={9}>
            <Grid
              container
              rowSpacing={1}
              direction="column"
              className={classes.card_info_section}
            >
              <Grid item>
                <Grid container rowSpacing={1} direction="column">
                  <Grid item className={classes.card_title_section}>
                    {i18n.language === "fr"
                      ? project!.name["fr"]
                      : project!.name["en"]}
                  </Grid>
                  <Grid item>
                    <Chip
                      label={
                        i18n.language === "fr"
                          ? project!.period["fr"]
                          : project!.period["en"]
                      }
                      variant="filled"
                      color="secondary"
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <div className={classes.card_description_section}>
                  {project?.description["fr"]}
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Link>
    )
  );
};

export default FeaturedWorkCard;
const useStyles = makeStyles({
  featured_works_section: {
    justifyContent: "center",
    paddingLeft: "15%",
    paddingRight: "15%",
    //border: "1px solid black",
    // backgroundColor: "#EDF7FA",
  },

  card_info_section: {
    minHeight: "100%",
    justifyContent: "space-between",
  },
  card_title_section: {
    fontFamily: "Heebo",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "30px",
    lineHeight: "44px",
    color: "#21243D",
  },
  card_description_section: {
    fontSize: "16px",
    lineHeight: "26px",
    fontFamily: " Heebo, sans-serif",
    fontStyle: "normal",
    fontWeight: 400,
    color: "#21243D",
  },
  appLogo: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  link: {
    textDecoration: "none",
  },
});
