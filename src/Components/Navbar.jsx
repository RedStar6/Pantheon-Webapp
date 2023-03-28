import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import RedeemIcon from "@mui/icons-material/Redeem";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/joy/Badge";

const Navbar = () => {
  return (
    <header className="w-full flex justify-center h-12 ">
      <div className="container flex w-[80%] justify-between h-full p-1 border border-pink-700">
        <div className='flex gap-4 h-full text-white'>
          <Link to="/movies">My Movies</Link>
          <Link to="/shows">Tv Shows</Link>
          <Link to="/latest">Latest</Link>
          <Link to="/list">My List</Link>
        </div>
        <div className="flex justify-center gap-3 h-full text-white">
          <SearchIcon className="self-center "/>
          <NotificationsIcon className="self-center"/>
          <RedeemIcon className="self-center"/>
          <Badge className='avatar-badge block h-fit'
          color='success' size="sm"
          badgeInset='22%'
            anchorOrigin={{
              vertical:'bottom',
              horizontal: "right",
            }}
          >
            <Avatar alt="Remy Sharp" src="../Images/avatar.jpg" />
          </Badge>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
