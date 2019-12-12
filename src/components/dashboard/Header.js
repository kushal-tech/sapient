import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import PowerSetting from "@material-ui/icons/PowerSettingsNew";

import { getUser, deleteUser } from "../common/Utils";

import { withRouter } from "react-router-dom";

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    let user = getUser();
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className="flex">
              Application
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withRouter(Header);
