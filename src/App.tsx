import { Route, Routes } from "react-router"
import NavBar from "./components/navBar/NavBar"
import EightHealthKeys from "./pages/eightHealthKeys/EightHealthKeys"

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
				</Routes>
			</main>
			<footer>

			</footer>
		</>
	)
}

export default App
