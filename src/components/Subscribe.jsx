import React from "react";
import { Link } from "react-router-dom";
import {
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialSkype,
  TiSocialGithub,
} from "react-icons/ti";

const Subscribe = () => {
  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-24 px-6 lg:px-44 text-white bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(https://html.nkdev.info/monsterplay/assets/images/dark/blog-2-1920x1080.jpg)`,
      }}
    >
      <Link
        to="/"
        className="flex items-center justify-center flex-col text-center"
      >
        <div className="p-6 px-9 mb-2 bg-primary rounded text-3xl">
          <TiSocialTwitter />
        </div>
        <span>Subscribe to Twitter</span>
      </Link>
      <Link
        to="/"
        className="flex items-center justify-center flex-col text-center"
      >
        <div className="p-6 px-9 mb-2 bg-primary rounded text-3xl">
          <TiSocialYoutube />
        </div>
        <span>Watch on Youtube</span>
      </Link>
      <Link
        to="/"
        className="flex items-center justify-center flex-col text-center"
      >
        <div className="p-6 px-9 mb-2 bg-primary rounded text-3xl">
          <TiSocialSkype />
        </div>
        <span>Watch on Skype</span>
      </Link>
      <Link
        to="/"
        className="flex items-center justify-center flex-col text-center"
      >
        <div className="p-6 px-9 mb-2 bg-primary rounded text-3xl">
          <TiSocialGithub />
        </div>
        <span>See on GitHub</span>
      </Link>
    </div>
  );
};

export default Subscribe;
