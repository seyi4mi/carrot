import React from "react"
import "./Services.css"
import edu from "../../images/edu.svg"
import techSupport from "../../images/techSupport.svg"
import marketplc from "../../images/marketplc.svg"
import funding from "../../images/funding.svg"

function Cards() {
	return (
		<>
			<div className="service-section" id="services">
				<h1 className="service-title"> Our Services </h1>{" "}
				<div className="greyline"> </div>{" "}
				<div className="service-container">
					<div className="card-contianer">
						<div className="card">
							<img className="card-img img1 " src={edu} alt="" />
							<div className="card-content">
								<h1 className="card-header"> Education </h1>{" "}
								<p className="card-text">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua{" "}
								</p>{" "}
							</div>{" "}
							<div className="bluebottom"> </div>{" "}
						</div>{" "}
						<div className="card">
							<img className="card-img img2" src={techSupport} alt="" />
							<div className="card-content">
								<h1 className="card-header"> Technical Support </h1>{" "}
								<p className="card-text">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua{" "}
								</p>{" "}
							</div>{" "}
							<div className="greenbottom"> </div>{" "}
						</div>{" "}
						<div className="card">
							<img className="card-img img3" src={marketplc} alt="" />
							<div className="card-content">
								<h1 className="card-header"> Marketplace </h1>{" "}
								<p className="card-text">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua{" "}
								</p>{" "}
							</div>{" "}
							<div className="greenbottom"> </div>{" "}
						</div>{" "}
						<div className="card">
							<img className="card-img img4" src={funding} alt="" />
							<div className="card-content">
								<h3 className="card-header"> Funding </h3>{" "}
								<p className="card-text">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua{" "}
								</p>{" "}
							</div>{" "}
							<div className=" bluebottom"> </div>{" "}
						</div>{" "}
					</div>{" "}
				</div>{" "}
			</div>{" "}
		</>
	)
}

export default Cards
