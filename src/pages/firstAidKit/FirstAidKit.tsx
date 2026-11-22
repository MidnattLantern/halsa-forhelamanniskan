import { Route, Routes } from "react-router"
import firstAidKitDataRaw from "@/content/first-aid-kit.json"
import ArticleParagraph from "@/components/articleParagraph/ArticleParagraph"
import type { IFirstAid } from "@/models/first-aid"

function DisplayPage() {
    const firstAidKitData = firstAidKitDataRaw as IFirstAid[]

    return (
        <>
            <h2>Första hjälpen kit</h2>
            {firstAidKitData.map((section, index) => (
                <ArticleParagraph key={index} content={section}/>
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