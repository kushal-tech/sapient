import React from "react";
import { isMobile } from "../../common/Utils";
import {
  Typography,
  FormControlLabel,
  Checkbox,
  FormGroup
} from "@material-ui/core";
class Filter extends React.Component {
  constructor() {
    super();
    this.state = {
      filters: {}
    };
  }

  handleChange = (filterName, value) => event => {
    let { filters } = this.state;
    if (filters.hasOwnProperty(filterName)) {
      _.includes(filters[filterName], value)
        ? filters[filterName].splice(filters[filterName].indexOf(value), 1)
        : filters[filterName].push(value);
    } else {
      filters[filterName] = [value];
    }
    this.setState({ filters });
    this.props.onFilterChange(filters);
  };

  render() {
    return (
      <div className="pad10">
        <Typography component="div" variant="subtitle1">
          Filters
        </Typography>
        <br />
        <div className="filterBox">
          <Typography component="div" variant="body1">
            Species
          </Typography>
          <div>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={this.handleChange("species", "human")}
                    value="human"
                  />
                }
                label="Human"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={this.handleChange("species", "mytholog")}
                    value="mytholog"
                  />
                }
                label="Mytholog"
              />
            </FormGroup>
          </div>
        </div>

        <div className="filterBox">
          <Typography component="div" variant="body1">
            Gender
          </Typography>
          <div>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={this.handleChange("gender", "male")}
                    value="male"
                  />
                }
                label="Male"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={this.handleChange("gender", "female")}
                    value="female"
                  />
                }
                label="Female"
              />
            </FormGroup>
          </div>
        </div>

        <div className="filterBox">
          <Typography component="div" variant="body1">
            Origin
          </Typography>
          <div>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={this.handleChange("origin", "unknown")}
                    value="unknown"
                  />
                }
                label="Unknown"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={this.handleChange("origin", "earth (c-137)")}
                    value="Earth (C-137)"
                  />
                }
                label="Earth (C-137)"
              />
            </FormGroup>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
