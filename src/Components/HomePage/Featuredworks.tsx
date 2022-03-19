import { Divider, Grid, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import FeaturedWorkCard from "../../Common/Cards/FeaturedWorkCard";
import IProjectData from "../../Interfaces/project";
import ProjectService from "../../Services/ProjectService";

const Featuredworks: FC = () => {
  const { t, i18n } = useTranslation();
  const classes = useStyles();

  const [recentProject, setRecentProjects] = useState<Array<IProjectData>>([]);
  const fetchRecentProjects = () => {
    setRecentProjects(ProjectService.getRecentProject());
  };
  useEffect(() => {
    fetchRecentProjects();
  }, []);
  return (
    <div className={classes.featured_works_section}>
      <Grid container rowSpacing={1}>
        <Grid item className={classes.featured_works_section_title}>
          {t("Featured_works")}
        </Grid>
      </Grid>
      <Stack
        direction="column"
        divider={<Divider orientation="horizontal" flexItem />}
        spacing={2}
      >
        {recentProject.map((x: IProjectData) => (
          <FeaturedWorkCard key={x.id} project={x} />
        ))}

        {/* <FeaturedWorkCard />

        <FeaturedWorkCard /> */}
      </Stack>
    </div>
  );
};

export default Featuredworks;
const useStyles = makeStyles({
  featured_works_section: {
    justifyContent: "center",
    paddingLeft: "15%",
    paddingRight: "15%",
    //border: "1px solid black",
    // backgroundColor: "#EDF7FA",
  },
  featured_works_section_title: {
    fontFamily: "Heebo",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "22px",
    color: "#21243D",
    lineHeight: "60px",
  },
});
