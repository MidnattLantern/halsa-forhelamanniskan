import { Route, Routes } from "react-router"
import overviewDataRaw from "@/content/herbsForService/overview.json"
import classificationDataRaw from "@/content/herbsForService/classification.json"
import herbRecipesDataRaw from "@/content/herbsForService/herb-recipes.json"
import floraDataRaw from "@/content/herbsForService/flora.json"
import type { IClassification, IFlora, IObjectContent, IOverview, IRecipe } from "@/models/herbs-for-service"

function DisplayPage() {
    const overviewData = overviewDataRaw as IOverview
    const classificationData = classificationDataRaw as IClassification[]
    const herbRecipesData = herbRecipesDataRaw as IRecipe[]
    const floraData = floraDataRaw as IFlora[]

    function CommonParagraph({content}: {content: string}) {
        return <span>{content}</span>
    }

    function ObjectContent({content} : {content: IObjectContent}) {
        if (content.type === 'uList') return (
            <>
                {content.uListHeading && <h4>{content.uListHeading}</h4>}
                <ul>
                    {content.uListContent && content.uListContent.map((content, index) => (
                        <li key={index}>{content}</li>
                    ))}
                </ul>
            </>
        )
    }

    return (
        <>
            <section>
                <h2>Örter till människans tjänst</h2>
                {overviewData.map((overview, index) => (
                    <div key={index}>
                        {typeof overview === 'string' && <CommonParagraph content={overview}/>}
                        {typeof overview === 'object' && <ObjectContent content={overview}/>}
                    </div>
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