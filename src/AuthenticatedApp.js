import React from "react";
import { Route, Routes } from "react-router-dom";
import DiscoverRecipies from "./DiscoverRecipes/DiscoverRecipes";
import Recipe from "./Recipe/Recipe";

export default function AuthenticatedApp() {
  return <AppRoutes />;
}

function AppRoutes({ user }) {
  return (
    <Routes>
      <Route path="/recipes/:id" element={<Recipe />} />
      <Route path="/" element={<DiscoverRecipies />} />
    </Routes>
  );
}
