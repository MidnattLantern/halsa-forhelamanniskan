import { Route, Routes } from "react-router"
import naturalMedicineDataRaw from "@/content/natural-medicine.json"
import type { INaturalMedicine, INaturalMedicineEffects, INaturalMedicineRecipe } from "@/models"

function DisplayPage() {
    const naturalMedicineData = naturalMedicineDataRaw as INaturalMedicine[]

    function EffectsSection({section}: {section: INaturalMedicineEffects}) {
        return (
            <>
                <h4>{section.heading}</h4>
                <ul>
                    {section.effects.map((effect, index) => (
                        <li key={index}>{effect}</li>
                    ))}
                </ul>
            </>
        )
    }

    function RecipeSection({section}: {section: INaturalMedicineRecipe[]}) {
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

    function RecipeInstructionsSection({instructions}: {instructions: string[]}) {
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

    function TreatmentInstructionsSection() {
        return (
            <>
                <p>Instruktioner</p>
            </>
        )
    }

    return (
        <>
            <section>
                <h2>Förkylning & Naturlig behandling</h2>
                {naturalMedicineData.map((NaturalMedicine, index) => (
                    <>
                        <h3 key={index}>{NaturalMedicine.name}</h3>
                        {NaturalMedicine.effectsSection && <EffectsSection section={NaturalMedicine.effectsSection}/>}
                        {NaturalMedicine.recipeSection && <RecipeSection section={NaturalMedicine.recipeSection}/>}
                        {NaturalMedicine.recipeInstructionsSection && <RecipeInstructionsSection instructions={NaturalMedicine.recipeInstructionsSection}/>}
                        {NaturalMedicine.treatmentInstructionsSection && <TreatmentInstructionsSection />}
                    </>
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