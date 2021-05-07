import React from "react";
import Search from "../search";
import RecentItems from "../recentItems";
import KeyBoard from "../keyboard";

export default function FrontPage({ inputRef, setIsSearching }) {
  return (
    <div>
      <Search inputRef={inputRef} />
      <div className="recentAndKeyBoardContainer">
        <RecentItems />
        <KeyBoard inputRef={inputRef} />
      </div>
    </div>
  );
}
