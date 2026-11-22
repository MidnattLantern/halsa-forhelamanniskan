import { Route, Routes } from "react-router"
import overviewDataRaw from "@/content/herbsForService/overview.json"
import classificationDataRaw from "@/content/herbsForService/classification.json"
import herbRecipesDataRaw from "@/content/herbsForService/herb-recipes.json"
import floraDataRaw from "@/content/herbsForService/flora.json"
import type { IClassification, IFlora, IRecipe, IOverview } from "@/models/herbs-for-service"
import ArticleParagraph from "@/components/articleParagraph/ArticleParagraph"

function DisplayPage() {
    const overviewData = overviewDataRaw as IOverview[]
    const classificationData = classificationDataRaw as IClassification[]
    const herbRecipesData = herbRecipesDataRaw as IRecipe[]
    const floraData = floraDataRaw as IFlora[]

    return (
        <>
            <section>
                <h2>Örter till människans tjänst</h2>
                {overviewData.map((overview, index) => (
                    <ArticleParagraph key={index} content={overview}/>
                ))}
            </section>

            <section>
                <h3>Klassificering av örter efter användningsområde</h3>
                {classificationData.map((classification, index) => (
                    <ArticleParagraph key={index} content={classification}/>
                ))}
            </section>

            <section>
                <h3>Recept</h3>
                {herbRecipesData.map((herbRecipe, index) => ( // todo: create a universal recipe component
                    <div key={index}>
                        <h4>{herbRecipe.title}</h4>
                        <ul>
                            {herbRecipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                        <ul>
                            {herbRecipe.instructions.map((instruction, index) => (
                                <li key={index}>{instruction}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            <section>
                <h3>Flora</h3>
                {floraData.map((flora, index) => (
                    // <div key={index}>
                    //     <h4>{flora.heading}</h4>
                    //     {flora.contents.map((content, index) => (
                    //         <p key={index}>{content}</p>
                    //     ))}
                    // </div>
                    <ArticleParagraph key={index} content={flora}/>
                ))}
            </section>
        </>
    )
}

function HerbsForService() {

    return (
        <Routes>
            <Route index element={<DisplayPage/>}/>
        </Routes>
    )
}

export default HerbsForService