type IDecorated = {
    type: "decorated",
    decoration: "strong" | "strikethrough" | "underline" | "italic",
    text: string
}

type IUrlFormat = {
    type: "url",
    urlString: string,
    friendlyUrlString: string
}

type IUListFormat = {
    type: "uList",
    uListHeading?: string,
    uListContent: string[]
}

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
    effectsSection?: string[] | IUListFormat[] | IUrlFormat[] | IDecorated[],
    recipeSection?: IRecipeSection[],
    recipeInstructionsSection?: string[],
    treatmentInstructionsSection?:  string[] | IUListFormat[] | IUrlFormat[] | IDecorated[]
}