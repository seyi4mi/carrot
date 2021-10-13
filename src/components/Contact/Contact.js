import React from "react"
import "./Contact.css"

function Contact() {
	return (
		<>
			<div className="contact" id="contact-us">
				<div className="contacts">
					<div className="contact-info">
						<h2 className="contact-title"> Contact Us </h2>
						<div>
							<i className="fa fa-envelope"> </i>email@gmail.com
						</div>
						<div>
							<i className="fa fa-phone"> </i>+60 123 456 789
						</div>
						<div>
							<div className="marker-icon">
								<i className="fa fa-map-marker"> </i>address, Malaysia, Kuala
								Lumpur
							</div>
						</div>
					</div>

					<div className="contact-form">
						<h2 h2 className="intouch-title">
							Let's Get In Touch
						</h2>
						<form action="" method="post">
							<input
								type="text"
								name="name"
								className="text-box"
								placeholder=" &#xf007;  Your Name"
								required
							></input>
							<input
								type="email"
								name="email"
								className="text-box"
								placeholder=" &#xf0e0;  Your Email"
								required
							></input>
							<textarea
								name="message"
								className="msg-box"
								rows="5"
								placeholder="Your Message"
							></textarea>
							<input
								type="submit"
								name="submit"
								className="submit-btn"
								value="Submit"
							></input>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default Contact
