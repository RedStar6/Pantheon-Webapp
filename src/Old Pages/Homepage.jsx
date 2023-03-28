import React from "react";
import { MenuButtons, Navbar,MovieSlideShow } from "../Components";
import FavoriteIcon from '@mui/icons-material/Favorite';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ExploreIcon from '@mui/icons-material/Explore';

const Homepage = () => {
  return (
    <div className="flex gap-2">
      <div className=" w-full order-last py-3 px-5">
        <Navbar />
        <MovieSlideShow />
      </div>
      <aside className="w-[40%] flex flex-col gap-5 p-3">
      <h1 className="text-white ml-8 mb-7 text-lg">ECSTACY</h1>
      <h3 className="ml-8">Menu</h3>
      <div className="flex flex-col gap-4">
        <MenuButtons Icon={ExploreIcon} buttonTitle='Discover' />
        <MenuButtons Icon={FavoriteIcon} buttonTitle='Coming Movies' />
        <MenuButtons Icon={CalendarMonthIcon} buttonTitle='Favorites' />
      </div>
    </aside>
    </div>
  );
};

export default Homepage;
