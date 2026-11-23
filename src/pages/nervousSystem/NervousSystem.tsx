import { Route, Routes } from "react-router"
import nervousSystemDataRaw from "@/content/nervous-system.json"
import type { INervousSystem } from "@/models/nervous.system"
import ArticleParagraph from "@/components/articleParagraph/ArticleParagraph"

function DisplayPage() {
    const nervousSystemData = nervousSystemDataRaw as INervousSystem[]

    return (
        <>
            <h2>Hälsa för nervsystemet</h2>
            {nervousSystemData.map((nervousSection, index) => (
                <section key={index}>
                    <h3>{nervousSection.heading}</h3>
                    <div key={index}>
                        {nervousSection.textContent.map((content, index) => (
                            <ArticleParagraph key={index} content={content}/>
                        ))}
                    </div>
                </section>
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