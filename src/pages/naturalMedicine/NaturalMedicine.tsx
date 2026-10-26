import { Route, Routes } from "react-router"
import naturalMedicineDataRaw from "@/content/natural-medicine.json"
import type { INaturalMedicine } from "@/models"

function DisplayPage() {
    const naturalMedicineData = naturalMedicineDataRaw as INaturalMedicine[]

    return (
        <>
            <section>
                <h2>Förkylning & Naturlig behandling</h2>
                {naturalMedicineData.map((naturalMedicineObject, index) => (
                    <p key={index}>{naturalMedicineObject.name}</p>
                ))}
            </section>
        </>
    )
}

function NaturalMedicine() {

    return (
        <Routes>
            <Route index element={<DisplayPage/>}/>
        </Routes>
    )
}

export default NaturalMedicine