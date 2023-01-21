import React from "react";
import { Route, Routes } from "react-router-dom";
import DiscoverRecipies from "./Discover/Discover";
import Recipe from "./Recipe/Recipe";
import Ingredients from "./Ingredients/Ingredients";

export default function AuthenticatedApp() {
  return <AppRoutes />;
}

function AppRoutes({ user }) {
  return (
    <Routes>
      <Route path="/recipes/:id" element={<Recipe />} />
      <Route path="/ingredients" element={<Ingredients />} />
      <Route path="/discover" element={<DiscoverRecipies />} />
    </Routes>
  );
}
