import { Divider, Grid, Paper, Box, Stack, Chip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";

import React, { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import FeaturedWorkCard from "../Common/Cards/FeaturedWorkCard";
import IPage from "../Interfaces/page";
import IProjectData from "../Interfaces/project";
import ProjectService from "../Services/ProjectService";
import { default as Slider, Settings, CustomArrowProps } from "react-slick";
import { useParams } from "react-router-dom";

const Item = styled(Paper)(() => ({
  textAlign: "center",
  color: "#21243D",
  height: 60,
  lineHeight: "60px",
  fontFamily: "Heebo",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "18px",
}));
function LeftNavArrow(props: CustomArrowProps): JSX.Element {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "blue" }}
      onClick={onClick}
    />
  );
}

function RightNavArrow(props: CustomArrowProps): JSX.Element {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "blue" }}
      onClick={onClick}
    />
  );
}
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: <LeftNavArrow />,
  prevArrow: <RightNavArrow />,
  dotsClass: "slick-dots",
  centerPadding: "0px",
  fade: true,

  // slidesToShow: 3,
  //slidesToScroll: 3,
};

const WorksDetails: FC<IPage> = (props) => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const [project, setProject] = useState<IProjectData | any>(null);
  const { id } = useParams() as {
    id: string;
  };
  console.log("PARAMS :: ", id);
  const fetchProject = () => {
    setProject(ProjectService.get(Number(id)));
  };
  useEffect(() => {
    fetchProject();
  }, []);
  console.log("PROJECT :: ", project, i18n.language);
  return (
    <div className={classes.works_details_container}>
      <Grid container rowSpacing={1}>
        <Grid item>
          <div className={classes.works_section_title}>
            {i18n.language === "fr" ? project?.name["fr"] : project?.name["en"]}
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        rowSpacing={1}
        spacing={2}
        className={classes.works_section_title_container}
      >
        <Grid item>
          <Chip
            label={
              i18n.language === "fr"
                ? project?.period["fr"]
                : project?.period["en"]
            }
            variant="filled"
            color="secondary"
          />
        </Grid>
        <Grid item>
          <div className={classes.works_section_second_title}>
            {i18n.language === "fr"
              ? project?.second_title["fr"]
              : project?.second_title["en"]}
          </div>
        </Grid>
      </Grid>
      <Stack direction="column" spacing={2}>
        <div className={classes.description}>
          {i18n.language === "fr"
            ? project?.description["fr"]
            : project?.description["en"]}
        </div>
        <div style={{ borderRadius: 30, marginBottom: 50 }}>
          <Slider {...settings}>
            {project?.medias?.map((x: string) => (
              <div>
                <img
                  alt="Joliesse"
                  src={x}
                  style={{ width: "100%", height: "500px" }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </Stack>
      <Stack
        direction="column"
        divider={<Divider orientation="horizontal" flexItem />}
        spacing={2}
      >
        <Stack direction="column">
          <div className={classes.works_section_title}>{t("tasks")}</div>
          <ul>
            {project?.tasks.map((x: any, i: number) => (
              <li key={i} className={classes.tasks}>
                {i18n.language === "fr" ? x["fr"] : x["en"]}
              </li>
            ))}
          </ul>
        </Stack>
        <div className={classes.works_section_title}>{t("technologies")}</div>
        <Grid item xs={12}>
          <Box
            sx={{
              p: 2,
              bgcolor: "background.default",
              display: "grid",
              gridTemplateColumns: { md: "1fr 1fr" },
              gap: 2,
            }}
          >
            {project?.technologies.map((tech: string, index: number) => (
              <Item key={index} elevation={index * 2 < 24 ? index * 2 : 24}>
                {tech}
              </Item>
            ))}
          </Box>
        </Grid>
      </Stack>
    </div>
  );
};
export default WorksDetails;
const useStyles = makeStyles({
  works_details_container: {
    justifyContent: "center",
    paddingLeft: "15%",
    paddingRight: "15%",
    //border: "1px solid black",
    // backgroundColor: "#EDF7FA",
  },

  works_section_title_container: {
    alignItems: "center",
    marginBottom: "20px",
  },
  works_section_title: {
    fontFamily: "Heebo",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "32px",
    color: "#21243D",
    lineHeight: "40px",
    marginBottom: "20px",
    //width: "60%",
  },
  works_section_second_title: {
    fontFamily: "Heebo",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "24px",
    color: "#21243D",
    lineHeight: "40px",
    //width: "60%",
  },
  description: {
    fontFamily: "Heebo",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    color: "#21243D",
    textAlign: "left",
    lineHeight: "24px",
  },
  tasks: {
    fontFamily: "Heebo",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "24px",
    color: "#21243D",
    textAlign: "left",
    lineHeight: "32px",
  },
});
