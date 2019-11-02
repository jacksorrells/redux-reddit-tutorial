//React
import React from "react";
import PropTypes from "prop-types";

//MaterialUI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const Header = ({ value, handleRefreshClick }) => (
  <div>
    <AppBar>
      <Toolbar>
        <Grid container>
          <Grid item xs={10}>
            <Typography variant="title" color="inherit">
              {value}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Button onClick={handleRefreshClick} color="inherit">
              refresh
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  </div>
);

Header.propTypes = {
  value: PropTypes.string.isRequired
};

export default Header;
