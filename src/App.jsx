import React from "react";
import { useRoutes } from "react-router-dom";
import { Link } from "react-router-dom";
import ShowCreator from "./pages/ShowCreators";
import AddCreator from "./pages/AddCreator";
import EditCreator from "./pages/EditCreator";
import ViewCreators from "./pages/ViewCreator";
import "./App.css";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <ShowCreator />,
    },
    {
      path: "/add",
      element: <AddCreator />,
    },
    {
      path: "/edit/:id",
      element: <EditCreator />,
    },
    {
      path: "/view/:id",
      element: <ViewCreators />,
    },
  ]);

  return (
    <div className="App">
      <div className="header">
        <h1>Creatorverse</h1>
        <div className="hero-actions">
          <Link to="/">
            <button className="headerBtn">View All Creators</button>
          </Link>
          <Link to="/add">
            <button className="headerBtn">Add a Creator</button>
          </Link>
        </div>
      </div>
      {element}
    </div>
  );
}

export default App;
