import React from "react";
import "antd/dist/antd.css";
import { Progress } from "antd";
import "./index.css";

import {
  AiFillFacebook,
  AiFillYoutube,
  AiFillTwitterCircle,
} from "react-icons/ai";

const SocialMediaCard = (props) => {
  const { cardDetails } = props;
  const { id, value, name, hikePt, icon } = cardDetails;

  const iconDisplay = (id) => {
    switch (id) {
      case 0:
        return <AiFillFacebook className={`icon icon${id}`} />;

      case 1:
        return <AiFillTwitterCircle className={`icon icon${id}`} />;

      case 2:
        return <AiFillYoutube className={`icon icon${id}`} />;
      default:
        return null;
    }
  };

  const circleColor = (id) => {
    switch (id) {
      case 0:
        return "#4267b2";
      case 1:
        return "#00acee";
      case 2:
        return "red";
      default:
        return null;
    }
  };
  return (
    <li className="social-media-card shadow">
      <div className="social-media-left">
        <Progress
          strokeLinecap="butt"
          type="circle"
          percent={value}
          className="progressing"
          strokeColor={{
            "0%": circleColor(id),
          }}
        />
        <div className="social-media-right">
          <h6>{name}</h6>
          <p>{hikePt}% Since Last Week</p>
        </div>
      </div>
      {iconDisplay(id)}
    </li>
  );
};

export default SocialMediaCard;
