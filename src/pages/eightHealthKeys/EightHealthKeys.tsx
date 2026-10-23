import { Route, Routes } from "react-router"
import healthKeyDataRaw from "@/content/health-keys.json"
import type { IHealthKey } from "@/models"

function DisplayPage() {
    const healthKeyData = healthKeyDataRaw as IHealthKey[]

    return (
        <>
            <h2>8 Hälsonycklar</h2>
            <ul>
                {healthKeyData.map((healthKey, index) => (
                    <li key={index}>{healthKey.title}</li>
                ))}
            </ul>
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