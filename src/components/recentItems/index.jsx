import React from "react";
import { useMovie } from "../../context/dataProvider";

const RecentItems = () => {
  const { recent } = useMovie();
  const index = recent.lenght >= 4 ? 4 : recent.lenght;
  return (
    <div>
      <div className="recentItems">
        <h2>Recent Search Items</h2>
        {recent.slice(0, index).map((recentItem) => (
          <div className="searchHistory">
            <h3>{">>"}</h3>
            <h3>{recentItem}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentItems;
