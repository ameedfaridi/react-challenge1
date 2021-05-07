import React from "react";
import { useMovie } from "../../context/dataProvider";

const SearchResult = () => {
  return (
    <div style={{ padding: "2rem 1rem" }}>
      <div className="searchResultConatiner">
        <h2>Search Results</h2>
        <DataFetchingResult />
      </div>
    </div>
  );
};

function DataFetchingResult() {
  const { resultData } = useMovie();
  const isRecentHasSomeData = resultData.length;
  return (
    <div>
      <div className="searchResult">
        {isRecentHasSomeData ? (
          resultData.map((item) => {
            return (
              <Card
                img={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                title={item.title}
                language={item.original_language}
              />
            );
          })
        ) : (
          <div
            style={{
              color: "white",
              textAlign: "center",
              width: "100vw",
            }}
          >
            <h1>No fetched Data</h1>
          </div>
        )}
      </div>
    </div>
  );
}
export default SearchResult;

function Card({ img, title, language }) {
  const isEnglish = language === "en";
  const isHindi = language === "hi";
  const asItIs = language;

  return (
    <div className="card">
      <div className="cardImgContainer">
        <img src={img} alt={`${title} poster`} />
      </div>
      <h3>
        {title} ({isEnglish ? "english" : isHindi ? "hindi" : asItIs})
      </h3>
    </div>
  );
}
