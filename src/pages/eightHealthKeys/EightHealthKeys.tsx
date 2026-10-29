import Styles from "./EightHealthKeys.module.scss"
import { Route, Routes } from "react-router"
import healthKeyDataRaw from "@/content/health-keys.json"
import type { IHealthKey } from "@/models"

function DisplayPage() {
    const healthKeyData = healthKeyDataRaw as IHealthKey[]

    return (
        <>
            <h2 className={Styles.heading}>Åtta Hälsonycklar</h2>
            <div className={Styles.articlesContainer}>
                {healthKeyData.map((healthKey, index) => (
                    <article key={index} className={Styles.article}>
                        <h3>{healthKey.title}</h3>
                        <figure>
                            <img src={healthKey.photoURL} alt={`Representativ bild för ${healthKey.title}`} width={300}/>
                            <figcaption>
                                <span>Foto av <a href={healthKey.photoCredit.nameURL} target="_blank">{healthKey.photoCredit.name}</a></span>
                                <br/>
                                <span>Från <a href={healthKey.photoCredit.sourceURL} target="_blank">{healthKey.photoCredit.source}</a></span>
                            </figcaption>
                        </figure>
                        <ul>
                            {healthKey.paragraphs.map((paragraph, index) => (
                                <li key={index}>{paragraph}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </>
    )
}

function EightHealthKeys() {

    return (
        <Routes>
            <Route index element={<DisplayPage/>}/>
        </Routes>
    )
}

export default EightHealthKeys