import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import AllProducts from "./components/AllProducts";
import FilterBy from "./components/FilterBy";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/all-products" component={AllProducts} />
          <Route path={"/category/:id"} component={FilterBy} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
