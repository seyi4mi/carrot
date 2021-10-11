import React from "react"
import p1 from "../../images/p1.svg"
import p2 from "../../images/p2.svg"
import p3 from "../../images/p3.svg"
import p4 from "../../images/p4.svg"
import p5 from "../../images/p5.svg"
import p6 from "../../images/p6.svg"
import Linkedin from "../../images/Linkedin.svg"
import "./OurTeam.css"

const OurTeam = () => {
	return (
		<>
			<div className="team-section" id="our-team">
				<div className="team-container">
					<h3 className="team-header"> Meet The Team </h3>{" "}
					<div className="all-teams">
						<div className="team">
							<div className="memeber-frame">
								<img className="memeber-img" src={p1} alt="" />
								<a href="https://www.google.com/">
									<img className="linkden" src={Linkedin} alt="" />
								</a>{" "}
							</div>{" "}
							<div className="team-info">
								<h4 className="member-name"> Team Member </h4>{" "}
								<p className="member-role"> nisi ut aliqrpuip ex ea </p>{" "}
							</div>{" "}
						</div>{" "}
						<div className="team">
							<div className="memeber-frame">
								<img className="memeber-img" src={p2} alt="" />
								<a href="https://www.google.com/">
									<img className="linkden" src={Linkedin} alt="" />
								</a>{" "}
							</div>{" "}
							<div className="team-info">
								<h4 className="member-name"> Team Member </h4>{" "}
								<p className="member-role"> nisi ut aliqrpuip ex ea </p>{" "}
							</div>{" "}
						</div>{" "}
						<div className="team">
							<div className="memeber-frame">
								<img className="memeber-img" src={p3} alt="" />
								<a href="https://www.google.com/">
									<img className="linkden" src={Linkedin} alt="" />
								</a>{" "}
							</div>{" "}
							<div className="team-info">
								<h4 className="member-name"> Team Member </h4>{" "}
								<p className="member-role"> nisi ut aliqrpuip ex ea </p>{" "}
							</div>{" "}
						</div>{" "}
						<div className="team">
							<div className="memeber-frame">
								<img className="memeber-img" src={p4} alt="" />
								<a href="https://www.google.com/">
									<img className="linkden" src={Linkedin} alt="" />
								</a>{" "}
							</div>{" "}
							<div className="team-info">
								<h4 className="member-name"> Team Member </h4>{" "}
								<p className="member-role"> nisi ut aliqrpuip ex ea </p>{" "}
							</div>{" "}
						</div>{" "}
						<div className="team">
							<div className="memeber-frame">
								<img className="memeber-img" src={p5} alt="" />
								<a href="https://www.google.com/">
									<img className="linkden" src={Linkedin} alt="" />
								</a>{" "}
							</div>{" "}
							<div className="team-info">
								<h4 className="member-name"> Team Member </h4>{" "}
								<p className="member-role"> nisi ut aliqrpuip ex ea </p>{" "}
							</div>{" "}
						</div>{" "}
						<div className="team">
							<div className="memeber-frame">
								<img className="memeber-img" src={p6} alt="" />
								<a href="https://www.google.com/">
									<img className="linkden" src={Linkedin} alt="" />
								</a>{" "}
							</div>{" "}
							<div className="team-info">
								<h4 className="member-name"> Team Member </h4>{" "}
								<p className="member-role"> nisi ut aliqrpuip ex ea </p>{" "}
							</div>{" "}
						</div>{" "}
					</div>{" "}
				</div>{" "}
			</div>{" "}
		</>
	)
}

export default OurTeam
