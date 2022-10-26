import { Route, Routes } from "react-router-dom";
import { ProfilePage } from "../pages/Profile";

export function Router() {
  return (
    <Routes>
      <Route path="profile-user" element={<ProfilePage />} />
    </Routes>
  );
}
