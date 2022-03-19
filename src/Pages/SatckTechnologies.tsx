import { Divider, Grid, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import RecentPostCard from "../Common/Cards/RecentPostCard";
import IPage from "../Interfaces/page";
import IProjectData from "../Interfaces/project";
import { ITechonlogies } from "../Interfaces/user";
import ProjectService from "../Services/ProjectService";
import UsersService from "../Services/UsersService";

const SatckTechnologies: FC<IPage> = (props) => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const [technologies, setTechnologies] = useState<Array<ITechonlogies>>([]);

  const fetchTechnologies = () => {
    setTechnologies(UsersService.getTechnologies());
  };
  useEffect(() => {
    fetchTechnologies();
  }, []);
  return (
    <div className={classes.featured_works_section}>
      <Grid container rowSpacing={1}>
        <Grid item className={classes.featured_works_section_title}>
          <div className={classes.featured_works_section_title}>
            {/* Featured works */}
            {t("technologies")}
          </div>
        </Grid>
      </Grid>
      <Stack
        direction="column"
        divider={<Divider orientation="horizontal" flexItem />}
        spacing={2}
      >
        {technologies.map((x: ITechonlogies, index: number) => (
          <RecentPostCard key={index} tech={x} />
        ))}
      </Stack>
    </div>
  );
};
export default SatckTechnologies;
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
