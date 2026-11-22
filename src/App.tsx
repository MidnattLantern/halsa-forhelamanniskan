import { Route, Routes } from "react-router"
import NavBar from "./components/navBar/NavBar"
import EightHealthKeys from "./pages/eightHealthKeys/EightHealthKeys"
import AboutUs from "./pages/aboutUs/AboutUs"
import Abuse from "./pages/abuse/Abuse"
import NaturalMedicine from "./pages/naturalMedicine/NaturalMedicine"
import NervousSystem from "./pages/nervousSystem/NervousSystem"
import HerbsForService from "./pages/herbsForService/HerbsForService"
import FirstAidKit from "./pages/firstAidKit/FirstAidKit"

function DisplayLandingPage() {
	return (
		<>
			<h2>Välkommen</h2>
			<img src="https://images.unsplash.com/photo-1598902720236-d0587fa7bad1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="Äng med blandning av långa strån; blåa, via och röda blommor; en rad av träd som skiljer ängen från en molnig blå himmel." width={300}/>
			<NavBar/>
		</>
	)
}

function App() {

	return (
		<>
			<header>
				<NavBar asHeader={true}/>
			</header>
			<main>
				<Routes>
					<Route index element={<DisplayLandingPage/>}/>
					<Route path='/atta-halsonycklar/*' element={<EightHealthKeys/>}/>
					<Route path='/om-oss/*' element={<AboutUs/>}/>
					<Route path='/naturlig-behandling/*' element={<NaturalMedicine/>}/>
					<Route path='/missbruk/*' element={<Abuse/>}/>
					<Route path='/halsa-for-nervsystemet/*' element={<NervousSystem/>}/>
					<Route path='/orter-till-manniskans-tjänst/*' element={<HerbsForService/>}/>
					<Route path='/forsta-hjalpen-kit/*' element={<FirstAidKit/>}/>
				</Routes>
			</main>
			<footer>

			</footer>
		</>
	)
}

export default App
