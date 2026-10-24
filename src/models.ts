type IPhotoCredit = {
    name: string,
    nameURL: string,
    source: string,
    sourceURL: string
}

export type IHealthKey = {
    id: string,
    title: string,
    photoCredit: IPhotoCredit
    paragraphs: string[]
}

export type IAboutUsPoint = {
    type: 'paragraph' | 'url',
    content: string,
    friendlyContent?: string
}