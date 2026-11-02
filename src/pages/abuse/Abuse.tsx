import { Route, Routes } from "react-router"
import overviewDataRaw from "@/content/abuse/overview.json"
import addictiveSubstancesDataRaw from "@/content/abuse/addictive-substances.json"
import type { IAddictiveSubstance, IOverview, IOverviewObject, ISubstanceParagraph } from "@/models/abuse"

function DisplayPage() {
    const overviewData = overviewDataRaw as IOverview[]
    const addictiveSubstancesData = addictiveSubstancesDataRaw as IAddictiveSubstance[]

    // ======
    // common
    // ======
    function CommonParagraph({paragraph}: {paragraph: string}) {
        return <p>{paragraph}</p>
    }
    // ======


    // ========
    // overview
    // ========
    function ObjectContentOverview({overview} : {overview: IOverviewObject}) {
        if (overview.type === 'uList') return (
            <>
                {overview.uListHeading && <h4>{overview.uListHeading}</h4>}
                <ul>
                    {overview.uListContent && overview.uListContent.map((content, index) => (
                        <li key={index}>{content}</li>
                    ))}
                </ul>
            </>
        )
    }
    // ========

    // ==========
    // Substances
    // ==========
    function ObjectContentSubstances({paragraph}: {paragraph: ISubstanceParagraph}) {
        if (paragraph.type === 'uList') return (
            <>
                {paragraph.uListHeading && <h4>{paragraph.uListHeading}</h4>}
                <ul>
                    {paragraph.uListContent && paragraph.uListContent.map((content, index) => (
                        <li key={index}>{content}</li>
                    ))}
                </ul>
            </>
        )
        if (paragraph.type === 'url') return (
            <a href={paragraph.content} target="_blank">{paragraph.friendlyContent}</a>
        )
    }
    // ==========


    return (
        <>
            <h2>Missbruk</h2>
            <div>
                {overviewData.map((overviewsection, index) => (
                    <div key={index}>
                        {overviewsection.map((subOverview, index) => (
                            <div key={index}>
                                {typeof subOverview === 'string' && <CommonParagraph paragraph={subOverview}/>}
                                {typeof subOverview === 'object' && <ObjectContentOverview overview={subOverview}/>}
                            </div>
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
                            <div key={index}>
                                {typeof paragraph === 'string' && <CommonParagraph paragraph={paragraph}/>}
                                {typeof paragraph === 'object' && <ObjectContentSubstances paragraph={paragraph}/>}
                            </div>
                        ))}
                    </section>
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