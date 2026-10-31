import { Route, Routes } from "react-router"
import addictiveSubstancesDataRaw from "@/content/abuse/addictive-substances.json"
import type { IAbusePoint } from "@/models"

function DisplayPage() {
    const addictiveSubstancesData = addictiveSubstancesDataRaw as IAbusePoint[]

    return (
        <>
            <h2>Missbruk</h2>
            <ul>
                {addictiveSubstancesData.map((abusePoint, index) => (
                    <li key={index}>
                        <h3>{abusePoint.title}</h3>
                        {abusePoint.contentSections.map((contentSection, index) => (
                            <div key={index}>
                                {contentSection.heading ? <h3>{contentSection.heading}</h3> : undefined}
                                {contentSection.contentList.map((content, index ) => (
                                    <p key={index}>{content.content}</p>
                                ))}
                            </div>
                        ))}
                    </li>
                ))}
            </ul>
        </>
    )
}

function Abuse() {

    return (
        <Routes>
            <Route index element={<DisplayPage/>}/>
        </Routes>
    )
}

export default Abuse