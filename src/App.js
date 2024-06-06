import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";
import DefaultLayout from "./components/Layout/DefaultLayout";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            var Page = route.component;
            var Layout;
            if (route.layout === null) {
              Layout = Fragment;
            } else if (route.layout === undefined) {
              Layout = DefaultLayout;
            } else {
              Layout = route.layout;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
