import React from "react"
import "./VidSection.css"
import vid from "../../images/vid.svg"

function VidSection() {
	return (
		<>
			<div className="vid-container">
				<div className="greenbg">
					<h2 className="vid-title"> Video - Agriculture </h2>{" "}
					<div className="underline"> </div>{" "}
				</div>{" "}
				<div className="video">
					<img src={vid} alt="" />
				</div>{" "}
			</div>{" "}
		</>
	)
}

export default VidSection
