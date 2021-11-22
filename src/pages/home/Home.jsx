import React from "react";
import Featured from "../../commponents/featured/Featured";
import Navbar from "../../commponents/navbar/Navbar";
import List from "../../commponents/list/List";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List /> <List /> <List /> <List /> <List /> <List /> <List /> <List />
    </div>
  );
};

export default Home;
