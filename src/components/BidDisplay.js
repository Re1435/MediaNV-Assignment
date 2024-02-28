import React from "react";
import BiddersData from "./BiddersData";

const BidDisplay = () => {
  return (
    <div className="bid-display">
      <ul className="bid-table-data">
        <li>S No.</li>
        <li>
          Bid Number <br /> Created By
        </li>
        <li>
          Start Date <br /> & Time
        </li>
        <li>
          Bid Time <br /> Remaining
        </li>
        <li>
          From city <br /> To city
        </li>
        <li>
          Vehicle Type, Size <br />
          Body, No. of Vehicle
        </li>
        <li>
          Material Weight <br /> {"(in Kg)"}
        </li>
        <li>Response</li>
        <li>Assigned Staff</li>
        <li>Details</li>
      </ul>
      <BiddersData />
    </div>
  );
};

export default BidDisplay;
