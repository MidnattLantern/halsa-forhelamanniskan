type IUrl = {
    type: "url",
    urlString: string,
    friendlyUrlString: string
}

type IUListFormat = {
    type: "uList",
    uListHeading?: string,
    uListContent: string[]
}

export type IOverview = string | IUListFormat | IUrl
export type IClassification = string | IUListFormat | IUrl
export type IFlora = string | IUListFormat | IUrl

export type IRecipe = {
    title: string,
    ingredients: string[],
    instructions: string[]
}