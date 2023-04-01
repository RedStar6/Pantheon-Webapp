import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import RedeemIcon from "@mui/icons-material/Redeem";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/joy/Badge";
import {motion , AnimatePresence} from 'framer-motion'

const Navbar = () => {
    const [searchBar,setSearchBar] = React.useState(false);

  return (
    <header className="w-full flex justify-center h-12 p-1">
      <div className="container flex w-[80%] justify-between h-full ">
        <div className='flex gap-4 text-white'>
          <Link to="/movies" className="self-center">My Movies</Link>
          <Link to="/shows" className="self-center">Tv Shows</Link>
          <Link to="/latest" className="self-center">Latest</Link>
          <Link to="/list" className="self-center">My List</Link>
        </div>
        <div className="flex justify-center gap-3 text-white">
          {/* <Link to='#' className='h-full grid place-content-center'><SearchIcon/></Link> */
          }
            <div  className='flex'>
                <AnimatePresence>
                <motion.input animate={{width: searchBar ? "250px": "20px",borderBottom: searchBar ? "1px solid red": "0px" }} 
                transition={{duration:1}} className='p-1 self-center relative rounded-xl h-[80%] bg-black pl-7 focus:outline-none text-white w-[20px]' type='text' />
                </AnimatePresence>
                <SearchIcon onClick={() => 
                    setSearchBar(current => !current)
                }
                onMouseOver={console.log("mouse")}
                className="absolute ml-1 z-[1] top-[14px]" />
            </div>
          
          <Link to='#' className=' grid place-content-center'><NotificationsIcon/></Link>
          <Link to='#' className=' grid place-content-center'><RedeemIcon/></Link>
          <Link to='#'><Badge 
          color='success' size="sm"
          badgeInset='22%'
            anchorOrigin={{
              vertical:'bottom',
              horizontal: "right",
            }}
          >
            <Avatar alt="Remy Sharp"   src="../Images/avatar.jpg" />
          </Badge></Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
