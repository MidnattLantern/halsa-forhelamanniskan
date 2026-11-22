
type IUrl = {
    type: "url",
    urlString: string,
    friendlyUrlString: string
}

type IUListFormat = {
    type: "uList",
    uListHeading: string,
    uListContent: string[]
}

type IPhotoCredit = {
    name: string,
    nameURL: string,
    source: string,
    sourceURL: string
}

export type IOverview = string | IUListFormat | IUrl

export type IAddictiveSubstance = {
    title: string,
    photoURL: string,
    photoCredit: IPhotoCredit,
    paragraphs: string[] | IUListFormat[] | IUrl[]
}

export type IReplacement = string | IUListFormat | IUrl