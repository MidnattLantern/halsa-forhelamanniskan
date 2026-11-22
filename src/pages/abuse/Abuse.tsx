import { Route, Routes } from "react-router"
import overviewDataRaw from "@/content/abuse/overview.json"
import addictiveSubstancesDataRaw from "@/content/abuse/addictive-substances.json"
import replacementsDataRaw from "@/content/abuse/replacements.json"
import type { IAddictiveSubstance, IOverview, IReplacement } from "@/models/abuse"
import ArticleParagraph from "@/components/articleParagraph/ArticleParagraph"

function DisplayPage() {
    const overviewData = overviewDataRaw as IOverview[][] // consider rewriting the format as a paragraph
    const addictiveSubstancesData = addictiveSubstancesDataRaw as IAddictiveSubstance[]
    const replacementsData = replacementsDataRaw as IReplacement[]

    return (
        <>
            <h2>Missbruk</h2>
            <div>
                {overviewData.map((overviewsection, index) => (
                    <div key={index}>
                        {overviewsection.map((subOverview, index) => (
                            <ArticleParagraph key={index} content={subOverview}/>
                        ))}
                    </div>
                ))}
            </div>
            <div>
                {addictiveSubstancesData.map((substance, index) => (
                    <section key={index}>
                        <h3>{substance.title}</h3>
                        <figure>
                            <img src={substance.photoURL} alt={`Representativ bild för ${substance.title}`} width={300}/>
                            <figcaption>
                                <span>Foto av <a href={substance.photoCredit.nameURL} target="_blank">{substance.photoCredit.name}</a></span>
                                <br/>
                                <span>Från <a href={substance.photoCredit.sourceURL}>{substance.photoCredit.source}</a></span>
                            </figcaption>
                        </figure>
                        {substance.paragraphs.map((paragraph, index) => (
                            <ArticleParagraph key={index} content={paragraph}/>
                        ))}
                    </section>
                ))}
            </div>
            <div>
                {replacementsData.map((replacement, index) => (
                    <ArticleParagraph key={index} content={replacement}/>
                ))}
            </div>
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