import { Route, Routes } from "react-router"
import nervousSystemDataRaw from "@/content/nervous-system.json"
import type { INervousSystem } from "@/models"

function DisplayPage() {
    const nervousSystemData = nervousSystemDataRaw as INervousSystem[]

    return (
        <>
            <h2>Hälsa för nervsystemet</h2>
            {nervousSystemData.map((section, index) => (
                <div key={index}>
                    <h3>{section.heading}</h3>
                    {section.contentSections.map((contentsSection, index) => (
                        <div key={index}>
                            {contentsSection.map((content, index) => (
                                <p key={index}>{content.content}</p>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </>
    )
}

function NervousSystem() {
    
    return (
        <Routes>
            <Route index element={<DisplayPage/>}/>
        </Routes>
    )
}

export default NervousSystem