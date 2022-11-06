import Image from 'next/image';
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FaEthereum } from 'react-icons/fa';

const NFTCard = ({ className, title, price, img, collection = false }) => {
  return (
    <div
      className={`w-[22rem] bg-[#f3f3f3] shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] rounded-lg px-5 py-8 flex flex-col h-fit ${className}`}
    >
      <Image src={img} height={220} width={280} className="mx-auto mb-4" />
      <p className="text-[#3e3e3e] font-semibold text-xl mb-2">{title}</p>

      {!collection ? (
        <>
          <p className="text-[#3e3e3e] font-semibold text-sm">Mint Price</p>
          <p className="flex gap-2 items-center text-2xl font-semibold">
            {price}
            <span>
              <FaEthereum />
            </span>
          </p>
        </>
      ) : null}

      <button className="flex items-center text-white bg-black font-semibold gap-2 justify-center py-2 mt-5 rounded-lg uppercase tracking-wide hover:bg-gray-500 hover:scale-105 transition-all ease-in-out delay-75">
        {!collection ? 'Discover Art' : 'Check Collection'}
        <span className="text-white">
          <AiOutlineArrowRight />
        </span>
      </button>
    </div>
  );
};

export default NFTCard;
