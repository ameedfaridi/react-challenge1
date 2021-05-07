import React, { useRef } from "react";
import Header from "../header";
import SearchResult from "../searchResult";
import FrontPage from "../frontPage";
import { Route, Switch } from "react-router";

export default function Routes({}) {
  const inputRef = useRef();

  return (
    <div>
      <div>
        <Header />
      </div>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <FrontPage inputRef={inputRef} />}
        />
        <Route path="/search-result" render={() => <SearchResult />} />
      </Switch>
    </div>
  );
}
