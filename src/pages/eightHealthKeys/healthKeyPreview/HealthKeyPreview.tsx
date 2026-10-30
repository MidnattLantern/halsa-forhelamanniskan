import { NavLink } from "react-router";
import Styles from "./HealthKeyPreview.module.scss"
import type { IHealthKey } from "@/models";

function HealthKeyPreview({
    healthKey, index
} : {
    healthKey : IHealthKey,
    index: number
}) {

    return (
        <section className={Styles.container}>
            <h3>{healthKey.title}</h3>
            <figure>
                <img src={healthKey.photoURL} alt={`Representativ bild för ${healthKey.title}`} width={300}/>
                <figcaption>
                    <span>Foto av <a href={healthKey.photoCredit.nameURL} target="_blank">{healthKey.photoCredit.name}</a></span>
                    <br/>
                    <span>Från <a href={healthKey.photoCredit.sourceURL} target="_blank">{healthKey.photoCredit.source}</a></span>
                </figcaption>
            </figure>
            <NavLink to={String(index)}>Läs mer</NavLink>
        </section>
    )
}

export default HealthKeyPreview