import React, { useState } from "react";
import DownArrow from "../assets/icons/down-arrow.png";
import GreenCircle from "../assets/icons/green-circle.png";
import PickUpIcon from "../assets/icons/yellow-green-circle.png";
import LocationIcon from "../assets/icons/location-icon.png";
import SuitcaseIcon from "../assets/icons/suitcase-icon.png";
import VehicleIcon from "../assets/icons/vehicle-icon.webp";
import UserIcon from "../assets/icons/user-icon.webp";
import CubeIcon from "../assets/icons/cube-icon.png";
import CallIcon from "../assets/icons/call-icon.webp";
import "./style.css";

const BidDataDisplay = ({ data }) => {
  const [value, setValue] = useState(false);
  return (
    <>
      <ul className="bid-response-data">
        <li>
          <span>
            <img
              src={GreenCircle}
              alt="green-circle"
              className="green-circle"
            />
          </span>
          {data.sNo}
        </li>
        <li>
          {data.bidCreated.bidNo} <br /> {data.bidCreated.createdBy}
        </li>
        <li>
          {data.startDateAndTime.date} <br /> {data.startDateAndTime.time}
        </li>
        <li>{data.bidTimeRemaining}</li>
        <li>
          {data.fromCityToCity.from}
          <br />
          <img src={DownArrow} alt="right-arrow" className="right-arrow-icon" />
          <br />
          {data.fromCityToCity.to}
        </li>
        <li>
          {data.vehicleDetails.type},{data.vehicleDetails.size} <br />{" "}
          {data.vehicleDetails.body},{data.vehicleDetails.noOfVehicle}
        </li>
        <li>{data.materialWeight}</li>
        <li>{data.response}</li>
        <li>
          {data.assignedStaff.no} <br /> {data.assignedStaff.name}
        </li>
        <li className="more-details" onClick={() => setValue(!value)}>
          View Details
        </li>
      </ul>
      {value === true && (
        <div className="display-more-container">
          <div>
            <h5 className="bid-no">
              BidNo: {data.details.bidNo}{" "}
              <span className="bider-name">{`(${data.details.name})`}</span>
            </h5>
            <div className="city-info">
              <img src={PickUpIcon} alt="pick-point" className="pickup-icon" />
              <h5 className="city-name">
                {data.details.locationDetails.from.city[0]},
                {data.details.locationDetails.from.city[1]},{" "}
                <span className="state">
                  {data.details.locationDetails.from.city[2]}
                </span>
              </h5>
            </div>
            <p>
              <span className="load">
                {data.details.locationDetails.from.type} :
              </span>{" "}
              {data.details.locationDetails.from.location}
            </p>
            <div className="city-info">
              <img
                src={LocationIcon}
                alt="location-icon"
                className="location-icon"
              />
              <h5 className="city-name">
                {data.details.locationDetails.to.city[0]},
                <span className="state">
                  {data.details.locationDetails.to.city[1]}
                </span>
              </h5>
            </div>
            <p>
              <span className="unload">
                {data.details.locationDetails.to.type} :{" "}
              </span>{" "}
              {data.details.locationDetails.to.location}
            </p>
          </div>
          <div>
            <h5>
              <img src={SuitcaseIcon} alt="suitcase-icon" className="img" />
              Vehicle loading date: {data.details.vehicleLoadingDate}
            </h5>
            <p className="p-text">
              <img src={VehicleIcon} alt="vehicle-icon" className="img" />
              Vehicle Type:{" "}
              <span className="span-text">{data.details.vehicleType}</span>
            </p>
            <p className="p-text">
              <img src={CubeIcon} alt="cube-icon" className="img" />
              Material:{" "}
              <span className="span-text">
                {data.details.material}
              </span> Weight:{" "}
              <span className="span-text">{data.details.weight}</span>
            </p>
            <p className="p-text">
              <img src={SuitcaseIcon} alt="suitcase-icon" className="img" />
              Request Date:{" "}
              <span className="span-text">{data.details.requestDate}</span>{" "}
              <img src={SuitcaseIcon} alt="suitcase-icon" className="img" />{" "}
              Expiry :{" "}
              <span className="span-text">{data.details.expiryDate}</span>
            </p>
            <br />
            <p className="p-text">
              Remarks: <span className="span-text">{data.details.remarks}</span>
            </p>
          </div>
          <div>
            <p className="p-text">
              <span>
                <img src={UserIcon} alt="user-icon" className="img" />
              </span>{" "}
              Assigned Staff:{" "}
              <span className="span-text">{data.details.assignedStaff}</span>{" "}
            </p>
            <p className="p-text">
              <span>
                <img src={CallIcon} alt="call-icon" className="img" />
              </span>{" "}
              Phone Number:{" "}
              <span className="span-text">{data.details.phoneNumber}</span>
            </p>
            <p className="p-text">
              Target Price:{" "}
              <span className="span-text">{data.details.targetPrice}</span>
            </p>
            <p className="p-text">
              Number of Bider for this Bid:{" "}
              <span className="span-text">{data.details.noOfBiders}</span>
            </p>
          </div>
        </div>
      )}
      <hr />
    </>
  );
};

export default BidDataDisplay;
