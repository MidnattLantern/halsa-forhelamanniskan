type IPhotoCredit = {
    name: string,
    nameUrl: string,
    source: string,
    sourceUrl: string
}

export type IHealthKey = {
    title: string,
    photoUrl: string,
    photoCredit: IPhotoCredit,
    paragraphs: string [] // consider turning this into the univerally common/ formatted paragraph
}