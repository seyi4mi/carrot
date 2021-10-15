import React from "react"
import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import Banner from "./components/Banner/Banner"
import Aboutus from "./components/About/Aboutus"
import VidSection from "./components/Video/VidSection"
import Services from "./components/Services/Services"
// import OurTeam from "./components/Team/OurTeam"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

function App() {
	return (
		<>
			<Navbar />
			<Banner />
			<Aboutus />
			<VidSection />
			<Services /> {/* <OurTeam /> */} <Contact />
			<Footer />
		</>
	)
}

export default App
