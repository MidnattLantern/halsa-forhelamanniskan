type IUList = {
    type: "uList",
    uListHeading: string,
    uListContent: string[]
}

export type IObjectContent = IUList

export type IOverview = string[] | IUList[]