import Image from "next/image";
import React from "react";
import logo from "../../../../public/logoimg.png";
import { IoCloseCircle } from "react-icons/io5";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { GiAlliedStar } from "react-icons/gi";
import { IoPeople } from "react-icons/io5";
import { LiaGlobeAmericasSolid } from "react-icons/lia";

function Slider({ setSlider }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 w-full h-full">
      <div className="bg-black text-white p-4 rounded-lg w-full md:w-3/4 lg:w-2/3 xl:w-1/2 relative animate-slide-down overflow-auto max-h-full">
        <div className="flex justify-between items-center mb-4">
          <Image src={logo} alt="logo" className="h-10 w-20 rounded-lg" />
          <IoCloseCircle
            size={35}
            className="cursor-pointer text-primary-main mr-10"
            onClick={() => setSlider(false)}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {/* Movies */}
          <div>
            <div className="flex items-center mb-2">
              <MdLocalMovies size={35} className="text-primary-main mr-2" />
              <h1 className="text-xl font-bold">Movies</h1>
            </div>
            <span className="block">Release Calendar</span>
            <span className="block">Top 250 Movies</span>
            <span className="block">Top Popular Movies</span>
            <span className="block">Browse Movies By Genre</span>
            <span className="block">Top Box Office</span>
            <span className="block">Showtimes & Tickets</span>
            <span className="block">Movie News</span>
            <span className="block">India Movie Spotlight</span>
          </div>
          {/* TV Shows */}
          <div>
            <div className="flex items-center mb-2">
              <PiTelevisionSimpleBold size={35} className="text-primary-main mr-2" />
              <h1 className="text-xl font-bold">TV Shows</h1>
            </div>
            <span className="block">What's on TV & Streaming</span>
            <span className="block">Top 250 TV Shows</span>
            <span className="block">Most Popular TV Shows</span>
            <span className="block">Browse TV Shows by Genre</span>
            <span className="block">TV News</span>
              {/* Watch */}
          <div className="mt-5">
            <div className="flex items-center mb-2">
              <MdOutlineVideoLibrary size={35} className="text-primary-main mr-2" />
              <h1 className="text-xl font-bold">Watch</h1>
            </div>
            <span className="block">What to Watch</span>
            <span className="block">Latest Trailers</span>
            <span className="block">IMDb Originals</span>
            <span className="block">IMDb Picks</span>
            <span className="block">IMDb Spotlight</span>
            <span className="block">IMDB Podcasts</span>
          </div>
          </div>
           {/* Awards & Events */}
           <div>
            <div className="flex items-center mb-2">
                <GiAlliedStar size={35} className="text-primary-main mr-2"/>
            <h1 className="text-xl font-bold">Awards & Events</h1>

            </div>
            <span className="block">Oscars</span>
            <span className="block">ABFF</span>
            <span className="block">Pride</span>
            <span className="block">STARmeter Awards</span>
            <span className="block">Awards Central</span>
            <span className="block">Festival Central</span>
            <span className="block">All Events</span>
          </div>    
        
         
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
          {/* Celebs */}
          <div>
            <div  className="flex items-center mb-2">
            <IoPeople size={35} className="text-primary-main mr-2"/>
            <h1 className="text-xl font-bold">Celebs</h1>

            </div>
            <span className="block">Born Today</span>
            <span className="block">Most Popular Celebs</span>
            <span className="block">Celebrity News</span>
          </div>
          {/* Community */}
          <div>
            <div  className="flex items-center mb-2">
            <LiaGlobeAmericasSolid size={35} className="text-primary-main mr-2"/>
            <h1 className="text-xl font-bold">Community</h1>

            </div>
            <span className="block">Help Center</span>
            <span className="block">Contributor Zone</span>
            <span className="block">Poll</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
