import { Route, Routes } from "react-router"
import firstAidKitDataRaw from "@/content/first-aid-kit.json"
import type { IFirstAidKit } from "@/models"

function DisplayPage() {
    const firstAidKitData = firstAidKitDataRaw as IFirstAidKit[]

    return (
        <>
            <h2>Första hjälpen kit</h2>
            {firstAidKitData.map((firstAidSection, index) => (
                <section key={index}>
                    <h3>{firstAidSection.bulletHeading}</h3>
                    <ul>
                        {firstAidSection.content.map((bulletPoint, index) => (
                            <li key={index}>{bulletPoint}</li>
                        ))}
                    </ul>
                </section>
            ))}
        </>
    )
}

function FirstAidKit() {

    return (
        <Routes>
            <Route index element={<DisplayPage/>}/>
        </Routes>
    )
}

export default FirstAidKit