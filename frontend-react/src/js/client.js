import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import MyTabs from "./components/MyTabs";
const app = document.getElementById('app');

ReactDOM.render(
  <MyTabs/>,
app);
