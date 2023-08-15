import React, { useState } from "react";
import Nav from "./Component/nav";
import News from "./Component/News";
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  let apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProg] = useState(0);

  const setProgress = (progress) => {
    setProg(progress);
  };

  return (
    <>
      <Router>
        <Nav />

        <div>
          <LoadingBar height={4} color="orange" progress={progress} />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <News
                api={apiKey}
                key="1"
                setProgress={setProgress}
                pagesize={6}
                country="us"
                category="general"
              />
            }
          ></Route>

          <Route
            path="/general"
            element={
              <News
                api={apiKey}
                key="2"
                setProgress={setProgress}
                pagesize={6}
                country="us"
                category="general"
              />
            }
          ></Route>

          <Route
            path="/business"
            element={
              <News
                pagesize={6}
                setProgress={setProgress}
                api={apiKey}
                key="3"
                country="us"
                category="business"
              />
            }
          ></Route>

          <Route
            path="/entertainment"
            element={
              <News
                pagesize={6}
                setProgress={setProgress}
                api={apiKey}
                key="4"
                country="us"
                category="entertainment"
              />
            }
          ></Route>

          <Route
            path="/sports"
            element={
              <News
                pagesize={6}
                api={apiKey}
                key="5"
                setProgress={setProgress}
                country="us"
                category="sports"
              />
            }
          ></Route>

          <Route
            path="/health"
            element={
              <News
                pagesize={6}
                setProgress={setProgress}
                api={apiKey}
                key="6"
                country="us"
                category="health"
              />
            }
          ></Route>

          <Route
            path="/science"
            element={
              <News
                pagesize={6}
                setProgress={setProgress}
                api={apiKey}
                key="7"
                country="us"
                category="science"
              />
            }
          ></Route>

          <Route
            path="/technology"
            element={
              <News
                pagesize={6}
                setProgress={setProgress}
                api={apiKey}
                key="8"
                country="us"
                category="technology"
              />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
