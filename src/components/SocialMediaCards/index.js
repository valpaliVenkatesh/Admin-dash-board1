import React from "react";
import "./index.css";
import SocialMediaCard from "../SocialMediaCard";

const cardsDetails = [
  {
    id: 0,
    value: 60,
    name: "Facebook Followers",
    hikePt: 22.14,
    icon: "<AiFillYoutube/>",
  },
  {
    id: 1,
    value: 65,
    name: "Twitter Tweets",
    hikePt: 32.15,
    icon: "<AiOutlineTwitter/>",
  },
  {
    id: 2,
    value: 75,
    name: "Youtube Subscribers",
    hikePt: 58.24,
    icon: "<AiOutlineYoutube/>",
  },
];

const SocialMediaCards = () => {
  return (
    <ul className="social-media-card-container">
      {cardsDetails.map((each) => (
        <SocialMediaCard key={each.id} cardDetails={each} />
      ))}
    </ul>
  );
};

export default SocialMediaCards;
