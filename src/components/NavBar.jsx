import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import CollectionsIcon from "@material-ui/icons/Collections";

const useStyles = makeStyles({
  component: {
    background: "#48b8a5",
  },
});
const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.component} position="static">
      <Toolbar>
        <CollectionsIcon />
        <Typography variant="h6" style={{ marginLeft: 10 }}>
          Image Finder
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
