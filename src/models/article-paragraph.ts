type IUListFormat = {
    type: "uList",
    uListHeading: string,
    uListContent: string[]
}

export type IArticleParagraph = string | IUListFormat