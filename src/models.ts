type IPhotoCredit = {
    name: string,
    nameURL: string,
    source: string,
    sourceURL: string
}

type IFlexibleContentItem = {
    type: 'paragraph' | 'url' | 'bulletHeading' | 'bulletPoint',
    content: string,
    friendlyContent?: string
}

export type IHealthKey = {
    id: string,
    title: string,
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

type INaturalMedicineRecipe = {
    item: string,
    volume: string
}

export type INaturalMedicine = {
    name: string,
    effects?: IFlexibleContentItem[],
    recipe?: INaturalMedicineRecipe[],
    recipeInstructions?: string[],
    treatmentInstructions?: IFlexibleContentItem[]
}