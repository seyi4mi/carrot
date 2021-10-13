import React from "react"
import "./Aboutus.css"
import aboutus from "../../images/aboutus.svg"

function Aboutus() {
	return (
		<>
			<div className="about-us" id="about-us">
				<div className="wrapper">
					<img className="about-img" src={aboutus} alt="" />
					<div className="content">
						<h4 className="title"> About us </h4>{" "}
						<h2 className="about-subtitle"> Get To Know Us! </h2>{" "}
						<p className="about-content">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim
							ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
							aliquip ex ea commodo.{" "}
						</p>{" "}
					</div>{" "}
				</div>{" "}
			</div>{" "}
		</>
	)
}

export default Aboutus
