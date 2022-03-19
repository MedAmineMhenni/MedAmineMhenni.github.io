import { Divider, Grid, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import FeaturedWorkCard from "../Common/Cards/FeaturedWorkCard";
import IPage from "../Interfaces/page";
import IProjectData from "../Interfaces/project";
import ProjectService from "../Services/ProjectService";

const WorksPage: FC<IPage> = (props) => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const [projects, setProjects] = useState<Array<IProjectData>>([]);

  const fetchProjects = () => {
    setProjects(ProjectService.getAll());
  };
  useEffect(() => {
    fetchProjects();
  }, []);
  return (
    <div className={classes.featured_works_section}>
      <Grid container rowSpacing={1}>
        <Grid item className={classes.featured_works_section_title}>
          <div className={classes.featured_works_section_title}>
            {/* Featured works */}
            {t("works")}
          </div>
        </Grid>
      </Grid>
      <Stack
        direction="column"
        divider={<Divider orientation="horizontal" flexItem />}
        spacing={2}
      >
        {projects.map((x: IProjectData) => (
          <FeaturedWorkCard key={x.id} project={x} />
        ))}
      </Stack>
    </div>
  );
};
export default WorksPage;
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
    fontWeight: "bold",
    fontSize: "44px",
    color: "#21243D",
    lineHeight: "60px",
    marginBottom: "55px",
  },
});
