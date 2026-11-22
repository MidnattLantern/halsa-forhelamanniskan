type IUList = {
    type: "uList",
    uListHeading: string,
    uListContent: string[]
}

export type IObjectContent = IUList

export type IOverview = string[] | IUList[]

export type IClassification = {
    heading: string,
    contents: string[]
}

export type IRecipe = {
    title: string,
    ingredients: string[],
    instructions: string[]
}

export type IFlora = {
    heading: string,
    contents: string[]
}