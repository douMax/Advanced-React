import React, { Component } from "react";
import Header from "../components/Header";
import Meta from "./Meta";

export default class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <p>Pae compamge</p>
      </div>
    );
  }
}
