import React from "react";
import { Route, Routes } from "react-router-dom";

export default function AuthenticatedApp() {
  return <AppRoutes />;
}

function AppRoutes({ user }) {
  return (
    <Routes>
      <Route path="/" element={<div>"NICE You are Logged In"</div>} />
    </Routes>
  );
}
