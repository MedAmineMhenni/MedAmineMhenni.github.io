import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { ITechonlogies } from "../../Interfaces/user";
interface Iposts {
  tech: ITechonlogies;
}
const RecentPostCard: FC<Iposts> = ({ tech }) => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  return (
    <div>
      <Card className={classes.recent_posts_card}>
        <CardContent>
          <div className={classes.card_title_section}>{tech.title} </div>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",

              "& svg": {
                m: 1,
              },
              "& hr": {
                mx: 1,
              },
              marginBottom: "10px",
            }}
          >
            <div className={classes.card_description_section}>
              {tech.period["fr"]}
            </div>
            <Divider orientation="vertical" flexItem />
            {/* <div className={classes.card_description_section}>
              Design, Pattern
            </div> */}
          </Box>
          <div className={classes.card_description_section}>
            <Typography
              sx={{
                display: "-webkit-box",
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 4,
              }}
            >
              {i18n.language == "fr"
                ? tech.description["fr"]
                : tech.description["en"]}
            </Typography>
          </div>

          {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography> */}
        </CardContent>
      </Card>
    </div>
  );
};

export default RecentPostCard;
const useStyles = makeStyles({
  root: {},
  recent_posts_card: {
    height: 200,
    borderRadius: "4px",
    padding: "24px",
    marginBottom: "32px",
  },
  card_title_section: {
    fontFamily: "Heebo",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "26px",
    lineHeight: "38px",
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
});
