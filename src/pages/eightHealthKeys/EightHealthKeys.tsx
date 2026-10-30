import Styles from "./EightHealthKeys.module.scss"
import { Route, Routes } from "react-router"
import healthKeyDataRaw from "@/content/health-keys.json"
import type { IHealthKey } from "@/models"
import HealthKeyArticle from "./healthKeyArticle/HealthKeyArticle"
import HealthKeyPreview from "./healthKeyPreview/HealthKeyPreview"

function DisplayPage() {
    const healthKeyData = healthKeyDataRaw as IHealthKey[]

    return (
        <>
            <div className={Styles.articlesContainer}>
                {healthKeyData.map((healthKey, index) => (
                    <HealthKeyPreview key={index} healthKey={healthKey} index={index}/>
                ))}
            </div>
        </>
    )
}

function EightHealthKeys() {
    return (
        <>
            <h2 className={Styles.heading}>Åtta Hälsonycklar</h2>
            <Routes>
                <Route index element={<DisplayPage/>}/>
                <Route path="/:id" element={<HealthKeyArticle/>}/>
            </Routes>
        </>
    )
}

export default EightHealthKeys