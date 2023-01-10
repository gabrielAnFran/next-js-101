import React from "react";
import headerStyles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Azion</span>
      </h1>
    </div>
  );
}
