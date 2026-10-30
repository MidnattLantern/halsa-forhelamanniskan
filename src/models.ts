type IPhotoCredit = {
    name: string,
    nameURL: string,
    source: string,
    sourceURL: string
}

export type IFlexibleContentItem = {
    type: 'paragraph' | 'url' | 'bulletHeading' | 'bulletPoint' | 'innerHTML',
    content: string,
    friendlyContent?: string
}

export type IHealthKey = {
    title: string,
    photoURL: string,
    photoCredit: IPhotoCredit
    paragraphs: string[]
}

export type IAboutUsPoint = IFlexibleContentItem

type IContentSection = {
    heading?: string,
    bulletPoints?: boolean,
    contentList: IFlexibleContentItem[]
}

export type IAbusePoint = {
    title: string,
    contentSections: IContentSection[],
    photoCredit: IPhotoCredit
}

export type INaturalMedicineRecipe = {
    item: string,
    volume: string
}

export type INaturalMedicineEffects = {
    heading: string,
    effects: string[]
}

export type INaturalMedicine = {
    name: string,
    effectsSection?: INaturalMedicineEffects,
    recipeSection?: INaturalMedicineRecipe[],
    recipeInstructionsSection?: string[],
    treatmentInstructionsSection?: IFlexibleContentItem[]
}

export type INervousSystem = {
    heading: string,
    contentSections: IFlexibleContentItem[][]
}

export type IHerbRecipe = {
    title: string,
    ingredients: string[],
    instructions: string[]
}

export type IHerbsFlora = {
    heading: string,
    contents: string[]
}

export type IFirstAidKit = {
    bulletHeading: string,
    content: string[]
}