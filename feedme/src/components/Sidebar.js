import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../App";
import "./Sidebar.css";
import Categories from "./Categories";
import { ThemeContext } from "../contexts/theme";


export default function Sidebar({ categoriesList, setCategoryList }) {
  const user = useContext(AuthContext);
  const [{theme}] = useContext(ThemeContext);


  useEffect(() => {   
  }, [categoriesList]);
  
  return (
    <div className="sidenav" style={{ color: "black"}}>
      
      <br/>
      <br/>
      Select category to filter recipes: 
      <br/>
      <br/>
      <Categories color={"black"} categoriesList={categoriesList} setCategoryList={setCategoryList} />
    </div>
  );
}
