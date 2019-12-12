import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { withRouter } from "react-router-dom";

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
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
