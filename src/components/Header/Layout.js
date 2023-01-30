import React from "react";
import Header from "./Header";
import "./Layout.css";
import { useState } from "react";

const Layout = (props) => {

    const [isClick, setIsClick] = useState(false);


  return (
    <>
      <Header isClick={isClick}/>
      <div className="layout">
        <main className="layout-main">{props.children}</main>
      </div>
    </>
  );
};

export default Layout;
