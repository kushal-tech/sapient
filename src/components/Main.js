import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./dashboard/Header";
import Dashboard from "./dashboard/Dashboard";
import {
  Container,
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core";

import MySnackBar from "./common/MySnackBar";
import { connect } from "react-redux";

const xtheme = createMuiTheme({
  palette: {
    primary: {
      500: "#e67a49"
    },
    secondary: {
      main: "#9a9a9a"
    }
  }
});

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider theme={xtheme}>
        <div>
          <Header />
          <Dashboard />
        </div>
        {this.props.snackbar.status ? (
          <MySnackBar
            enabled={this.props.snackbar.status}
            variant={this.props.snackbar.variant}
            message={this.props.snackbar.message}
          />
        ) : null}
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return { snackbar: state.snackbar };
};

const ConnectedMain = connect(mapStateToProps)(Main);

export default ConnectedMain;
