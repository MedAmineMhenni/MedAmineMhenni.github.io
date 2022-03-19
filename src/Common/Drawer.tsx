import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

const DrawerMenu: FC<{}> = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [lang, setLang] = useState<string>("en");
  const { i18n } = useTranslation();

  const handleLangChange = (event: SelectChangeEvent) => {
    setLang(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <>
      <SwipeableDrawer
        anchor={"top"}
        onOpen={() => setOpenDrawer(false)}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItem>
            <ListItemText>
              <Link to="/">Home</Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Link to="/about">About</Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Link to="/contact">Contact</Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Link to="/about">Faq</Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Select
                value={lang}
                onChange={handleLangChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value={"en"}>En</MenuItem>
                <MenuItem value={"fr"}>FR</MenuItem>
              </Select>{" "}
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MdMenu />
      </IconButton>
    </>
  );
};

export default DrawerMenu;
