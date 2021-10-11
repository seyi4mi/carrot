import React, { useState } from "react"
import { HashLink as Link } from "react-router-hash-link"
import "./Navbar.css"

function Navbar() {
	const [click, setClick] = useState(false)
	const handleClick = () => {
		setClick(!click)
	}
	const closeMobileMenu = () => setClick(false)

	return (
		<>
			<nav>
				<Link smooth to="#" className="navbar-logo">
					<p className="logop1">LetsGrow</p>
					<p className="logop2"> AgriTech Hub</p>
					<p className="slogan">Redefining the Bread Basket </p>
				</Link>

				<ul className={click ? "navitems active" : "navitems"}>
					<li className="link">
						<Link
							smooth
							to="#about-us"
							className="nav-links"
							onClick={closeMobileMenu}
						>
							About
						</Link>
					</li>
					<li className="link">
						<Link
							smooth
							to="#services"
							className="nav-links"
							onClick={closeMobileMenu}
						>
							Services
						</Link>
					</li>
					<li className="link">
						<Link
							smooth
							to="#our-team"
							className="nav-links"
							onClick={closeMobileMenu}
						>
							Our Team
						</Link>
					</li>
					<li className="link">
						<Link
							smooth
							to="#contact-us"
							className="nav-links"
							onClick={closeMobileMenu}
						>
							Contact Us
						</Link>
					</li>
				</ul>

				<div onClick={handleClick} className="menu-icon">
					<i className={click ? "fas fa-times" : "fas fa-bars"} />
				</div>
			</nav>
		</>
	)
}
export default Navbar
