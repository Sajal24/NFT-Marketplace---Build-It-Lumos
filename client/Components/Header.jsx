import React from 'react';
import NFTCard from './NFTCard';
import bandar from '../public/bandar.png';
import skeletons from '../public/skeletons.png';

const title = text => {
  return (
    <div className="text-white rounded-lg font-semibold bg-gray-600 py-2 px-3 hover:bg-[#232323] cursor-pointer">
      {text}
    </div>
  );
};

const Header = () => {
  return (
    <header className="flex flex-wrap w-[85%] justify-between mx-auto h-screen py-20 gap-24">
      <div className="flex relative">
        <NFTCard
          className="z-20"
          img={bandar}
          title="Bored Ape"
          price={5.3432}
        />
        <div className=" w-[22rem] absolute justify-between bg-[#cbcbcb5a]  rounded-lg px-5 py-8 flex flex-col h-[32rem] rotate-6 mb-4"></div>
        {/* <NFTCard className="absolute left-20 rotate-[24deg]" /> */}
      </div>
      <div className="w-[35rem]">
        <h1 className="text-5xl  text-[#232323] font-serif font-semibold leading-[3rem] md:leading-[3.4rem] ">
          Discover, <br />
          <span className="text-gray-600"> Collect and Sell </span> <br /> Extra
          Ordinary NFTs
        </h1>
        <p className="sm:text-sm lg:text-lg font-medium text-gray-500 mt-3">
          Explore the top collection of NFTs in this awesome market place and
          buy & sell NFTs at the finest price.
        </p>

        <div className="flex flex-wrap gap-3 mt-6 md:mt-10">
          {title('Ape Collection')}
          {title('Newlyy')}
          {title('Avatars')}
          {title('Music')}
          {title('Groovy')}
          {title('Gamified NFTs')}
          {title('Artworks')}
          {title('Photography')}
          {title('Collectibles')}
        </div>

        <button className="text-white hover:text-black hover:text-3xl uppercase tracking-wide font-semibold py-3 text-2xl bg-[#232323] w-full rounded-lg  mt-10 md:mt-20 border-2 border-gray-800 shadow-2xl hover:bg-white hover:scale-105 transition-all duration-500 ease-in-out ">
          Mint Now
        </button>
      </div>
    </header>
  );
};

export default Header;
