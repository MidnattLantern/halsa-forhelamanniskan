import { Route, Routes } from "react-router"
import addictiveSubstancesDataRaw from "@/content/abuse/addictive-substances.json"
import type { IAddictiveSubstance } from "@/models/abuse"

function DisplayPage() {
    const addictiveSubstancesData = addictiveSubstancesDataRaw as IAddictiveSubstance[]

    return (
        <>
            <h2>Missbruk</h2>
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
                            <>
                                {typeof paragraph === 'string' && <p key={index}>{paragraph}</p>}
                                {typeof paragraph === 'object' && <p key={index}>{`(Object)`}</p>}
                            </>
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