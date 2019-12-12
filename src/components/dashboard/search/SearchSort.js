import React from "react";
import {
  Grid,
  TextField,
  Typography,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl
} from "@material-ui/core";

class SearchSort extends React.Component {
  constructor() {
    super();
    this.state = {
      searchValue: ""
    };
  }

  handleTextChange = name => event => {
    this.setState({ [name]: event.target.value });
    if (name == "sort") {
      this.props.onSort(event.target.value);
    }
  };

  handleSearch = () => {
    this.props.onSearchChange(this.state.searchValue);
  };

  render() {
    let { searchValue } = this.state;
    return (
      <div>
        <Grid container>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <Grid container>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <TextField
                  required
                  fullWidth
                  label="Search"
                  name="Search"
                  autoComplete="Search By Name"
                  autoFocus
                  onChange={this.handleTextChange("searchValue")}
                ></TextField>
              </Grid>
              <Grid item xs={2} sm={2} md={2} lg={2}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleSearch}
                >
                  Search
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <FormControl
              variant="outlined"
              style={{
                minWidth: "100%"
              }}
            >
              <InputLabel htmlFor="age-simple"> Sort by ID</InputLabel>
              <Select
                value={this.state.sort}
                onChange={this.handleTextChange("sort")}
                inputProps={{
                  name: "sort",
                  id: "age-simple"
                }}
              >
                <MenuItem value="asc"> Ascending </MenuItem>
                <MenuItem value="desc"> Descending </MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default SearchSort;
