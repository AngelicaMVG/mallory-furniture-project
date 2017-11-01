import React, { Component } from "react";
import Furniture from "./Furniture";
import request from "superagent";

export default class FilterBy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      furniture: []
    };
    this._fetchFurniture = this._fetchFurniture.bind(this);
  }

  _fetchFurniture(filter) {
    const url =
      "https://mallory-furniture-admin.now.sh/api/v1/products?category=";
    const params = filter && `${filter}`;
    const requestURL = filter ? `${url}${params}` : url;
    fetch(requestURL)
      .then(response => response.json())
      .then(response => this.setState({ ...this.state, furniture: response }));
  }

  _getFilter() {
    const categoryName = this.props.match.params.id;
    console.log(categoryName);
    if (categoryName === "seatings") {
      return this._fetchFurniture("seating");
    }
    if (categoryName === "tables") {
      return this._fetchFurniture("tables");
    }
    if (categoryName === "desks") {
      return this._fetchFurniture("desks");
    }
    if (categoryName === "bedroom") {
      return this._fetchFurniture("bedroom");
    }
    if (categoryName === "storage") {
      return this._fetchFurniture("storage");
    }
    if (categoryName === "misc") {
      return this._fetchFurniture("miscellaneous");
    }
  }
  componentDidMount() {
    this._getFilter();
  }
  render() {
    console.log(this.props.match.path);

    return (
      <div className="contentFilter">
        <div className="img-category" />
        <Furniture list={this.state.furniture} />
        <div />
      </div>
    );
  }
}
