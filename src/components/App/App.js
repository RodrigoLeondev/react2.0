import React, { createContext, useState } from "react";
import "./App.css";
import Episodes from "../../pages/episodes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import Form from "../../pages/form/form";
import Test from "../../pages/test/test";
import { Container } from "reactstrap";
export const GradesContext = createContext();

function App() {
  const [usersWithGrades, setUsersWithGrades] = useState([
    {
      name: "pepe",
      grade: 10,
    },
    {
      name: "pablo",
      grade: 9,
    },
  ]);

  const [activePage, setActivePage] = useState("episodes");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Form />} />
        </Route>

        <Route path="episodes" element={<MainLayout />}>
          <Route index element={<Episodes />} />
        </Route>

        <Route path="/test" element={<MainLayout />}>
          <Route /*path=":param"*/ index element={<Test />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
