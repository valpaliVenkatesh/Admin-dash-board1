import "./index.css";
import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Progress } from "antd";
import {
  AiOutlineShoppingCart,
  AiOutlineArrowUp,
  AiOutlineDollarCircle,
  AiFillYoutube,
  AiOutlineUsergroupAdd,
  AiOutlineMail,
} from "react-icons/ai";

const VariationCard = (props) => {
  const { variationCardDetails } = props;
  const { id, total, variation, statusColor } = variationCardDetails;
  const iconDisplay = (id) => {
    switch (id) {
      case 1:
        return <AiOutlineShoppingCart className="variation-icon" />;

      case 2:
        return <AiOutlineDollarCircle className="variation-icon" />;

      case 3:
        return <AiOutlineUsergroupAdd className="variation-icon" />;
      case 4:
        return <AiOutlineMail className="variation-icon" />;
      default:
        return null;
    }
  };
  return (
    <li
      className={`from-control shadow  card${id}`}
      id="variation-card-container"
    >
      <div className="variation-card-container-first-line">
        <h5 className="total-no">{total}</h5>
        {iconDisplay(id)}
      </div>
      <Progress percent={30} showInfo={false} />
      <div className="order-content-container">
        <h5 className="plus-symbol">Total Orders</h5>
        <div className="order-content-container">
          <p className="plus-symbol">+</p>
          <p className="plus-symbol">{variation}%</p>
          <AiOutlineArrowUp />
        </div>
      </div>
    </li>
  );
};

export default VariationCard;
