import React from "react"
import "./VidSection.css"

function VidSection() {
	return (
		<>
			<div className="vid-container">
				<div className="greenbg">
					<h2 className="vid-title"> Video - Agriculture </h2>
					<div className="underline"> </div>
					<div className="video">
						<iframe
							// width="860px"
							height="405px"
							src="https://www.youtube.com/embed/2K6HyPjKlL4"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					</div>
				</div>
			</div>
		</>
	)
}

export default VidSection
