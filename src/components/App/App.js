import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import CardContent from "../../pages/cardContent/cardContent";
import Login from "../../pages/login/login";
import CreatePost from "../../pages/post/create";
import Blog from "../../pages/blog";
import PostView from "../../pages/post/view";
export const GradesContext = createContext();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Blog />} />
        </Route>

        <Route path="/login" element={<MainLayout />}>
          <Route index element={<Login />} />
        </Route>

        <Route path="/create" element={<MainLayout />}>
          <Route index element={<CreatePost />} />
        </Route>

        <Route path="/post" element={<MainLayout />}>
          <Route path=":id" element={<PostView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
