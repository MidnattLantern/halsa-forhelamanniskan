import { Route, Routes } from "react-router"

function DisplayPage() {

    return (
        <>
            <h2>8 Hälsonycklar</h2>
        </>
    )
}

function EightHealthKeys() {

    return (
        <Routes>
            <Route index element={<DisplayPage/>}/>
        </Routes>
    )
}

export default EightHealthKeys