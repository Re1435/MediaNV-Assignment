import React,{useState} from 'react'

const BidDataDisplay = ({ data }) => {
	const [value,setValue] = useState(false)
	return (
		<>
			<ul className='bid-response-data'>
				<li>{data.sNo}</li>  
				<li>{data.bidCreated.bidNo} <br /> {data.bidCreated.createdBy}</li>  
				<li>{data.startDateAndTime.date} <br /> {data.startDateAndTime.time}</li>  
				<li>{data.bidTimeRemaining}</li>  
				<li>{data.fromCityToCity.from} <br /> {data.fromCityToCity.to}</li>  
				<li>{data.vehicleDetails.type},{data.vehicleDetails.size} <br /> {data.vehicleDetails.body},{data.vehicleDetails.noOfVehicle}</li>  
				<li>{data.materialWeight}</li>
				<li>{data.response}</li>
				<li>{data.assignedStaff.no} <br /> {data.assignedStaff.name}</li>
				<p className='more-details' onClick={() => setValue(!value)}>View Details</p>
			</ul>
			{value === true &&
				(<div className='display-more-container'>
						<div>
							<p>BidNo: {data.details.bidNo} {`(${data.details.name})`}</p>		
							<p>{data.details.locationDetails.from.city}</p>
							<p>{data.details.locationDetails.from.type} : {data.details.locationDetails.from.location}</p>
							<br />
							<p>{data.details.locationDetails.to.city}</p>
							<p>{data.details.locationDetails.to.type} : {data.details.locationDetails.to.location}</p>
						</div>
						<div>
							<p>Vehicle loading date:{data.details.vehicleLoadingDate}</p>
							<p>Vehicle Type: {data.details.vehicleType}</p>
							<p>Material: {data.details.material}  Weight:{data.details.weight}</p>
							<p>Request Date: {data.details.requestDate}  Expiry Date:{data.details.expiryDate}</p>
							<p>Remarks:{data.details.remarks}</p>
						</div>
						<div>
							<p>Assigned Staff: {data.details.assignedStaff}</p>
							<p>Phone Number: {data.details.phoneNumber}</p>
							<p>Target Price: {data.details.targetPrice}</p>
							<p>Number of Bider for this Bid: {data.details.noOfBiders}</p>
						</div>
				</div>)
			}
			<hr />
		</>
  )
}

export default BidDataDisplay