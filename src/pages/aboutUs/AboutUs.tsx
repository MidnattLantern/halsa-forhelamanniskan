import { Route, Routes } from "react-router"
import aboutUsDataRaw from "@/content/about-us.json"
import type { IAboutUsPoint } from "@/models"

function DisplayPage() {
    const aboutUsData = aboutUsDataRaw as IAboutUsPoint[][]

    return (
        <>
            <h2>Om oss</h2>
            <ul>
                {aboutUsData.map((aboutUsPoint, index) => (
                    <li key={index}>
                        {aboutUsPoint.map((subPoint, index) => (
                            <span key={index}>{subPoint.content}</span>
                        ))}
                    </li>
                ))}
            </ul>
        </>
    )
}

function AboutUs() {

    return (
        <Routes>
            <Route index element={<DisplayPage/>}/>
        </Routes>
    )
}

export default AboutUs