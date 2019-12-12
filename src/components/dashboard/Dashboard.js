import React from "react";
import _ from "lodash";
import CommonApi from "../apis/CommonApi";
import View from "./view";
import SearchSort from "./search/SearchSort";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      searchCharacters: []
    };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSort = this.onSort.bind(this);
  }

  componentDidMount() {
    CommonApi.get(response => {
      this.setState({ characters: response.results });
    });
  }

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

  render() {
    let { characters, searchCharacters } = this.state;
    return (
      <div>
        <div className="pad10">
          <SearchSort
            onSearchChange={this.onSearchChange}
            onSort={this.onSort}
          ></SearchSort>
        </div>
        <View
          tileData={searchCharacters.length > 0 ? searchCharacters : characters}
        ></View>
      </div>
    );
  }
}

export default Dashboard;
