// Consider remaking this component as a universal article component

import { NavLink, useParams } from "react-router"
import Styles from "./HealthKeyArticle.module.scss"
import healthKeyDataRaw from "@/content/health-keys.json"
import type { IHealthKey } from "@/models/health-keys";

function HealthKeyArticle() {
    const params = useParams()
    const healthKey = healthKeyDataRaw[Number(params.id)] as IHealthKey;
    window.scrollTo(0, 0)

    return (
        <>
        <NavLink to="/atta-halsonycklar">Tillbaka</NavLink>
            <article className={Styles.article}>
                <h3>{healthKey.title}</h3>
                <figure>
                    <img src={healthKey.photoUrl} alt={`Representativ bild för ${healthKey.title}`} width={300}/>
                    <figcaption>
                        <span>Foto av <a href={healthKey.photoCredit.nameUrl} target="_blank">{healthKey.photoCredit.name}</a></span>
                        <br/>
                        <span>Från <a href={healthKey.photoCredit.sourceUrl} target="_blank">{healthKey.photoCredit.source}</a></span>
                    </figcaption>
                </figure>
                <ul>
                    {healthKey.paragraphs.map((paragraph, index) => (
                        <li key={index}>{paragraph}</li>
                    ))}
                </ul>
            </article>
        <NavLink to="/atta-halsonycklar">Tillbaka</NavLink>
        </>
    )
}

export default HealthKeyArticle