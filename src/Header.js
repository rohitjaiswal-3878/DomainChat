import React from "react";
import "./Header.css";
import { Avatar } from "@mui/material";
import { AccessTimeSharp, HelpOutlineSharp } from "@mui/icons-material";
import { SearchSharp } from "@mui/icons-material";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <AccessTimeSharp />
      </div>
      <div className="header__search">
        <SearchSharp />
        <input placeholder="Search" />
      </div>
      <div className="header__right">
        <HelpOutlineSharp />
      </div>
    </div>
  );
}

export default Header;
