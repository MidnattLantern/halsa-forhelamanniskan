import { Route, Routes } from "react-router"
import naturalMedicineDataRaw from "@/content/natural-medicine.json"
import type {
    INaturalMedicine,
    IRecipeSection,
} from "@/models/natural-medicine"
import ArticleParagraph from "@/components/articleParagraph/ArticleParagraph"

function DisplayPage() {
    const naturalMedicineData = naturalMedicineDataRaw as INaturalMedicine[]

    function RecipeSection({section}: {section: IRecipeSection[]}) { // consider turning this into a component
        return (
            <table>
                <caption>Detta behöver du</caption>
                <thead>
                    <tr>
                        <td>Ingrediens</td>
                        <td>Volym</td>
                    </tr>
                </thead>
                <tbody>
                    {section.map((recipe, index) => (
                        <tr key={index}>
                            <td>{recipe.item}</td>
                            <td>{recipe.volume}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }

    function RecipeInstructionsSection({instructions}: {instructions: string[]}) { // consider turning this into a component
        return (
            <section>
                <h4>Gör så här</h4>
                <ul>
                    {instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                    ))}
                </ul>
            </section>
        )
    }

    return (
        <>
            <section>
                <h2>Förkylning & Naturlig behandling</h2>
                {naturalMedicineData.map((section, index) => (
                    <section key={index}>
                        <h3>{section.name}</h3>
                        {section.effectsSection?.map((content, index) => (
                            <ArticleParagraph key={index} content={content}/>
                        ))}
                        {section.recipeSection && <RecipeSection section={section.recipeSection}/>}
                        {section.recipeInstructionsSection && <RecipeInstructionsSection instructions={section.recipeInstructionsSection}/>}
                        {section.treatmentInstructionsSection?.map((content, index) => (
                            <ArticleParagraph key={index} content={content}/>
                        ))}
                    </section>
                ))}
            </section>
        </>
    )
}

function NaturalMedicine() {

    return (
        <Routes>
            <Route index element={<DisplayPage/>}/>
        </Routes>
    )
}

export default NaturalMedicine