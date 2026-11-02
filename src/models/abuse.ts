export type IOverviewObject = {
    type: 'uList' | 'url',
    uListHeading?: string,
    uListContent?: [string]
}

export type IOverview = string[] | IOverviewObject[]

type IPhotoCredit = {
    name: string,
    nameURL: string,
    source: string,
    sourceURL: string
}

type IUList = {
    type: 'uList',
    uListHeading?: string,
    uListContent: string[]
}

type IUrl = {
    type: 'url',
    content: string,
    friendlyContent: string
}

export type ISubstanceParagraph = IUList | IUrl

export type IAddictiveSubstance = {
    title: string,
    photoURL: string,
    photoCredit: IPhotoCredit,
    paragraphs: string[] | IUList[] | IUrl[]
}

export type IReplacementEffects = IUrl

export type IReplacement = {
    name: string,
    effects: IReplacementEffects[]
}