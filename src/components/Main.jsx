import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { BsBookmarkFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import Form from "./Form";
import Todo from "../pages/Todo";
import Favorite from "../pages/Favorite";
import Likes from "../pages/Likes";

const Main = () => {
  return (
    <main>
      <Form />
      <div className="pages_switch">
        <NavLink to="/" className="link">
          <AiFillHome className="logo" />
        </NavLink>
        <NavLink to="/likes" className="link">
          <FaHeart className="logo" />
        </NavLink>
        <NavLink to="/favorites" className="link">
          <BsBookmarkFill className="logo" />
        </NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/likes" element={<Likes />} />
      </Routes>
    </main>
  );
};

export default Main;
