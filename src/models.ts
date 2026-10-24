type IPhotoCredit = {
    name: string,
    nameURL: string,
    source: string,
    sourceURL: string
}

type IFlexibleContentItem = {
    type: 'paragraph' | 'url',
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
    contentList: IFlexibleContentItem
}

export type IAbusePoint = {
    title: string,
    contentSections: IContentSection,
    photoCredit: IPhotoCredit
}