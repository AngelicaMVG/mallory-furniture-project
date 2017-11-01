import React, { Component } from "react";

export default class Furniture extends Component {
  _show() {
    alert("hello");
  }

  render() {
    let muebles = this.props.list;

    return (
      <div className="furniture-container">
        {muebles.map(mueble => (
          <div className="container" onClick={this._show} key={mueble._id}>
            <div className="furniture-img">
              <img src={mueble.imageLink} alt="" />
            </div>
            <h3 className="info-item">{mueble.item}</h3>
            <span className="price-item">${mueble.price}</span>
          </div>
        ))}
      </div>
    );
  }
}
