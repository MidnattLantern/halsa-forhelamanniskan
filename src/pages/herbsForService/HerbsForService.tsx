import { Route, Routes } from "react-router"
import overviewDataRaw from "@/content/herbsForService/overview.json"
import classificationDataRaw from "@/content/herbsForService/classification.json"
import herbRecipesDataRaw from "@/content/herbsForService/herb-recipes.json"
import floraDataRaw from "@/content/herbsForService/flora.json"
import type { IFlexibleContentItem, IHerbRecipe, IHerbsFlora } from "@/models"

function DisplayPage() {
    const overviewData = overviewDataRaw as IFlexibleContentItem[]
    const classificationData = classificationDataRaw as IHerbsFlora[]
    const herbRecipesData = herbRecipesDataRaw as IHerbRecipe[]
    const floraData = floraDataRaw as IHerbsFlora[]

    return (
        <>
            <section>
                <h2>Örter till människans tjänst</h2>
                {overviewData.map((overview, index) => (
                    <p key={index}>{overview.content}</p>
                ))}
            </section>
            <section>
                <h3>Klassificering av örter efter användningsområde</h3>
                {classificationData.map((classification, index) => (
                    <div key={index}>
                        <h4>{classification.heading}</h4>
                        <ul>
                            {classification.contents.map((content, index) => (
                                <li key={index}>{content}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
            <section>
                <h3>Recept</h3>
                {herbRecipesData.map((herbRecipe, index) => (
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
                    <div key={index}>
                        <h4>{flora.heading}</h4>
                        {flora.contents.map((content, index) => (
                            <p key={index}>{content}</p>
                        ))}
                    </div>
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