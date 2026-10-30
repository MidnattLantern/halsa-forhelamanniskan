export type IEffectsSection = {
    heading: string,
    effects: string[]
}

export type IRecipeSection = {
    item: string,
    volume: string
}

export type IUList = {
    type: 'uList',
    uListHeading: string,
    uListContent: string[]
}

export type IFormattedParagraph = {
    type: 'formattedParagraph',
    content: string,
    textFormat: 'strong' | 'strikethrough' | 'underline' | 'italic'
}

export type INaturalMedicine = {
    name: string,
    effectsSection?: IEffectsSection,
    recipeSection?: IRecipeSection[],
    recipeInstructionsSection?: string[],
    treatmentInstructionsSection?: string[] | IUList[] | IFormattedParagraph[]
}