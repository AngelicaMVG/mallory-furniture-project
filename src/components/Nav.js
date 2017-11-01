import React, { Component } from "react";
import logo from "../images/mf-logo-white.svg";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <img src={logo} alt="" />
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/terms">Terms + Conditions</a>
          </li>
        </ul>
        <ul className="blue-link">
          <li className="separador">|</li>
          <li>
            <a href="/category/seating">Seating</a>
          </li>
          <li>
            <a href="category/tables">Tables</a>
          </li>
          <li>
            <a href="category/desks">Desks</a>
          </li>
          <li>
            <a href="category/storages">Storages</a>
          </li>
          <li>
            <a href="category/bedroom">Bedroom</a>
          </li>
          <li>
            <a href="category/misc">Misc</a>
          </li>
          <li className="separador">|</li>
        </ul>
        <a href="/cart" className="car">
          <i className="fa fa-cart-plus" />
        </a>
      </div>
    );
  }
}
