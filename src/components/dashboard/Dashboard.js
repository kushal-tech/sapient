import React from "react";
import _ from "lodash";
import CommonApi from "../apis/CommonApi";
import View from "./view";
import SearchSort from "./search/SearchSort";
import { isMobile } from "../common/Utils";
import { Button, Grid, Chip } from "@material-ui/core";
import Filter from "./filter/Filter";
import { showSnackbar } from "../actions/index";
import { connect } from "react-redux";
import AddIcon from "@material-ui/icons/AddCircle";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      searchCharacters: [],
      filters: {},
      openFilter: false
    };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSort = this.onSort.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);
  }

  componentDidMount() {
    CommonApi.get(response => {
      this.setState({ characters: response.results });
    });
  }

  handleFilters = () => {
    this.setState({ openFilter: !this.state.openFilter });
  };

  handleDelete = () => {};

  onSearchChange(value) {
    let searchCharacters = _.filter(this.state.characters, item => {
      if (_.startsWith(item.name.toLowerCase(), value.toLowerCase())) {
        return item;
      }
    });
    this.setState({ searchCharacters });
  }

  onSort(value) {
    let searchCharacters = _.orderBy(this.state.characters, ["id"], [value]);
    this.setState({ searchCharacters });
  }

  onFilterChange(filters) {
    let filterList = [];
    Object.keys(filters).forEach(key => {
      filterList.push(...filters[key]);
    });
    console.log(filterList);

    let searchCharacters = _.filter(this.state.characters, item => {
      if (_.includes(filterList, item.gender.toLowerCase())) {
        return item;
      }
      if (_.includes(filterList, item.origin.name.toLowerCase())) {
        return item;
      }
      if (_.includes(filterList, item.species.toLowerCase())) {
        return item;
      }
    });

    if (searchCharacters.length == 0) {
      this.props.openSnackbar({
        status: true,
        variant: "error",
        message: "No data found for selected filters"
      });
    }
    this.setState({ searchCharacters });
    this.setState({ filters });
  }

  render() {
    let { characters, searchCharacters, filters, openFilter } = this.state;
    let isMobileView = isMobile();
    let chips = [];
    return (
      <div>
        {isMobileView && (
          <Button onClick={this.handleFilters}>
            <AddIcon />
          </Button>
        )}
        <Grid container>
          {(!isMobileView || openFilter) && (
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Filter onFilterChange={this.onFilterChange} />
            </Grid>
          )}
          <Grid item md={!isMobileView && 9} lg={!isMobileView && 9}>
            {Object.keys(filters).length > 0 ? (
              <div className="pad10">
                {Object.keys(filters).forEach(key => {
                  chips.push(
                    filters[key].map(data => {
                      return (
                        <Chip
                          key={data}
                          label={data}
                          onDelete={this.handleDelete(data)}
                        />
                      );
                    })
                  );
                })}
                {chips}
              </div>
            ) : null}
            <div className="pad10">
              <SearchSort
                onSearchChange={this.onSearchChange}
                onSort={this.onSort}
              ></SearchSort>
            </div>
            <View
              tileData={
                searchCharacters.length > 0 ? searchCharacters : characters
              }
            ></View>
          </Grid>
        </Grid>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    openSnackbar: snack => dispatch(showSnackbar(snack))
  };
}

export default connect(null, mapDispatchToProps)(Dashboard);
