import React from 'react';
import { FaDiscord } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';

import AOS from 'aos';
import 'aos/dist/aos.css';

const JoinCommunity = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className="w-[85%] mx-auto py-20 rounded-2xl bg-[#0E0E0E] flex flex-col items-center mt-44"
      data-aos="zoom-in-up"
    >
      <h2 className="text-white text-3xl font-semibold mb-6 flex gap-1">
        Join Our Community{' '}
        <span>
          <BsStars />
        </span>
      </h2>
      <p className="text-lg px-9 text-gray-500 mb-10">
        Meet the assHub team, artists and collectors for platform updates,
        announcements and more...
      </p>

      <button className="py-4 px-5 text-xl rounded-full bg-white font-medium w-[15rem] flex items-center justify-center gap-2 hover:bg-gray-300 hover:scale-105 transition-all ease-in-out">
        Join Discord
        <span className="text-2xl">
          <FaDiscord />
        </span>
      </button>
    </section>
  );
};

export default JoinCommunity;
