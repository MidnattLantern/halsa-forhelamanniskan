import { Route, Routes } from "react-router"
import naturalMedicineDataRaw from "@/content/natural-medicine.json"
import type {
    IEffectsSection,
    IFormattedParagraph,
    INaturalMedicine,
    IRecipeSection,
    IUList
} from "@/models/natural-medicine"

function DisplayPage() {
    const naturalMedicineData = naturalMedicineDataRaw as INaturalMedicine[]

    function EffectsSection({section}: {section: IEffectsSection}) {
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

    function RecipeSection({section}: {section: IRecipeSection[]}) {
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

    function TreatmentInstructionsSection({section}: {section: string[] | IUList[] | IFormattedParagraph[]}) {
        function RegularParagraph({content}: {content: string}) {
            return <span>{content}</span>
        }

        function ObjectContent({instruction} : {instruction: IUList | IFormattedParagraph}) {

            if (instruction.type === 'uList') {
                return (
                    <ul>
                        <h5>{instruction.uListHeading}</h5>
                        {instruction.uListContent.map((subInstruction, index) => (
                            <li key={index}>{subInstruction}</li>
                        ))}
                    </ul>
                )
            }

            if (instruction.type === 'formattedParagraph') {
                switch(instruction.textFormat) {
                    case 'strong':
                        return <strong>{instruction.content}</strong>
                    case 'strikethrough':
                        return <s>{instruction.content}</s>
                    case 'underline':
                        return <u>{instruction.content}</u>
                    case 'italic':
                        return <i>{instruction.content}</i>
                }
            }

        }

        return (
            <>
                <h4>Behandling</h4>
                <ul>
                    {section.map((instruction, index) => (
                        <li key={index}>
                            {typeof instruction === 'string' && <RegularParagraph content={instruction}/>}
                            {typeof instruction === 'object' && <ObjectContent instruction={instruction}/>}
                        </li>
                    ))}
                </ul>
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
                        {NaturalMedicine.treatmentInstructionsSection && <TreatmentInstructionsSection section={NaturalMedicine.treatmentInstructionsSection}/>}
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