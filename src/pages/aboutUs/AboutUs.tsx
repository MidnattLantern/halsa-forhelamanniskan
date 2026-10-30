import Styles from "./AboutUs.module.scss"
import { Route, Routes } from "react-router"
import aboutUsDataRaw from "@/content/about-us.json"
import type { IAboutUsPoint } from "@/models"

function DisplayPage() {
    const aboutUsData = aboutUsDataRaw as IAboutUsPoint[][]

    function Paragraph({content}: {content: string}) {
        return <span>{content}</span>
    }

    function Url({destination, friendlyUrl}: {destination: string, friendlyUrl: string}) {
        return <a href={destination} target="_blank">{friendlyUrl}</a>
    }

    return (
        <>
            <h2>Om oss</h2>
            <ul className={Styles.container}>
                {aboutUsData.map((aboutPoint, index) => (
                    <li key={index}>
                        {aboutPoint.map((about, index) => (
                            <p key={index}>
                                {about.type === "url" && <Url destination={about.content} friendlyUrl={about.friendlyContent!}/>}
                                {about.type === "paragraph" && <Paragraph content={about.content}/>}
                            </p>
                        ))}
                    </li>
                ))}
            </ul>
        </>
    )
}

function AboutUs() {

    return (
        <Routes>
            <Route index element={<DisplayPage/>}/>
        </Routes>
    )
}

export default AboutUs