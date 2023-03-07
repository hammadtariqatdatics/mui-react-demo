import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { routesData } from "../utils";

const index = () => {
  const [routes, setRoutes] = useState(routesData);
  return (
    <Routes>
      {routes.map((route) => {
        const { id, path, element } = route;
        return <Route path={path} element={element} key={id} />;
      })}
    </Routes>
  );
};

export default index;
