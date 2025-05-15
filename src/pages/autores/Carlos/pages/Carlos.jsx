import { Route, Routes } from "react-router-dom";
import { FormPage } from "./FormPage";

export const Carlos = () => {
  return (
    <Routes>
      <Route path="/form" element={<FormPage />} />
    </Routes>
  );
};
