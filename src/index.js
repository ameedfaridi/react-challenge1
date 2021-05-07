import React from "react";
import ReactDom from "react-dom";
import App from "./app";
import { DataProvider } from "./context/dataProvider";
import { BrowserRouter } from "react-router-dom";

ReactDom.render(
  <BrowserRouter>
    <DataProvider>
      <App />
    </DataProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
