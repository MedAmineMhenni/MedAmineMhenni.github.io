import {
  AppBar,
  MenuItem,
  Select,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  SelectChangeEvent,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import DrawerMenu from "./Drawer";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  root: { border: 0, elevation: 0 },

  navbar: {
    backgroundColor: "white",
    borderBottom: 0,
  },
  navlinks: {
    marginLeft: 10,
    display: "flex",
    alignItems: "center",
  },
  logo: {
    flexGrow: 1,
    cursor: "pointer",
  },
  link: {
    fontSize: "20px",
    lineHeight: "29.38px",
    fontFamily: " Heebo, sans-serif",
    fontStyle: "normal",
    fontWeight: 500,
    color: "#000000",
    textDecoration: "none",

    marginLeft: 20,
    "&:hover": {
      color: "lightGray",
      borderBottom: "1px solid white",
    },
  },
  select: {
    height: "25px",
  },
});

const Header: FC<{}> = () => {
  const { t, i18n } = useTranslation();

  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [lang, setLang] = useState<string>("en");

  const handleLangChange = (event: SelectChangeEvent) => {
    setLang(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <AppBar position="static" className={classes.root} elevation={0}>
      <Toolbar className={classes.navbar}>
        <Typography variant="h4" className={classes.logo}>
          Navbar
        </Typography>
        {isMobile ? (
          <DrawerMenu />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              {t("home")}
            </Link>
            <Link to="/works" className={classes.link}>
              {t("works")}
            </Link>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>
            <Link to="#" className={classes.link}>
              <Select
                className={classes.select}
                value={lang}
                onChange={handleLangChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value={"en"}>En</MenuItem>
                <MenuItem value={"fr"}>FR</MenuItem>
              </Select>
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
