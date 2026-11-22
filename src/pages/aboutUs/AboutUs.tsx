import Styles from "./AboutUs.module.scss"
import { Route, Routes } from "react-router"
import aboutUsDataRaw from "@/content/about-us.json"
import type { IAboutUs } from "@/models/about-us"
import ArticleParagraph from "@/components/articleParagraph/ArticleParagraph"

function DisplayPage() {
    const aboutUsData = aboutUsDataRaw as IAboutUs

    return (
        <>
            <h2>Om oss</h2>
            <ul className={Styles.container}>
                {aboutUsData.map((aboutPoint, index) => (
                    <ArticleParagraph key={index} content={aboutPoint}/>
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