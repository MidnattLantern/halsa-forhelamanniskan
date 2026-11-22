import Styles from "./AboutUs.module.scss"
import { Route, Routes } from "react-router"
import aboutUsDataRaw from "@/content/about-us.json"
import type { IAboutUs, IObjectContent } from "@/models/about-us"

function DisplayPage() {
    const aboutUsData = aboutUsDataRaw as IAboutUs

    function CommonParagraph({content}: {content: string}) {
        return <span>{content}</span>
    }

    function ObjectContent({content} : {content: IObjectContent}) {
        if (content.type === 'url') return (
            <a href={content.content} target="_blank">{content.friendlyContent}</a>
        )
    }

    return (
        <>
            <h2>Om oss</h2>
            <ul className={Styles.container}>
                {aboutUsData.map((aboutPoint, index) => (
                    <li key={index}>
                        {typeof aboutPoint === 'string' && <CommonParagraph content={aboutPoint}/>}
                        {typeof aboutPoint === 'object' && <ObjectContent content={aboutPoint}/>}
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