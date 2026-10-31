type IPhotoCredit = {
    name: string,
    nameURL: string,
    source: string,
    sourceURL: string
}

type IUList = {
    type: 'uList',
    uListHeading: string,
    uListContent: string[]
}

type IUrl = {
    type: 'url',
    content: string,
    friendlyContent: string
}

export type IAddictiveSubstance = {
    title: string,
    photoURL: string,
    photoCredit: IPhotoCredit,
    paragraphs: string[] | IUList[] | IUrl[]
}