import { Route, Routes } from "react-router"
import NavBar from "./components/navBar/NavBar"
import EightHealthKeys from "./pages/eightHealthKeys/EightHealthKeys"
import AboutUs from "./pages/aboutUs/AboutUs"
import Abuse from "./pages/abuse/Abuse"
import NaturalMedicine from "./pages/naturalMedicine/NaturalMedicine"

function DisplayLandingPage() {
	return (
		<>
			<h2>Välkommen</h2>
		</>
	)
}

function App() {

	return (
		<>
			<header>
				<NavBar/>
			</header>
			<main>
				<Routes>
					<Route index element={<DisplayLandingPage/>}/>
					<Route path='/atta-halsonycklar/*' element={<EightHealthKeys/>}/>
					<Route path='/om-oss/*' element={<AboutUs/>}/>
					<Route path='/naturlig-behandling/*' element={<NaturalMedicine/>}/>
					<Route path='/missbruk/*' element={<Abuse/>}/>
				</Routes>
			</main>
			<footer>

			</footer>
		</>
	)
}

export default App
