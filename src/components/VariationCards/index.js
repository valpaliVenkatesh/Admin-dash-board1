import React from "react";
import VariationCard from "../VariationCard";
import "./index.css";

const variationCardsArray = [
  {
    id: 1,
    total: 9526,
    variation: 4.2,
    statusColor: "exception",
  },
  {
    id: 2,
    total: 8323,
    variation: 1.2,
    statusColor: "active",
  },
  {
    id: 3,
    total: 6200,
    variation: 5.2,
    statusColor: "exception",
  },
  {
    id: 4,
    total: 5630,
    variation: 2.2,
    statusColor: "",
  },
];

const VariationCards = () => {
  return (
    <ul className="variation-cards-container">
      {variationCardsArray.map((each) => (
        <VariationCard key={each.id} variationCardDetails={each} />
      ))}
    </ul>
  );
};

export default VariationCards;
