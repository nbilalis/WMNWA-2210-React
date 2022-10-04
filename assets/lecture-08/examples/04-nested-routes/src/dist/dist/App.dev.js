"use strict";

exports.__esModule = true;

var react_router_dom_1 = require("react-router-dom");

var Home_1 = require("./views/Home");

var About_1 = require("./views/About");

var Menu_1 = require("./components/Menu");

var List_1 = require("./views/products/List");

var Details_1 = require("./views/products/Details");

require("./App.scss");

var App = function App() {
  return React.createElement(React.Fragment, null, React.createElement("h1", null, "Welcome to my site!"), React.createElement(Menu_1["default"], null), React.createElement(react_router_dom_1.Routes, null, React.createElement(react_router_dom_1.Route, {
    path: "/",
    element: React.createElement(Home_1["default"], null)
  }), React.createElement(react_router_dom_1.Route, {
    path: "/about",
    element: React.createElement(About_1["default"], null)
  }), React.createElement(react_router_dom_1.Route, {
    path: "/products/"
  }, React.createElement(react_router_dom_1.Route, {
    index: true,
    element: React.createElement(List_1["default"], null)
  }), React.createElement(react_router_dom_1.Route, {
    path: ":id",
    element: React.createElement(Details_1["default"], null)
  }))));
};

exports["default"] = App;